"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Calendar, BookOpen, Code2, X, icons } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

export function AdminSidebar({ onClose, isOpen }: SidebarProps) {
  const pathname = usePathname();
  const menuItems = [
    {
      id: "days",
      label: "Days",
      icon: Calendar,
      href: ROUTES.ADMIN_DAYS_MANAGER,
    },
    {
      id: "problems",
      label: "Problems",
      icon: BookOpen,
      href: ROUTES.ADMIN_PROBLEMS_MANAGER,
    },
    {
      id: "solutions",
      label: "Solutions",
      icon: Code2,
      href: ROUTES.ADMIN_SOLUTIONS_MANAGER,
    },

  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-2">
          {/* Close Button on Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden w-full justify-start mb-4"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>

          {/* Menu Items */}
          <div className="space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn("w-full flex py-1.5 px-3 rounded-sm items-center cursor-pointer font-medium justify-start", pathname===item.href ? "bg-primary text-primary-foreground hover:bg-primary/90":"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50")}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
