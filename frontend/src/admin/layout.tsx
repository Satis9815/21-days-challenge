import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import React from "react";

const AdminRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminRootLayout;
