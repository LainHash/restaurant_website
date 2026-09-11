import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function PositionsPage() {
  return (
    <ModulePlaceholder
      title="Chức vụ & Vị trí công tác (Positions)"
      description="Quản lý danh sách chức danh nghề nghiệp gắn với từng phòng ban cụ thể trong nhà hàng."
      actionLabel="Thêm Chức Vụ"
      endpoints={[
        { method: "GET", path: "/api/Positions", description: "Lấy danh sách chức vụ, lọc theo departmentId, keyword" },
        { method: "POST", path: "/api/Positions", description: "Tạo chức vụ mới gắn với một phòng ban" },
        { method: "GET", path: "/api/Positions/{id}", description: "Xem chi tiết chức vụ" },
        { method: "PUT", path: "/api/Positions/{id}", description: "Cập nhật chức vụ" },
        { method: "DELETE", path: "/api/Positions/{id}", description: "Xóa chức vụ" },
        { method: "GET", path: "/api/Positions/by-name/{name}", description: "Tra cứu chức vụ theo tên" },
        { method: "PATCH", path: "/api/Positions/{id}/restore", description: "Khôi phục chức vụ đã xóa" },
      ]}
      columns={[
        { header: "Tên chức vụ", accessor: "name" },
        { header: "Phòng ban trực thuộc", accessor: "departmentName" },
        { header: "Mô tả trách nhiệm", accessor: "description" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Bếp Trưởng (Executive Chef)",
          departmentName: "Bộ phận Bếp (Kitchen)",
          description: "Điều hành khu vực bếp, kiểm soát chất lượng món ăn và định lượng",
          status: "Hoạt động",
        },
        {
          name: "Nhân viên Phục vụ Bàn (Waiter/Waitress)",
          departmentName: "Bộ phận Dịch vụ & Phục vụ (F&B)",
          description: "Tiếp đón, ghi order, phục vụ món và hỗ trợ khách tại bàn",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
