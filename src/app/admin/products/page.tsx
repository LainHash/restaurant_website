import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function ProductsPage() {
  return (
    <ModulePlaceholder
      title="Thực đơn & Món ăn (Products)"
      description="Quản lý toàn bộ danh mục món ăn, giá bán, hình ảnh, loại hình tồn kho (chế biến theo order hay theo dõi kho) và công thức liên quan."
      actionLabel="Thêm Món Mới"
      endpoints={[
        { method: "GET", path: "/api/Products", description: "Lấy danh sách món ăn theo CategoryId, BrandId, Keyword, SortField" },
        { method: "POST", path: "/api/Products", description: "Tạo món ăn mới với giá bán, loại tồn kho, đơn vị tính" },
        { method: "GET", path: "/api/Products/{id}", description: "Xem chi tiết món ăn" },
        { method: "PUT", path: "/api/Products/{id}", description: "Cập nhật thông tin, giá bán món ăn" },
        { method: "DELETE", path: "/api/Products/{id}", description: "Xóa món ăn" },
        { method: "PATCH", path: "/api/Products/{id}/restore", description: "Khôi phục món ăn đã xóa" },
        { method: "GET", path: "/api/Products/{id}/images", description: "Xem bộ sưu tập hình ảnh của món" },
        { method: "POST", path: "/api/Products/{id}/images", description: "Tải lên hình ảnh đại diện / ảnh thực tế cho món (multipart/form-data)" },
        { method: "GET", path: "/api/Products/{id}/stock-list", description: "Kiểm tra số lượng tồn kho của món theo từng chi nhánh" },
        { method: "PATCH", path: "/api/Products/{productId}/branch/{branchId}/update-quantity", description: "Cập nhật tồn kho món theo chi nhánh" },
        { method: "GET", path: "/api/Products/{id}/recipe-list", description: "Lấy công thức chế biến của món ăn" },
      ]}
      columns={[
        { header: "Tên món ăn", accessor: "name" },
        { header: "Danh mục", accessor: "categoryName" },
        { header: "Giá bán", accessor: "unitPrice" },
        { header: "Loại tồn kho", accessor: "inventoryType" },
        { header: "Đơn vị tính", accessor: "unitName" },
        { header: "Thương hiệu / Nhà cung cấp", accessor: "brandName" },
      ]}
      sampleRows={[
        {
          name: "Bò Wagyu Nướng Đá Muối",
          categoryName: "Món nướng thượng hạng",
          unitPrice: "480,000 đ",
          inventoryType: "MadeToOrder",
          unitName: "Phần",
          brandName: "Kobe Beef Import",
        },
        {
          name: "Vang Đỏ Bordeaux 2018",
          categoryName: "Đồ uống & Rượu vang",
          unitPrice: "1,250,000 đ",
          inventoryType: "StockTracked",
          unitName: "Chai",
          brandName: "Bordeaux Heritage",
        },
      ]}
    />
  );
}
