import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Vishwas S | AI & Software Engineer",
  description: "Portfolio of Vishwas S, an AI & Machine Learning student and Software Developer specializing in Python, Angular, and full-stack development.",
  keywords: ["Vishwas S", "Portfolio", "Software Engineer", "AI Engineer", "Machine Learning", "Full Stack Developer", "Python", "React", "Next.js"],
  authors: [{ name: "Vishwas S" }],
  openGraph: {
    title: "Vishwas S | AI & Software Engineer",
    description: "Portfolio of Vishwas S, an AI & Machine Learning student and Software Developer.",
    url: "https://vishwas-portfolio.vercel.app", // Placeholder URL
    siteName: "Vishwas S Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-electric-blue selection:text-white`}>
        {/* Noise overlay */}
        <div className="bg-noise" />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
