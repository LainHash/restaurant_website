import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function RolesPage() {
  return (
    <ModulePlaceholder
      title="Vai trò & Phân quyền (Roles)"
      description="Quản lý vai trò người dùng trong hệ thống (SuperAdmin, Manager, Cashier, KitchenStaff, Waiter) và phân quyền chức năng."
      actionLabel="Thêm Vai Trò"
      endpoints={[
        { method: "GET", path: "/api/Roles", description: "Lấy danh sách tất cả các vai trò phân quyền" },
        { method: "POST", path: "/api/Roles", description: "Tạo vai trò mới" },
        { method: "GET", path: "/api/Roles/{id}", description: "Xem chi tiết vai trò" },
        { method: "PUT", path: "/api/Roles/{id}", description: "Cập nhật vai trò" },
        { method: "DELETE", path: "/api/Roles/{id}", description: "Xóa vai trò" },
        { method: "PATCH", path: "/api/Roles/{id}/restore", description: "Khôi phục vai trò đã xóa" },
      ]}
      columns={[
        { header: "Tên vai trò", accessor: "name" },
        { header: "Mô tả", accessor: "description" },
        { header: "Số người dùng", accessor: "userCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Admin (Quản trị viên)",
          description: "Toàn quyền cấu hình hệ thống, quản lý chi nhánh, nhân sự và báo cáo",
          userCount: "2 tài khoản",
          status: "Hệ thống",
        },
        {
          name: "Cashier (Thu ngân)",
          description: "Quản lý đơn hàng, thanh toán hóa đơn và in phiếu thu",
          userCount: "8 tài khoản",
          status: "Hoạt động",
        },
        {
          name: "Kitchen (Nhân viên bếp)",
          description: "Xem màn hình KDS, cập nhật trạng thái món đang làm/đã xong",
          userCount: "12 tài khoản",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
