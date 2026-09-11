import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function AreasPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Khu vực (Areas)"
      description="Phân chia các khu vực trong nhà hàng (Sảnh chính, Tầng lầu, Sân vườn, Phòng VIP) và liên kết danh sách bàn."
      actionLabel="Thêm Khu Vực Mới"
      endpoints={[
        { method: "GET", path: "/api/Areas", description: "Lấy danh sách khu vực kèm lọc theo BranchCode, Keyword, sắp xếp" },
        { method: "POST", path: "/api/Areas", description: "Tạo khu vực mới cho chi nhánh" },
        { method: "GET", path: "/api/Areas/{id}", description: "Xem chi tiết khu vực" },
        { method: "PUT", path: "/api/Areas/{id}", description: "Cập nhật tên, mô tả, thứ tự hiển thị của khu vực" },
        { method: "DELETE", path: "/api/Areas/{id}", description: "Xóa tạm thời khu vực" },
        { method: "PATCH", path: "/api/Areas/{id}/restore", description: "Khôi phục khu vực đã xóa" },
        { method: "GET", path: "/api/Areas/{id}/tables", description: "Lấy danh sách tất cả các bàn thuộc khu vực này" },
      ]}
      columns={[
        { header: "Tên khu vực", accessor: "name" },
        { header: "Chi nhánh", accessor: "branchName" },
        { header: "Mô tả", accessor: "description" },
        { header: "Thứ tự", accessor: "displayOrder" },
        { header: "Số bàn", accessor: "tableCount" },
        { header: "Kích hoạt", accessor: "isActive" },
      ]}
      sampleRows={[
        {
          name: "Sảnh Chính Tầng 1",
          branchName: "Chi nhánh Trung tâm",
          description: "Khu vực đón tiếp khách chính, gần quầy bar",
          displayOrder: 1,
          tableCount: "14 bàn",
          isActive: "Hoạt động",
        },
        {
          name: "Sân Thượng Rooftop",
          branchName: "Chi nhánh Trung tâm",
          description: "Khu vực ngoài trời thoáng đãng",
          displayOrder: 2,
          tableCount: "8 bàn",
          isActive: "Hoạt động",
        },
      ]}
    />
  );
}
