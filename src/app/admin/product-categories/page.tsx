"use client";

import Link from "next/link";
import { useState } from "react";
import { useProductCategories } from "@/hooks/catalog/productCategories/useProductCategory";

const PAGE_SIZE = 10;

function formatDate(value?: string) {
  if (!value) return "Chưa cập nhật";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export default function ProductCategoriesPage() {
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const { categories, isLoading, error, refetch } = useProductCategories({
    Keyword: submittedKeyword || undefined,
    Page: page,
    PageSize: PAGE_SIZE,
    SortField: "Name",
    Direction: "Asc",
  });

  const items = categories?.data ?? [];
  const totalPages = categories?.totalPages ?? 1;

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSubmittedKeyword(keyword.trim());
  }

  console.log(categories?.data)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Thực đơn & Bếp / Danh mục
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Danh mục món ăn
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-zinc-500">
            Tổ chức thực đơn thành những nhóm rõ ràng để đội ngũ dễ quản lý và
            phục vụ.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
        >
          <span className="text-lg leading-none">+</span>Thêm danh mục
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Tổng danh mục
          </p>
          <p className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
            {categories?.totalItems ?? "-"}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Đang hiển thị
          </p>
          <p className="mt-2 text-2xl font-bold text-emerald-600">
            {items.filter((item) => !item.isDeleted).length}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Trang hiện tại
          </p>
          <p className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
            {categories ? `${categories.indexPage} / ${totalPages}` : "-"}
          </p>
        </div>
      </div>

      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-3 border-b border-zinc-200 p-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
              Tất cả danh mục
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">
              Chọn một danh mục để xem thông tin chi tiết.
            </p>
          </div>
          <form onSubmit={submitSearch} className="flex w-full max-w-sm gap-2">
            <label className="min-w-0 flex-1">
              <span className="sr-only">Tìm danh mục</span>
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Tìm theo tên..."
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 dark:border-zinc-700 dark:bg-zinc-950"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Tìm
            </button>
          </form>
        </div>
        {error ? (
          <div className="m-4 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-300">
            <p className="font-semibold">Không thể tải danh mục</p>
            <p className="mt-1">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="mt-3 font-semibold underline"
            >
              Thử lại
            </button>
          </div>
        ) : isLoading ? (
          <div className="space-y-3 p-4">
            {[1, 2, 3].map((row) => (
              <div
                key={row}
                className="h-14 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800"
              />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">
              Chưa có danh mục nào
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Thử thay đổi từ khóa hoặc tạo danh mục mới.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-950/50">
                <tr>
                  <th className="px-5 py-3 font-semibold">Tên danh mục</th>
                  <th className="px-5 py-3 font-semibold">Mô tả</th>
                  <th className="px-5 py-3 font-semibold">Ngày tạo</th>
                  <th className="px-5 py-3 font-semibold">Trạng thái</th>
                  <th className="px-5 py-3 text-right font-semibold">
                    Chi tiết
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {items.map((category) => (
                  <tr
                    key={category.id}
                    className="group transition hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/product-categories/${category.id}`}
                        className="font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400"
                      >
                        {category.name || "Chưa đặt tên"}
                      </Link>
                      <p className="mt-1 font-mono text-[10px] text-zinc-400">
                        {category.id}
                      </p>
                    </td>
                    <td className="max-w-sm px-5 py-4 text-zinc-500">
                      {category.description || "Chưa có mô tả"}
                    </td>
                    <td className="px-5 py-4 text-zinc-500">
                      {formatDate(category.createdAt)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${category.isDeleted ? "border-rose-200 bg-rose-50 text-rose-600" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}
                      >
                        {category.isDeleted ? "Đã xóa" : "Hoạt động"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={`/admin/product-categories/${category.id}`}
                        aria-label={`Xem ${category.name || "danh mục"}`}
                        className="inline-flex rounded-lg p-2 text-zinc-400 transition hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex items-center justify-between border-t border-zinc-200 px-5 py-3 text-xs text-zinc-500 dark:border-zinc-800">
          <span>
            {categories
              ? `${categories.totalItems} danh mục`
              : "Đang tải dữ liệu..."}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1 || isLoading}
              onClick={() => setPage((current) => current - 1)}
              className="rounded-md border border-zinc-200 px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700"
            >
              Trước
            </button>
            <span>Trang {categories?.indexPage ?? page}</span>
            <button
              type="button"
              disabled={page >= totalPages || isLoading}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-md border border-zinc-200 px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700"
            >
              Sau
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
