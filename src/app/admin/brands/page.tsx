"use client";

import { useEffect, useState } from "react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";
import {
  fetchBrandsData,
  mapBrandsToTableRows,
  type BrandTableRow,
} from "@/lib/data/brands";

export default function BrandsPage() {
  const [rows, setRows] = useState<BrandTableRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetchBrandsData({
      Page: 1,
      PageSize: 10,
      SortField: "Name",
      Direction: "Asc",
    })
      .then((response) => {
        if (ignore) return;
        setRows(mapBrandsToTableRows(response.data ?? []));
      })
      .catch((err) => {
        if (ignore) return;
        setError(err instanceof Error ? err.message : "Không thể tải danh sách thương hiệu.");
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
        title="Thương hiệu & Nhà cung ứng (Brands)"
        description="Quản lý thông tin các đối tác cung cấp thực phẩm, thương hiệu đồ uống và nhãn hàng phân phối."
        actionLabel="Thêm Thương Hiệu"
        endpoints={[
          { method: "GET", path: "/api/Brands", description: "Lấy danh sách thương hiệu/nhà cung cấp có phân trang" },
          { method: "POST", path: "/api/Brands", description: "Tạo thương hiệu/nhà cung cấp mới" },
          { method: "GET", path: "/api/Brands/{id}", description: "Xem thông tin chi tiết thương hiệu" },
          { method: "PUT", path: "/api/Brands/{id}", description: "Cập nhật thông tin thương hiệu" },
          { method: "DELETE", path: "/api/Brands/{id}", description: "Xóa thương hiệu" },
          { method: "PATCH", path: "/api/Brands/{id}/restore", description: "Khôi phục thương hiệu đã xóa" },
        ]}
        columns={[
          { header: "Tên thương hiệu / NCC", accessor: "name" },
          { header: "Mô tả", accessor: "description" },
          { header: "Số mặt hàng liên kết", accessor: "itemCount" },
          { header: "Trạng thái", accessor: "status" },
        ]}
        sampleRows={rows}
      />

      {isLoading ? (
        <div className="mt-4 text-sm text-zinc-500">Đang tải dữ liệu thương hiệu từ API...</div>
      ) : null}
    </>
  );
}
