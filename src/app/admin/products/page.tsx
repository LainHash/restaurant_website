"use client";

import { useEffect, useState } from "react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import {
  fetchProductsData,
  mapProductsToTableRows,
  type ProductTableRow,
} from "@/lib/data/products";

export default function ProductsPage() {
  const [rows, setRows] = useState<ProductTableRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetchProductsData({
      Page: 1,
      PageSize: 10,
      SortField: "Name",
      SortDirection: "Asc",
    })
      .then((response) => {
        if (ignore) return;
        setRows(mapProductsToTableRows(response.data ?? []));
      })
      .catch((err) => {
        if (ignore) return;
        setError(err instanceof Error ? err.message : "Không thể tải danh sách món ăn.");
      })
      .finally(() => {
        if (!ignore) {
          setIsLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {error ? (
        <div className="mb-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

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
        sampleRows={rows}
      />

      {isLoading ? (
        <div className="mt-4 text-sm text-zinc-500">Đang tải dữ liệu món ăn từ API...</div>
      ) : null}
    </>
  );
}
