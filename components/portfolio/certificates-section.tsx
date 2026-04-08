"use client";

import { useState, useCallback } from "react";
import { Upload, X, FileImage, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export function CertificatesSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: "1",
      name: "Contoh Sertifikat Python",
      issuer: "Coursera",
      date: "2024",
      imageUrl: "",
    },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      alert("Silakan upload file gambar atau PDF");
      return;
    }

    setIsUploading(true);

    // Create object URL for preview
    const imageUrl = URL.createObjectURL(file);

    // Simulate upload delay
    setTimeout(() => {
      const newCert: Certificate = {
        id: Date.now().toString(),
        name: file.name.replace(/\.[^/.]+$/, ""),
        issuer: "Issuer",
        date: new Date().getFullYear().toString(),
        imageUrl,
      };

      setCertificates((prev) => [...prev, newCert]);
      setIsUploading(false);
    }, 1000);
  };

  const removeCertificate = (id: string) => {
    setCertificates((prev) => prev.filter((cert) => cert.id !== id));
  };

  return (
    <section id="certificates" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            SERTIFIKAT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sertifikat & Pencapaian
          </h2>
        </div>

        {/* Upload Area */}
        <div
          className={`relative mb-8 p-8 border-2 border-dashed rounded-lg transition-colors ${
            dragActive
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="p-4 bg-secondary rounded-full">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-medium">
                {isUploading ? "Mengupload..." : "Drag & drop sertifikat di sini"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                atau klik untuk memilih file (PNG, JPG, PDF)
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => removeCertificate(cert.id)}
                className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Hapus sertifikat"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <FileImage className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>

              {cert.imageUrl && (
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewCert(cert)}
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={cert.imageUrl} download={cert.name}>
                      <Download className="w-4 h-4 mr-2" />
                      Unduh
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <FileImage className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Belum ada sertifikat. Upload sertifikat pertama Anda!</p>
          </div>
        )}

        {/* Preview Dialog */}
        <Dialog open={!!previewCert} onOpenChange={() => setPreviewCert(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{previewCert?.name}</DialogTitle>
            </DialogHeader>
            {previewCert?.imageUrl && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={previewCert.imageUrl}
                  alt={previewCert.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
