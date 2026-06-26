"use client";

import { useEffect } from "react";

export default function PreloaderController() {
  useEffect(() => {
    const preloader = document.getElementById("preloader-root");
    const percentEl = document.getElementById("preloader-percent");
    const barEl = document.getElementById("preloader-bar");

    // Jika preloader tidak ada di DOM, hentikan
    if (!preloader) return;

    // Jika sudah pernah dimuat di sesi ini, langsung sembunyikan elemen secara instan
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded === "true") {
      preloader.style.display = "none";
      return;
    }

    // Kunci scroll body selama preloader aktif
    document.body.style.overflow = "hidden";

    // Durasi pemuatan 3000ms (3 detik)
    // 3000ms / 100 langkah = 30ms per kenaikan 1% secara linear
    let currentProgress = 0;
    const intervalTime = 30;

    const timer = setInterval(() => {
      currentProgress += 1;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);

        setTimeout(() => {
          // Lakukan slide up preloader menggunakan CSS murni (hardware accelerated)
          preloader.style.transform = "translateY(-100%)";
          sessionStorage.setItem("hasLoaded", "true");

          // Pulihkan scroll body
          document.body.style.overflow = "";

          // Sembunyikan elemen preloader setelah animasi slide-up (800ms) selesai agar tidak menghalangi interaksi dan aman dari rekonsiliasi React
          setTimeout(() => {
            preloader.style.display = "none";
          }, 850);
        }, 150);
      }

      // Perbarui elemen persentase secara langsung di DOM (tanpa state re-render React)
      if (percentEl) {
        percentEl.textContent = `${currentProgress.toString().padStart(3, "0")}%`;
      }

      // Perbarui lebar garis pemuatan secara langsung di DOM
      if (barEl) {
        barEl.style.width = `${currentProgress}%`;
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return null; // Tidak me-render elemen visual React apa pun ke DOM
}
