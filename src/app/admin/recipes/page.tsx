import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function RecipesPage() {
  return (
    <ModulePlaceholder
      title="Công thức & Định lượng (Recipes)"
      description="Quản lý công thức chế biến món ăn và thành phần nguyên liệu tiêu hao (BOM - Bill of Materials) phục vụ trừ kho tự động khi bán món."
      actionLabel="Tạo Công Thức Mới"
      endpoints={[
        { method: "GET", path: "/api/Recipes", description: "Lấy danh sách công thức chế biến" },
        { method: "POST", path: "/api/Recipes", description: "Tạo công thức mới gắn với món ăn và hướng dẫn chế biến" },
        { method: "GET", path: "/api/Recipes/{id}", description: "Xem chi tiết công thức và các nguyên liệu thành phần" },
        { method: "PUT", path: "/api/Recipes/{id}", description: "Cập nhật hướng dẫn chế biến công thức" },
        { method: "PATCH", path: "/api/Recipes/{id}/ingredients", description: "Cập nhật danh sách nguyên liệu, định lượng và đơn vị tiêu hao" },
      ]}
      columns={[
        { header: "Món ăn áp dụng", accessor: "productName" },
        { header: "Số loại nguyên liệu", accessor: "ingredientCount" },
        { header: "Hướng dẫn vắn tắt", accessor: "instructions" },
        { header: "Chi phí ước tính (COGS)", accessor: "estimatedCost" },
        { header: "Cập nhật lần cuối", accessor: "updatedAt" },
      ]}
      sampleRows={[
        {
          productName: "Bò Wagyu Nướng Đá Muối",
          ingredientCount: "4 nguyên liệu",
          instructions: "Ướp thịt bò 15 phút, áp chảo đá nhiệt độ 220°C trong 4 phút...",
          estimatedCost: "165,000 đ",
          updatedAt: "08/09/2026",
        },
      ]}
    />
  );
}
