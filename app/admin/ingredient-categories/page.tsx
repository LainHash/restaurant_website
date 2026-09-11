import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function IngredientCategoriesPage() {
  return (
    <ModulePlaceholder
      title="Loại Nguyên liệu (IngredientCategories)"
      description="Phân loại nguyên vật liệu đầu vào (Thịt tươi sống, Hải sản, Rau củ quả, Gia vị, Đồ khô, Bao bì đóng gói)."
      actionLabel="Thêm Nhóm Nguyên Liệu"
      endpoints={[
        { method: "GET", path: "/api/IngredientCategories", description: "Lấy danh sách phân loại nguyên liệu có phân trang" },
        { method: "POST", path: "/api/IngredientCategories", description: "Tạo phân loại nguyên liệu mới" },
        { method: "GET", path: "/api/IngredientCategories/{id}", description: "Xem chi tiết phân loại" },
        { method: "PUT", path: "/api/IngredientCategories/{id}", description: "Cập nhật phân loại" },
        { method: "DELETE", path: "/api/IngredientCategories/{id}", description: "Xóa phân loại" },
        { method: "GET", path: "/api/IngredientCategories/by-name/{name}", description: "Tra cứu phân loại theo tên" },
        { method: "PATCH", path: "/api/IngredientCategories/{id}/restore", description: "Khôi phục phân loại đã xóa" },
      ]}
      columns={[
        { header: "Tên nhóm", accessor: "name" },
        { header: "Mô tả", accessor: "description" },
        { header: "Số loại nguyên liệu", accessor: "ingredientCount" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Thịt tươi sống",
          description: "Bò, heo, cừu, gia cầm nhập khẩu và nội địa",
          ingredientCount: "18 mặt hàng",
          status: "Hoạt động",
        },
        {
          name: "Gia vị & Bơ sữa",
          description: "Các loại sốt, bơ, phô mai, dầu ăn hảo hạng",
          ingredientCount: "32 mặt hàng",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
