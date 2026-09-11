import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Đơn hàng hôm nay", value: "128", change: "+12%", color: "emerald", href: "/admin/orders" },
    { label: "Bàn đang phục vụ", value: "18 / 32", change: "56% công suất", color: "blue", href: "/admin/tables" },
    { label: "Món ăn trong thực đơn", value: "64", change: "4 danh mục", color: "amber", href: "/admin/products" },
    { label: "Nguyên liệu cần nhập", value: "3 món", change: "Dưới ngưỡng an toàn", color: "rose", href: "/admin/ingredients" },
  ];

  const modules = [
    { title: "Quản lý Đơn hàng", desc: "Xem danh sách order, cập nhật trạng thái chế biến món ăn.", href: "/admin/orders", badge: "GET, POST /api/Orders" },
    { title: "Sơ đồ Bàn & Khu vực", desc: "Quản lý vị trí bàn, sức chứa và trạng thái bàn trống/đang dùng.", href: "/admin/tables", badge: "/api/RestaurantTables & /api/Areas" },
    { title: "Thực đơn & Món ăn", desc: "Cập nhật món ăn, hình ảnh, phân loại và giá bán.", href: "/admin/products", badge: "/api/Products & /api/ProductCategories" },
    { title: "Công thức & Định lượng", desc: "Thiết lập công thức chế biến và nguyên liệu tiêu hao cho từng món.", href: "/admin/recipes", badge: "/api/Recipes" },
    { title: "Kho & Tồn kho Chi nhánh", desc: "Quản lý danh mục nguyên liệu và điều chỉnh số lượng theo chi nhánh.", href: "/admin/ingredients", badge: "/api/Ingredients" },
    { title: "Nhân sự & Phân quyền", desc: "Quản lý nhân viên, hồ sơ, phòng ban, chức vụ và tài khoản.", href: "/admin/employees", badge: "/api/Employees, /api/Roles" },
    { title: "Hóa đơn & Doanh thu", desc: "Tra cứu hóa đơn thanh toán và lịch sử giao dịch.", href: "/admin/invoices", badge: "/api/Invoices" },
    { title: "Khách hàng & Voucher", desc: "Quản lý khách hàng, ví điểm thưởng và mã giảm giá khuyến mãi.", href: "/admin/discounts", badge: "/api/Customers & /api/Discounts" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl text-white shadow-lg">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium mb-3 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Hệ thống Quản trị Nhà hàng
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Tổng quan Vận hành & Quản lý
          </h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Kiến trúc cấu trúc quản lý đã được thiết lập đầy đủ từ tài liệu OpenAPI. Sẵn sàng tích hợp API endpoints và hoàn thiện logic nghiệp vụ.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Link
            key={idx}
            href={stat.href}
            className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            <span className="text-xs font-medium text-zinc-500 block">{stat.label}</span>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              {stat.value}
            </div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-2 inline-block">
              {stat.change}
            </span>
          </Link>
        ))}
      </div>

      {/* Management Modules Grid */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
          Các phân hệ quản lý chức năng
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, idx) => (
            <Link
              key={idx}
              href={mod.href}
              className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60 inline-block mb-3">
                  {mod.badge}
                </span>
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {mod.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                  {mod.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span>Truy cập phân hệ</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
