"use client";
import { usePathname } from "next/navigation";

// El panel /admin tiene su propio shell: sin Navbar/Footer/Cookies del sitio.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return children;
}
