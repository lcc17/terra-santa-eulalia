"use client";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminPanelLayout({ children }) {
  return (
    <AdminGuard>
      <AdminSidebar />
      <div className="lg:pl-64 pt-14 lg:pt-0">
        <div className="p-6 lg:p-10">{children}</div>
      </div>
    </AdminGuard>
  );
}
