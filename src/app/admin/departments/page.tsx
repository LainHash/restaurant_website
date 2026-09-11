import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function DepartmentsPage() {
  return (
    <ModulePlaceholder
      title="Phòng ban & Bộ phận (Departments)"
      description="Quản lý cơ cấu phòng ban trong hệ thống nhà hàng (Ban Quản Lý, Bộ Phận Bếp, Thu Ngân, Phục Vụ, Kho & Cung Ứng)."
      actionLabel="Thêm Phòng Ban"
      endpoints={[
        { method: "GET", path: "/api/Departments", description: "Lấy danh sách phòng ban có phân trang và sắp xếp" },
        { method: "POST", path: "/api/Departments", description: "Tạo phòng ban mới" },
        { method: "GET", path: "/api/Departments/{id}", description: "Xem chi tiết phòng ban" },
        { method: "PUT", path: "/api/Departments/{id}", description: "Cập nhật tên và mô tả phòng ban" },
        { method: "DELETE", path: "/api/Departments/{id}", description: "Xóa phòng ban" },
        { method: "GET", path: "/api/Departments/by-name/{name}", description: "Tra cứu phòng ban theo tên" },
        { method: "PATCH", path: "/api/Departments/{id}/restore", description: "Khôi phục phòng ban đã xóa" },
        { method: "GET", path: "/api/Departments/{id}/positions", description: "Lấy danh sách tất cả các chức vụ trực thuộc phòng ban" },
      ]}
      columns={[
        { header: "Tên phòng ban", accessor: "name" },
        { header: "Mô tả", accessor: "description" },
        { header: "Số chức danh", accessor: "positionCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Bộ phận Bếp (Kitchen)",
          description: "Chịu trách nhiệm sơ chế, chế biến món ăn và định lượng nguyên liệu",
          positionCount: "4 chức danh",
          status: "Hoạt động",
        },
        {
          name: "Bộ phận Dịch vụ & Phục vụ (F&B)",
          description: "Đón tiếp khách hàng, gọi món tại bàn và phục vụ đồ ăn/uống",
          positionCount: "3 chức danh",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
