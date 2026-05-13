import "./globals.css";
import { AppProvider } from "@/lib/context";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CookiesBanner from "@/components/ui/CookiesBanner";

export const metadata = {
  title: "Terra Santa Eulalia | Terapia Capilar Avanzada y Bienestar Orgánico",
  description:
    "Centro de bienestar orgánico en Barcelona especializado en terapia capilar avanzada, spa orgánico y servicios de lujo. Descubre nuestra filosofía de silencio visual y wellness orgánico.",
  icons: {
    icon: '/logo-terra-santa-eulalia-cosmetica.png',
    apple: '/logo-terra-santa-eulalia-cosmetica.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-cream text-earth-brown antialiased scroll-smooth" suppressHydrationWarning={true}>
        <AppProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookiesBanner />
        </AppProvider>
      </body>
    </html>
  );
}
