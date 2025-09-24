import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SchoolDataProvider } from "@/context/SchoolDataContext";
import { AuthProvider } from "@/context/AuthContext";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Management System",
  description: "Complete school management solution for students, fees, and administration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <SchoolDataProvider>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </SchoolDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
