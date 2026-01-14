import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "./context/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Metaseti Digital Indonesia",
  description: "Impact Engineered. Advantage Secured.",
  icons: {
    icon: [
      { url: '/metaseti-icon.png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={poppins.className + " bg-black text-white"}
      >
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}