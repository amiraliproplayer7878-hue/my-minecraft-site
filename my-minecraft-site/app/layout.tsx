// app/layout.tsx
import type { Metadata } from "next";
// import Navbar from "@/components/Navbar"; // <-- این خط حذف شده
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel Realm",
  description: "تجربه‌ای متفاوت در سرور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* <Navbar /> */} {/* <-- این تگ هم حذف شده */}
        <main style={{ paddingTop: '80px' }}> {/* Adjust this padding if needed */}
          {children}
        </main>
      </body>
    </html>
  );
}
