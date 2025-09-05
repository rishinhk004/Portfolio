import "./globals.css";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Rishiraj Saha - Full Stack Developer Portfolio",
  description: "Rishiraj Saha is a Full Stack Developer and ECE student at NIT Silchar. Specializing in TypeScript, React, Node.js, and modern web technologies. View projects, experience, and contact information.",
  keywords: [
    "Rishiraj Saha",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "NIT Silchar",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "T3 Stack",
    "GraphQL",
    "System Design"
  ],
  authors: [{ name: "Rishiraj Saha" }],
  publisher: "Rishiraj Saha",
  openGraph: {
    title: "Rishiraj Saha - Full Stack Developer Portfolio",
    description: "Rishiraj Saha is a Full Stack Developer and ECE student at NIT Silchar. Specializing in TypeScript, React, Node.js, and modern web technologies. View projects, experience, and contact information.",
    url: "https://rishirajsaha.vercel.app",
    siteName: "Rishiraj Saha Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757095790/WhatsApp_Image_2025-09-02_at_19.08.56_0217cc11_kxefdo.jpg",
        width: 1200,
        height: 630,
        alt: "Rishiraj Saha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-gray-200 antialiased`}>
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          duration={3000}
        />
        <div className="w-[90%] md:w-[70%] mx-auto flex flex-col items-start">
          <Navbar />
          <main className="pt-32 pb-20">{children}</main>
          <Social />
        </div>
      </body>
    </html>
  );
}
