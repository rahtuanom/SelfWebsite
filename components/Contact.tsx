"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import MagicCard from "./MagicCard";

export default function Contact() {
  const [liData, setLiData] = React.useState({
    avatarUrl: '',
    headline: 'Data Analyst & ML Practitioner | Full-Stack Web Development | Visual Data Storyteller | IT Graduate & RevoU MSIB Alumni'
  });

  React.useEffect(() => {
    const handleLinkedInData = (e: any) => {
      const { avatarUrl, texts } = e.detail;
      const nameIndex = texts.findIndex((t: string) => t.includes('Anom Hariyadi') || t.includes('I Gusti'));
      let headline = texts[nameIndex + 1];
      if (!headline || headline === 'View profile' || headline === 'LinkedIn') {
        headline = 'Data Analyst & ML Practitioner | Full-Stack Web Development | Visual Data Storyteller | IT Graduate & RevoU MSIB Alumni';
      }

      setLiData({
        avatarUrl: avatarUrl || '',
        headline: headline
      });
    };
    window.addEventListener('linkedin-data-loaded', handleLinkedInData as EventListener);
    return () => window.removeEventListener('linkedin-data-loaded', handleLinkedInData as EventListener);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="pt-20 pb-10 bg-slate-50 dark:bg-[#0f1115] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20 flex justify-center">
        <div className="w-[1000px] h-[1000px] absolute -top-40 border-[1px] border-slate-300 dark:border-white/10 rounded-full"></div>
        <div className="w-[800px] h-[800px] absolute -top-20 border-[1px] border-slate-300 dark:border-white/10 rounded-full"></div>
        <div className="w-[600px] h-[600px] absolute top-0 border-[1px] border-slate-300 dark:border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 tracking-tight">
          Let's Connect & Collaborate
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          Tertarik untuk bekerja sama, berdiskusi mengenai teknologi, atau sekadar bertukar sapa? <br className="hidden md:block" /> Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">

          {/* Custom Responsive LinkedIn Card (Balanced Span 3) + Dynamic Data */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 h-full">
            <MagicCard
              glowColor="rgba(10, 102, 194, 0.15)"
              borderColor="rgba(10, 102, 194, 0.5)"
              neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#0A66C2]"
              className="h-full w-full"
              innerClassName="bg-white dark:bg-[#111317] w-full h-full p-0"
            >
              {/* Silent Trigger for LinkedIn Data */}
              <Script src="/scripts/linkedin-profile.js" strategy="lazyOnload" />
              <div
                className="badge-base LI-profile-badge hidden"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="rahtuanomhariyadi"
                data-version="v1"
              >
                <a href="https://id.linkedin.com/in/rahtuanomhariyadi?trk=profile-badge">
                  I Gusti Ngurah Anom Hariyadi
                </a>
              </div>

              <Link href="https://id.linkedin.com/in/rahtuanomhariyadi" target="_blank" className="group flex flex-col h-full w-full relative">
                {/* Static Banner LinkedIn */}
                <div className="h-16 md:h-20 w-full relative shrink-0 overflow-hidden">
                  <img src="/baner-linkedin.png" alt="LinkedIn Banner" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
                  {/* Custom LinkedIn Badge Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                    <span className="font-bold text-xs tracking-tight text-slate-800 dark:text-white">Linked</span>
                    <span className="bg-[#0A66C2] text-white text-[10px] font-bold px-1 rounded-sm">in</span>
                  </div>
                </div>

                <div className="px-5 pb-5 flex-1 flex flex-col relative">
                  {/* Static Profile Picture LinkedIn */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-[#111317] bg-slate-100 dark:bg-slate-800 -mt-7 md:-mt-8 mb-3 overflow-hidden relative z-10 shrink-0 shadow-sm flex items-center justify-center text-slate-400">
                    <img src="/linkedin-profile.jpg" alt="I Gusti Ngurah Anom Hariyadi" className="w-full h-full object-cover" />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1 transition-colors group-hover:text-[#0A66C2]"
                      style={{ wordBreak: 'break-word' }}
                    >
                      I Gusti Ngurah Anom Hariyadi
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {liData.headline}
                    </p>

                    {/* Action Button */}
                    <div className="mt-auto inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 group-hover:border-slate-400 dark:group-hover:border-slate-400 transition-all">
                      View profile
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </motion.div>

          {/* Instagram Custom Card (Balanced Span 3) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 h-full">
            <MagicCard
              glowColor="rgba(225, 48, 108, 0.15)"
              borderColor="rgba(225, 48, 108, 0.5)"
              neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#E1306C]"
              className="h-full w-full"
              innerClassName="bg-white dark:bg-[#111317] w-full h-full p-0"
            >
              <Link href="https://instagram.com/rah2anom" target="_blank" className="group flex flex-col h-full w-full relative">
                {/* Banner Background (Animated Instagram Aurora Gradient) */}
                <div className="h-16 md:h-20 w-full relative shrink-0 overflow-hidden">
                  <motion.div
                    whileInView={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    viewport={{ once: false }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]"
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  {/* Custom Instagram Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C] dark:text-white">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="font-bold text-xs tracking-tight text-slate-800 dark:text-white">Instagram</span>
                  </div>
                </div>

                <div className="px-5 pb-5 flex-1 flex flex-col relative">
                  {/* Static Profile Picture Instagram */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-[#111317] bg-slate-100 dark:bg-slate-800 -mt-7 md:-mt-8 mb-3 overflow-hidden relative z-10 shrink-0 shadow-sm flex items-center justify-center text-slate-400">
                    <img src="/ig-profile.webp" alt="Instagram Profile" className="w-full h-full object-cover" />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1 transition-colors group-hover:text-[#E1306C]"
                      style={{ wordBreak: 'break-word' }}
                    >
                      I Gusti Ngurah Anom Hariyadi
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 font-medium mb-3">
                      @rah2anom
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      You can look around for a while... there's nothing interesting tho.
                    </p>

                    {/* Action Button */}
                    <div className="mt-auto inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 group-hover:border-slate-400 dark:group-hover:border-slate-400 transition-all">
                      Follow
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </motion.div>

          {/* Email Card (Balanced Span 2) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 h-full">
            <MagicCard
              glowColor="rgba(239, 68, 68, 0.15)"
              borderColor="rgba(239, 68, 68, 0.5)"
              neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#ea4335]"
              className="h-full"
            >
              <Link href="mailto:rahtuanom@gmail.com" className="group flex flex-col justify-between h-full p-4 md:p-6 transition-all duration-300 dark:bg-black/20">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-red-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Email</p>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-red-500 transition-colors break-words w-full">rahtuanom@gmail.com</h3>
                </div>
              </Link>
            </MagicCard>
          </motion.div>

          {/* GitHub Card */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 h-full">
            <Link href="https://github.com/rahtuanom" target="_blank" className="group flex flex-col justify-between h-full p-4 md:p-6 rounded-2xl transition-all duration-300 bg-slate-900 border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#333] hover:-translate-y-1 dark:bg-slate-900 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-md dark:hover:shadow-xl dark:hover:border-slate-500">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Repositori</p>
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-slate-300 transition-colors">GitHub</h3>
              </div>
            </Link>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 h-full">
            <MagicCard
              glowColor="rgba(37, 211, 102, 0.15)"
              borderColor="rgba(37, 211, 102, 0.5)"
              neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#25D366]"
              className="h-full"
            >
              <Link href="https://wa.me/62895367473629" target="_blank" className="group flex flex-col justify-between h-full p-4 md:p-6 transition-all duration-300 dark:bg-black/20">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-[#25D366]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Pesan Cepat</p>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                </div>
              </Link>
            </MagicCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
