"use client";

import { usePathname } from "next/navigation";

export function AdminHeader() {
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path === "/admin") return "Bảng điều khiển";
    if (path.includes("/orders")) return "Quản lý Đơn hàng";
    if (path.includes("/invoices")) return "Quản lý Hóa đơn";
    if (path.includes("/tables")) return "Quản lý Sơ đồ bàn";
    if (path.includes("/areas")) return "Quản lý Khu vực";
    if (path.includes("/products")) return "Quản lý Thực đơn & Món ăn";
    if (path.includes("/product-categories")) return "Danh mục món ăn";
    if (path.includes("/recipes")) return "Công thức & Định lượng";
    if (path.includes("/ingredients")) return "Quản lý Kho nguyên liệu";
    if (path.includes("/ingredient-categories")) return "Phân loại nguyên liệu";
    if (path.includes("/branches")) return "Quản lý Chi nhánh";
    if (path.includes("/brands")) return "Thương hiệu & Nhà cung ứng";
    if (path.includes("/employees")) return "Quản lý Nhân sự";
    if (path.includes("/departments")) return "Phòng ban";
    if (path.includes("/positions")) return "Chức vụ";
    if (path.includes("/roles")) return "Phân quyền & Vai trò";
    if (path.includes("/users")) return "Tài khoản nhân viên";
    if (path.includes("/customers")) return "Quản lý Khách hàng";
    if (path.includes("/discounts")) return "Khuyến mãi & Giảm giá";
    if (path.includes("/audit-logs")) return "Nhật ký hệ thống";
    return "Quản trị";
  };

  return (
    <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3 pl-10 lg:pl-0">
        <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {getPageTitle(pathname)}
        </h1>
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <span className="text-xs font-mono text-zinc-500">{pathname}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Branch Selector placeholder */}
        <div className="hidden sm:flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/60 text-xs">
          <span className="text-zinc-500 font-medium">Chi nhánh:</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Toàn hệ thống (HQ)</span>
        </div>

        {/* User profile badge */}
        <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            AD
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200 leading-none">Quản trị viên</p>
            <p className="text-[10px] text-zinc-400 mt-0.5 leading-none">admin@restaurant.vn</p>
          </div>
        </div>
      </div>
    </header>
  );
}
