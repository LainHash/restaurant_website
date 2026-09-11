import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function BrandsPage() {
  return (
    <ModulePlaceholder
      title="Thương hiệu & Nhà cung ứng (Brands)"
      description="Quản lý thông tin các đối tác cung cấp thực phẩm, thương hiệu đồ uống và nhãn hàng phân phối."
      actionLabel="Thêm Thương Hiệu"
      endpoints={[
        { method: "GET", path: "/api/Brands", description: "Lấy danh sách thương hiệu/nhà cung cấp có phân trang" },
        { method: "POST", path: "/api/Brands", description: "Tạo thương hiệu/nhà cung cấp mới" },
        { method: "GET", path: "/api/Brands/{id}", description: "Xem thông tin chi tiết thương hiệu" },
        { method: "PUT", path: "/api/Brands/{id}", description: "Cập nhật thông tin thương hiệu" },
        { method: "DELETE", path: "/api/Brands/{id}", description: "Xóa thương hiệu" },
        { method: "PATCH", path: "/api/Brands/{id}/restore", description: "Khôi phục thương hiệu đã xóa" },
      ]}
      columns={[
        { header: "Tên thương hiệu / NCC", accessor: "name" },
        { header: "Mô tả", accessor: "description" },
        { header: "Số mặt hàng liên kết", accessor: "itemCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Kobe Beef Import Co.",
          description: "Nhà cung cấp thịt bò Wagyu & Kobe đạt chuẩn kiểm định",
          itemCount: "6 sản phẩm",
          status: "Đang hợp tác",
        },
        {
          name: "Bordeaux Heritage Wines",
          description: "Đơn vị nhập khẩu rượu vang chính ngạch từ Pháp",
          itemCount: "14 sản phẩm",
          status: "Đang hợp tác",
        },
      ]}
    />
  );
}
