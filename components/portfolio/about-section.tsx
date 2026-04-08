"use client";

import { GraduationCap, Code2, Briefcase, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            TENTANG SAYA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mengenal Lebih Dekat
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Saya adalah seorang mahasiswa Informatika yang memiliki passion
              dalam dunia teknologi dan pengembangan software. Selama masa
              perkuliahan, saya telah mengembangkan berbagai keahlian dalam
              bahasa pemrograman dan framework modern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Saya percaya bahwa teknologi dapat memberikan solusi untuk berbagai
              permasalahan di dunia nyata. Oleh karena itu, saya selalu berusaha
              untuk terus belajar dan mengembangkan kemampuan saya dalam bidang
              software development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Pendidikan</h3>
              <p className="text-sm text-muted-foreground">
                S1 Informatika
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <Code2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Fokus</h3>
              <p className="text-sm text-muted-foreground">
                Web Development
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <Briefcase className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Pengalaman</h3>
              <p className="text-sm text-muted-foreground">
                Proyek Kampus
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Minat</h3>
              <p className="text-sm text-muted-foreground">
                AI & Data Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
