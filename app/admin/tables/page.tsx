import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function TablesPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Bàn ăn (RestaurantTables)"
      description="Quản lý số bàn, sức chứa, kiểu dáng bàn (hình vuông, tròn, dài), tọa độ trên sơ đồ và trạng thái."
      actionLabel="Thêm Bàn Mới"
      endpoints={[
        { method: "GET", path: "/api/RestaurantTables", description: "Lấy danh sách bàn kèm phân trang, tìm kiếm và sắp xếp" },
        { method: "POST", path: "/api/RestaurantTables", description: "Tạo bàn mới với thông tin diện tích, sức chứa, tọa độ, hình dạng" },
        { method: "GET", path: "/api/RestaurantTables/{id}", description: "Xem chi tiết một bàn" },
        { method: "PUT", path: "/api/RestaurantTables/{id}", description: "Cập nhật thông tin bàn, vị trí tọa độ hoặc trạng thái bàn" },
      ]}
      columns={[
        { header: "Số bàn", accessor: "tableNumber" },
        { header: "Khu vực", accessor: "areaName" },
        { header: "Sức chứa", accessor: "capacity" },
        { header: "Hình dạng", accessor: "shape" },
        { header: "Tọa độ (X, Y)", accessor: "coordinates" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          tableNumber: "Bàn 01",
          areaName: "Tầng 1 - Sảnh chính",
          capacity: "4 khách",
          shape: "Square",
          coordinates: "X: 120, Y: 80",
          status: "Occupied",
        },
        {
          tableNumber: "Bàn 02",
          areaName: "Tầng 1 - Sảnh chính",
          capacity: "2 khách",
          shape: "Round",
          coordinates: "X: 240, Y: 80",
          status: "Available",
        },
        {
          tableNumber: "VIP 01",
          areaName: "Tầng 2 - Phòng VIP",
          capacity: "10 khách",
          shape: "Long",
          coordinates: "X: 100, Y: 50",
          status: "Available",
        },
      ]}
    />
  );
}
