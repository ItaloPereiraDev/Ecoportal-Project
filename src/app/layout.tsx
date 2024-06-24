import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecoportal Learning Guide",
  description: "Novice Implementation Technician Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <div className="hidden lg:flex min-w-[300px] border-r min-h-screen">
          <Sidebar/>
        </div>
        <div className="w-full h-full">
          <div className="p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
