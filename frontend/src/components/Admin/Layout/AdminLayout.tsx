"use client";

import { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <AdminHeader
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <AdminSidebar
        onClose={() => setSidebarOpen(false)}
        isOpen={sidebarOpen}
      />

      <main className="flex-1 lg:ml-64  p-6 pt-20">
        <div className="max-w-full ">{children}</div>
      </main>
    </div>
  );
}
