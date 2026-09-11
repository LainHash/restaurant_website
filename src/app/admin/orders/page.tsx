import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function OrdersPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Đơn hàng (Orders & OrderDetails)"
      description="Xem và quản lý tất cả đơn hàng, chi tiết món ăn và luồng chuyển trạng thái chế biến món ăn."
      actionLabel="Tạo Đơn Hàng Mới"
      endpoints={[
        { method: "GET", path: "/api/Orders", description: "Lấy danh sách đơn hàng có phân trang, lọc theo khách/nhân viên/chi nhánh" },
        { method: "POST", path: "/api/Orders", description: "Tạo đơn hàng mới (kèm danh sách món trong createOrderDetails)" },
        { method: "GET", path: "/api/Orders/{id}", description: "Xem chi tiết một đơn hàng" },
        { method: "GET", path: "/api/Orders/{id}/invoice", description: "Lấy hóa đơn tương ứng với đơn hàng" },
        { method: "POST", path: "/api/OrderDetails/{id}/preparing", description: "Chuyển trạng thái món sang: Đang chế biến (Preparing)" },
        { method: "POST", path: "/api/OrderDetails/{id}/ready", description: "Chuyển trạng thái món sang: Món đã sẵn sàng (Ready)" },
        { method: "POST", path: "/api/OrderDetails/{id}/served", description: "Chuyển trạng thái món sang: Đã phục vụ ra bàn (Served)" },
        { method: "POST", path: "/api/OrderDetails/{id}/cancelled", description: "Hủy món trong đơn hàng (Cancelled)" },
      ]}
      columns={[
        { header: "Mã đơn hàng", accessor: "orderCode" },
        { header: "Khách hàng", accessor: "customerName" },
        { header: "Nhân viên tạo", accessor: "employeeName" },
        { header: "Loại đơn", accessor: "type" },
        { header: "Tổng tiền", accessor: "finalAmount" },
        { header: "Trạng thái", accessor: "status" },
        { header: "Thời gian tạo", accessor: "createdAt" },
      ]}
      sampleRows={[
        {
          orderCode: "ORD-2026-001",
          customerName: "Nguyễn Văn A",
          employeeName: "Trần Thu Hà",
          type: "DineIn",
          finalAmount: "350,000 đ",
          status: "Processing",
          createdAt: "10/09/2026 10:30",
        },
        {
          orderCode: "ORD-2026-002",
          customerName: "Lê Thị B",
          employeeName: "Ngô Văn Minh",
          type: "TakeAway",
          finalAmount: "120,000 đ",
          status: "Completed",
          createdAt: "10/09/2026 10:45",
        },
      ]}
    />
  );
}
