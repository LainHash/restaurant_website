import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function IngredientsPage() {
  return (
    <ModulePlaceholder
      title="Kho Nguyên liệu (Ingredients)"
      description="Quản lý danh sách nguyên vật liệu đầu vào, đơn giá nhập, đơn vị tính và cập nhật số lượng tồn kho theo chi nhánh."
      actionLabel="Thêm Nguyên Liệu"
      endpoints={[
        { method: "GET", path: "/api/Ingredients", description: "Lấy danh sách nguyên liệu theo CategoryId, BrandId, Keyword, sắp xếp" },
        { method: "POST", path: "/api/Ingredients", description: "Tạo nguyên liệu mới với đơn giá và đơn vị tính" },
        { method: "GET", path: "/api/Ingredients/{id}", description: "Xem chi tiết nguyên liệu" },
        { method: "PUT", path: "/api/Ingredients/{id}", description: "Cập nhật thông tin nguyên liệu" },
        { method: "DELETE", path: "/api/Ingredients/{id}", description: "Xóa nguyên liệu" },
        { method: "PATCH", path: "/api/Ingredients/{id}/restore", description: "Khôi phục nguyên liệu đã xóa" },
        { method: "GET", path: "/api/Ingredients/{id}/stock-list", description: "Kiểm tra số lượng tồn kho theo từng chi nhánh" },
        { method: "PATCH", path: "/api/Ingredients/{ingredientId}/branch/{branchId}/update-quantity", description: "Cập nhật / kiểm kê tồn kho theo chi nhánh" },
      ]}
      columns={[
        { header: "Tên nguyên liệu", accessor: "name" },
        { header: "Nhóm nguyên liệu", accessor: "categoryName" },
        { header: "Đơn vị tính", accessor: "unitName" },
        { header: "Đơn giá ước tính", accessor: "unitPrice" },
        { header: "Nhà cung cấp", accessor: "brandName" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          name: "Thịt bò Wagyu A5",
          categoryName: "Thịt tươi sống",
          unitName: "Kg",
          unitPrice: "1,200,000 đ",
          brandName: "Kobe Beef Import",
          status: "Đang sử dụng",
        },
        {
          name: "Bơ lạt Anchor",
          categoryName: "Gia vị & Bơ sữa",
          unitName: "Kg",
          unitPrice: "180,000 đ",
          brandName: "Fonterra New Zealand",
          status: "Đang sử dụng",
        },
      ]}
    />
  );
}
