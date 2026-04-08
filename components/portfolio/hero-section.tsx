"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm tracking-wider">
              MAHASISWA INFORMATIKA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Nama Anda
            </h1>
            <p className="text-xl text-muted-foreground">
              Aspiring Software Developer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Saya adalah mahasiswa Informatika yang passionate dalam membangun
            aplikasi web dan software. Fokus pada pengembangan dengan{" "}
            <span className="text-primary font-medium">Python</span>,{" "}
            <span className="text-primary font-medium">Java</span>,{" "}
            <span className="text-primary font-medium">JavaScript</span>, dan{" "}
            <span className="text-primary font-medium">Web Development</span>.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 pt-4">
            <Link
              href="#about"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="text-sm font-medium tracking-wide">TENTANG</span>
            </Link>
            <Link
              href="#skills"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="text-sm font-medium tracking-wide">KEAHLIAN</span>
            </Link>
            <Link
              href="#projects"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="text-sm font-medium tracking-wide">PROYEK</span>
            </Link>
            <Link
              href="#certificates"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="text-sm font-medium tracking-wide">SERTIFIKAT</span>
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
              <span className="text-sm font-medium tracking-wide">KONTAK</span>
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">{"</>"}</div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground">
              Python
            </div>
            <div className="absolute top-1/4 -left-8 px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground">
              Java
            </div>
            <div className="absolute bottom-8 -right-6 px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground">
              JavaScript
            </div>
            <div className="absolute -bottom-2 left-8 px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground">
              HTML/CSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
