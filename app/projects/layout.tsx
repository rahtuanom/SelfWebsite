import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koleksi Karya & Riset — Portofolio Proyek",
  description: "Kumpulan proyek, riset akademik, dan karya I Gusti Ngurah Anom Hariyadi: Topic Modeling NLP, Computer Vision, Web Development, IoT, UI/UX Design, Infografis pemenang nasional, dan lainnya. Dibangun dengan Python, Next.js, Figma, dan teknologi modern.",
  openGraph: {
    title: "Portofolio Proyek — Anom Hariyadi",
    description: "Koleksi proyek Data Science, Web Development, AI, IoT, dan Design dari I Gusti Ngurah Anom Hariyadi.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
