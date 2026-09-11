import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function InvoicesPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Hóa đơn (Invoices)"
      description="Theo dõi danh sách hóa đơn thanh toán, tra cứu theo mã đơn hàng và in hóa đơn."
      actionLabel="Xuất Báo Cáo"
      endpoints={[
        { method: "GET", path: "/api/Invoices", description: "Lấy danh sách hóa đơn có phân trang, lọc theo OrderCode, Keyword, SortField" },
        { method: "GET", path: "/api/Invoices/{id}", description: "Xem chi tiết hóa đơn theo ID" },
      ]}
      columns={[
        { header: "Mã hóa đơn", accessor: "invoiceNumber" },
        { header: "Mã đơn hàng", accessor: "orderCode" },
        { header: "Tổng tiền", accessor: "totalAmount" },
        { header: "Giảm giá", accessor: "discountAmount" },
        { header: "Thành tiền", accessor: "finalAmount" },
        { header: "Phương thức", accessor: "paymentMethod" },
        { header: "Trạng thái", accessor: "paymentStatus" },
        { header: "Thời gian xuất", accessor: "issuedAt" },
      ]}
      sampleRows={[
        {
          invoiceNumber: "INV-2026-0891",
          orderCode: "ORD-2026-001",
          totalAmount: "380,000 đ",
          discountAmount: "30,000 đ",
          finalAmount: "350,000 đ",
          paymentMethod: "Chuyển khoản VietQR",
          paymentStatus: "Paid",
          issuedAt: "10/09/2026 11:15",
        },
      ]}
    />
  );
}
