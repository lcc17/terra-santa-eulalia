"use client";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream font-sans text-earth-brown">
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "#4A3A24", color: "#F4F1E6", borderRadius: 0 },
        }}
      />
      {children}
    </div>
  );
}
