import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HW Nexus — Smart Computer & Hardware Diagnostics",
  description: "All-in-one computer hardware and software diagnostic workspace. Real-time troubleshooting, system recovery, and verified repair guides.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500;1,6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-teal-100 selection:text-teal-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
