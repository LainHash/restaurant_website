import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function DiscountsPage() {
  return (
    <ModulePlaceholder
      title="Khuyến mãi & Mã giảm giá (Discounts)"
      description="Quản lý các chương trình ưu đãi, voucher giảm giá theo số tiền cố định (FixedAmount) hoặc phần trăm (Percentage), giới hạn ngân sách và thời hạn."
      actionLabel="Tạo Mã Giảm Giá"
      endpoints={[
        { method: "GET", path: "/api/Discounts", description: "Lấy danh sách mã giảm giá theo Keyword, SortField, phân trang" },
        { method: "POST", path: "/api/Discounts", description: "Tạo chương trình ưu đãi / mã khuyến mãi mới" },
        { method: "PUT", path: "/api/Discounts/{id}", description: "Cập nhật điều kiện áp dụng, hạn dùng hoặc số lượng mã" },
        { method: "DELETE", path: "/api/Discounts/{id}", description: "Hủy / Xóa mã giảm giá" },
        { method: "PATCH", path: "/api/Discounts/{id}/restore", description: "Khôi phục mã giảm giá đã xóa" },
      ]}
      columns={[
        { header: "Tên chương trình", accessor: "name" },
        { header: "Loại giảm giá", accessor: "type" },
        { header: "Mức giảm", accessor: "value" },
        { header: "Đơn tối thiểu", accessor: "minOrder" },
        { header: "Số lượng phát hành", accessor: "totalQty" },
        { header: "Hiệu lực", accessor: "validity" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Ưu đãi Khai xuân 2026",
          type: "Percentage",
          value: "15% (tối đa 150k)",
          minOrder: "500,000 đ",
          totalQty: "500 mã (đã dùng 142)",
          validity: "01/01/2026 - 31/03/2026",
          status: "Đang áp dụng",
        },
        {
          name: "Voucher Sinh nhật Khách hàng",
          type: "FixedAmount",
          value: "100,000 đ",
          minOrder: "300,000 đ",
          totalQty: "Không giới hạn",
          validity: "Trong tháng sinh nhật",
          status: "Đang áp dụng",
        },
      ]}
    />
  );
}
