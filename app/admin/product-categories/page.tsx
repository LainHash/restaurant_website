import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function ProductCategoriesPage() {
  return (
    <ModulePlaceholder
      title="Danh mục Món ăn (ProductCategories)"
      description="Tổ chức các nhóm món ăn trong thực đơn (Khai vị, Món chính, Tráng miệng, Đồ uống, Combo)."
      actionLabel="Thêm Danh Mục Mới"
      endpoints={[
        { method: "GET", path: "/api/ProductCategories", description: "Lấy danh sách danh mục món ăn có phân trang và sắp xếp" },
        { method: "POST", path: "/api/ProductCategories", description: "Tạo danh mục món ăn mới" },
        { method: "GET", path: "/api/ProductCategories/{id}", description: "Xem chi tiết danh mục món ăn" },
        { method: "PUT", path: "/api/ProductCategories/{id}", description: "Cập nhật thông tin danh mục" },
        { method: "DELETE", path: "/api/ProductCategories/{id}", description: "Xóa danh mục món ăn" },
        { method: "PATCH", path: "/api/ProductCategories/{id}/restore", description: "Khôi phục danh mục đã xóa" },
      ]}
      columns={[
        { header: "Tên danh mục", accessor: "name" },
        { header: "Mô tả", accessor: "description" },
        { header: "Số lượng món", accessor: "productCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Món nướng thượng hạng",
          description: "Các món bò, cừu nướng theo phong cách Âu",
          productCount: "12 món",
          status: "Hoạt động",
        },
        {
          name: "Đồ uống & Rượu vang",
          description: "Nước ép tươi, cocktail, vang đỏ, vang trắng cao cấp",
          productCount: "28 món",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
