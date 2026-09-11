import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function BranchesPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Chi nhánh (Branches)"
      description="Quản lý các cơ sở, nhà hàng trong chuỗi, bao gồm danh sách khu vực và quản lý tồn kho theo từng điểm bán."
      actionLabel="Thêm Chi Nhánh"
      endpoints={[
        { method: "GET", path: "/api/Branches", description: "Lấy danh sách chi nhánh trong chuỗi nhà hàng" },
        { method: "GET", path: "/api/Branches/{id}/stock-list", description: "Xem tổng tồn kho (món ăn & nguyên liệu) của chi nhánh" },
        { method: "GET", path: "/api/Branches/{id}/areas", description: "Lấy danh sách các khu vực thuộc chi nhánh" },
      ]}
      columns={[
        { header: "Mã chi nhánh", accessor: "code" },
        { header: "Tên chi nhánh", accessor: "name" },
        { header: "Địa chỉ", accessor: "address" },
        { header: "Số điện thoại", accessor: "phone" },
        { header: "Số khu vực", accessor: "areaCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          code: "BR-CENTRAL",
          name: "Chi nhánh Trung Tâm (Flagship)",
          address: "123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
          phone: "028 3822 1234",
          areaCount: "4 khu vực",
          status: "Đang hoạt động",
        },
        {
          code: "BR-THAO-DIEN",
          name: "Chi nhánh Thảo Điền",
          address: "45 Xuân Thủy, Phường Thảo Điền, TP. Thủ Đức",
          phone: "028 3744 5678",
          areaCount: "3 khu vực",
          status: "Đang hoạt động",
        },
      ]}
    />
  );
}
