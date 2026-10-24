import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" className="dark bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] scroll-smooth" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500;1,6..72,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('hwn_theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
                document.documentElement.style.colorScheme = 'dark';
              }
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-teal-500/30 selection:text-teal-200 min-h-screen flex flex-col bg-[#fbfdfc] dark:bg-[#060b11] text-slate-900 dark:text-[#f0fdfa] transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
