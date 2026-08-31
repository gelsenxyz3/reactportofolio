/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Layout, Rocket, Mail, Send, User, BookOpen } from "lucide-react";
import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import Card from "./components/Card";
import fotoProfil from "./assets/bn.jpg";

export default function App() {
  // State untuk melacak posisi mouse (Background Animasi Bergerak)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        clientY: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Merancang antarmuka web yang responsif, modern, dan interaktif menggunakan React dan Tailwind CSS.",
    },
    {
      icon: Code,
      title: "Software Logic & API",
      description:
        "Mengembangkan logika pemrograman yang bersih dan integrasi API untuk kebutuhan aplikasi web.",
    },
    {
      icon: Rocket,
      title: "UI/UX Implementation",
      description:
        "Menerjemahkan desain konseptual menjadi komponen kode yang presisi dan nyaman digunakan.",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "Aplikasi toko online interaktif dengan fitur keranjang belanja dan antarmuka modern.",
      tags: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "School Management System",
      description:
        "Sistem informasi berbasis web untuk pengelolaan data sekolah.",
      tags: ["JavaScript", "Tailwind", "React"],
    },
    {
      title: "Interactive Portfolio",
      description:
        "Landing page portofolio futuristik bertema gelap dengan animasi interaktif.",
      tags: ["React", "Framer Motion"],
    },
  ];

  return (
    <div className='bg-dark-bg text-slate-100 min-h-screen relative overflow-hidden'>
      {/* BACKGROUND ANIMASI BERGERAK MENGIKUTI MOUSE */}
      <div
        className='pointer-events-none fixed inset-0 z-0 transition-transform duration-300 ease-out'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.clientY}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      <Navbar />

      {/* HERO SECTION */}
      <section
        id='hero'
        className='min-h-screen flex items-center justify-center px-6 pt-24 relative z-10'>
        <div className='max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center'>
          {/* SISI KIRI: TEKS EJA & DESKRIPSI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center md:text-left'>
            <span className='inline-block border border-purple-primary/40 bg-purple-primary/10 text-purple-glow px-4 py-1.5 rounded-full text-sm font-medium mb-6'>
              Siswa Rekayasa Perangkat Lunak
            </span>

            {/* Tulisan dengan Ejaan yang Jelas dan Efek Glow Gradient */}
            <h1 className='text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4'>
              Halo, Saya <br />
              <span className='bg-gradient-to-r from-purple-primary via-purple-accent to-purple-glow bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]'>
                Gelsen Kristovan
              </span>
            </h1>

            <p className='text-purple-glow/90 font-medium text-lg mb-4 flex items-center justify-center md:justify-start gap-2'>
              <BookOpen size={20} /> SMK Bagimu Negeri Ku
            </p>

            <p className='text-slate-400 text-base md:text-lg mb-8 leading-relaxed'>
              Siswa jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada
              pengembangan aplikasi web modern, antarmuka interaktif, dan
              penulisan kode yang bersih.
            </p>

            <div className='flex gap-4 justify-center md:justify-start'>
              <a
                href='#projects'
                className='bg-purple-primary hover:bg-purple-accent text-white px-8 py-3.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)] transition duration-300'>
                Lihat Proyek
              </a>
              <a
                href='#contact'
                className='border border-purple-primary/40 hover:bg-purple-primary/10 text-purple-glow px-8 py-3.5 rounded-xl font-semibold transition duration-300'>
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          {/* SISI KANAN: FOTO PROFIL DENGAN ANIMASI KEREN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex justify-center relative'>
            {/* Animasi Ring Menyala di Belakang Foto */}
            <div className='absolute w-72 h-72 md:w-96 md:h-96 bg-purple-primary/30 rounded-full blur-3xl animate-pulse' />

            {/* Bingkai Foto Melayang (Floating Effect) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className='relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1.5 bg-gradient-to-b from-purple-primary via-purple-accent to-transparent shadow-[0_0_30px_rgba(139,92,246,0.3)]'>
              <div className='w-full h-full bg-card-bg rounded-xl overflow-hidden relative group'>
                <img
                  src={fotoProfil}
                  alt='Gelsen Kristovan'
                  className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60' />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <SectionWrapper id='about'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Tentang <span className='text-purple-glow'>Saya</span>
            </h2>
            <p className='text-slate-400 leading-relaxed mb-6'>
              Saya adalah seorang siswa di SMK Bagimu Negeri Ku jurusan Rekayasa
              Perangkat Lunak (RPL). Memiliki ketertarikan tinggi pada dunia
              pemrograman web dan pengembangan perangkat lunak.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='p-4 bg-card-bg rounded-xl border border-purple-primary/20'>
                <h4 className='text-xl font-bold text-purple-glow'>
                  SMK Bagimu Negeri Ku
                </h4>
                <p className='text-sm text-slate-400'>Instansi Pendidikan</p>
              </div>
              <div className='p-4 bg-card-bg rounded-xl border border-purple-primary/20'>
                <h4 className='text-xl font-bold text-purple-glow'>RPL</h4>
                <p className='text-sm text-slate-400'>Jurusan Spesialisasi</p>
              </div>
            </div>
          </div>

          <div className='bg-card-bg border border-purple-primary/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.1)]'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Fokus & Keahlian
            </h3>
            <ul className='space-y-3 text-slate-300'>
              <li className='flex items-center gap-2'>
                <span className='text-purple-glow'>✔</span> HTML, CSS,
                JavaScript Modern
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-purple-glow'>✔</span> Framework React.js &
                Vite
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-purple-glow'>✔</span> Utility-first CSS
                (Tailwind CSS)
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-purple-glow'>✔</span> Konsep Dasar
                Rekayasa Perangkat Lunak
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* SERVICE SECTION */}
      <SectionWrapper id='services'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
            Layanan & <span className='text-purple-glow'>Kemampuan</span>
          </h2>
          <p className='text-slate-400'>
            Keahlian bidang IT yang saya kembangkan selama studi di RPL.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </SectionWrapper>

      {/* PROJECT SECTION */}
      <SectionWrapper id='projects'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
            Proyek <span className='text-purple-glow'>Siswa</span>
          </h2>
          <p className='text-slate-400'>
            Hasil karya pemrograman dan pengembangan aplikasi yang telah dibuat.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </SectionWrapper>

      {/* CONTACT SECTION */}
      <SectionWrapper id='contact'>
        <div className='max-w-2xl mx-auto bg-card-bg border border-purple-primary/30 rounded-2xl p-8'>
          <div className='text-center mb-8'>
            <Mail className='w-12 h-12 text-purple-glow mx-auto mb-2' />
            <h2 className='text-3xl font-bold text-white'>Hubungi Gelsen</h2>
            <p className='text-slate-400 text-sm mt-1'>
              Kirimkan pesan atau tawaran kolaborasi proyek.
            </p>
          </div>
          <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className='block text-sm font-medium text-slate-300 mb-1'>
                Nama Pengirim
              </label>
              <input
                type='text'
                className='w-full bg-dark-bg border border-purple-primary/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-glow'
                placeholder='Masukkan nama Anda'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-300 mb-1'>
                Email
              </label>
              <input
                type='email'
                className='w-full bg-dark-bg border border-purple-primary/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-glow'
                placeholder='email@domain.com'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-300 mb-1'>
                Pesan
              </label>
              <textarea
                rows='4'
                className='w-full bg-dark-bg border border-purple-primary/30 rounded-lg p-3 text-white focus:outline-none focus:border-purple-glow'
                placeholder='Tuliskan pesan Anda di sini...'></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-purple-primary hover:bg-purple-accent text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300'>
              Kirim Pesan <Send size={18} />
            </button>
          </form>
        </div>
      </SectionWrapper>

      {/* FOOTER */}
      <footer className='border-t border-purple-primary/20 py-8 text-center text-slate-500 text-sm relative z-10'>
        <p>© 2026 Gelsen Kristovan — SMK Bagimu Negeri Ku (RPL).</p>
      </footer>
    </div>
  );
}
