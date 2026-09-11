"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: string;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

const NAVIGATION: NavGroup[] = [
  {
    group: "Tổng quan",
    items: [
      { name: "Bảng điều khiển", href: "/admin", icon: "dashboard" },
    ],
  },
  {
    group: "Vận hành & Phục vụ",
    items: [
      { name: "Đơn hàng", href: "/admin/orders", icon: "order", badge: "Live" },
      { name: "Hóa đơn", href: "/admin/invoices", icon: "invoice" },
      { name: "Sơ đồ bàn", href: "/admin/tables", icon: "table" },
      { name: "Khu vực", href: "/admin/areas", icon: "area" },
    ],
  },
  {
    group: "Thực đơn & Bếp",
    items: [
      { name: "Món ăn & Đồ uống", href: "/admin/products", icon: "product" },
      { name: "Danh mục món", href: "/admin/product-categories", icon: "category" },
      { name: "Công thức & Định lượng", href: "/admin/recipes", icon: "recipe" },
    ],
  },
  {
    group: "Kho & Cung ứng",
    items: [
      { name: "Kho nguyên liệu", href: "/admin/ingredients", icon: "ingredient" },
      { name: "Loại nguyên liệu", href: "/admin/ingredient-categories", icon: "folder" },
      { name: "Thương hiệu & NCC", href: "/admin/brands", icon: "brand" },
    ],
  },
  {
    group: "Chi nhánh & Chuỗi",
    items: [
      { name: "Chi nhánh", href: "/admin/branches", icon: "branch" },
    ],
  },
  {
    group: "Nhân sự & Phân quyền",
    items: [
      { name: "Nhân viên", href: "/admin/employees", icon: "employee" },
      { name: "Phòng ban", href: "/admin/departments", icon: "department" },
      { name: "Chức vụ", href: "/admin/positions", icon: "position" },
      { name: "Vai trò & Quyền", href: "/admin/roles", icon: "role" },
      { name: "Cấp tài khoản NV", href: "/admin/users", icon: "user" },
    ],
  },
  {
    group: "Khách hàng & Marketing",
    items: [
      { name: "Khách hàng & Ví", href: "/admin/customers", icon: "customer" },
      { name: "Mã giảm giá", href: "/admin/discounts", icon: "discount" },
    ],
  },
  {
    group: "Hệ thống",
    items: [
      { name: "Nhật ký hệ thống", href: "/admin/audit-logs", icon: "audit" },
    ],
  },
];

function renderNavIcon(icon: string) {
  switch (icon) {
    case "dashboard":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case "order":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case "invoice":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      );
    case "table":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case "area":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "product":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "recipe":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "ingredient":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "branch":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "employee":
    case "user":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "customer":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "discount":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      );
    case "audit":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      );
  }
}

export function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu trigger */}
      <div className="lg:hidden fixed top-3 left-3 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm"
        >
          <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 w-64 bg-zinc-950 text-zinc-200 flex flex-col border-r border-zinc-800/80 transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-zinc-800/80">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold shadow-md shadow-emerald-500/20">
              R
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white block">RESTAURANT OS</span>
              <span className="text-[10px] text-zinc-400 font-mono">Quản Trị Hệ Thống</span>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 scrollbar-thin">
          {NAVIGATION.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                {section.group}
              </div>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? "text-emerald-400" : "text-zinc-400"}>
                          {renderNavIcon(item.icon)}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-mono">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px]">API: Online</span>
          </div>
          <span className="text-[11px] font-mono">v1.0.0</span>
        </div>
      </aside>
    </>
  );
}
