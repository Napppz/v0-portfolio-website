"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            KONTAK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hubungi Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu
              untuk menghubungi saya melalui form atau kontak di bawah ini.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">email@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telepon</p>
                  <p className="text-foreground">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="text-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama</FieldLabel>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Nama Anda"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="email@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Pesan</FieldLabel>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tulis pesan Anda..."
                  rows={4}
                  required
                />
              </Field>
            </FieldGroup>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Mengirim..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </>
              )}
            </Button>

            {submitted && (
              <p className="text-center text-primary">
                Pesan berhasil dikirim! Terima kasih.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
