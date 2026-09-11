import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function AuditLogsPage() {
  return (
    <ModulePlaceholder
      title="Nhật ký Hệ thống (Audit Logs)"
      description="Ghi nhận và truy vết toàn bộ hoạt động thay đổi dữ liệu của nhân viên và người dùng (Tạo, Sửa, Xóa, Cập nhật số lượng tồn kho)."
      actionLabel="Xuất File Audit"
      endpoints={[
        { method: "GET", path: "/api/audit-logs", description: "Truy vấn nhật ký hệ thống lọc theo EntityName, UserId, Action, khoảng thời gian From - To" },
      ]}
      columns={[
        { header: "Thực thể (Entity)", accessor: "entityName" },
        { header: "Hành động (Action)", accessor: "action" },
        { header: "Người thực hiện", accessor: "userName" },
        { header: "Dữ liệu trước thay đổi", accessor: "oldValues" },
        { header: "Dữ liệu sau thay đổi", accessor: "newValues" },
        { header: "Thời gian", accessor: "timestamp" },
      ]}
      sampleRows={[
        {
          entityName: "Products",
          action: "UPDATE_PRICE",
          userName: "admin@restaurant.vn",
          oldValues: '{"unitPrice": 450000}',
          newValues: '{"unitPrice": 480000}',
          timestamp: "10/09/2026 09:14:22",
        },
        {
          entityName: "OrderDetails",
          action: "STATUS_CHANGED",
          userName: "chef.nam",
          oldValues: '{"status": "Preparing"}',
          newValues: '{"status": "Ready"}',
          timestamp: "10/09/2026 10:42:05",
        },
      ]}
    />
  );
}
