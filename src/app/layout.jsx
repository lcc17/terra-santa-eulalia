import "./globals.css";
import { AppProvider } from "@/lib/context";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Terra Santa Eulalia — Natural Hair Care & Professional Training",
  description:
    "Discover natural services, products, and philosophy courses in an immersive earthy experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-cream text-earth-brown antialiased scroll-smooth">
        <AppProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
