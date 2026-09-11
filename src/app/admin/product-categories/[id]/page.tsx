"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProductCategory } from "@/hooks/catalog/productCategories/useProductCategory";

function formatDate(value?: string) {
  if (!value) return "Chưa cập nhật";
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function ProductCategoryDetailPage() {
  const params = useParams<{ id: string }>();
  const { category, isLoading, error, refetch } = useProductCategory(params.id);

  if (isLoading)
    return (
      <div className="space-y-4">
        <div className="h-8 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-64 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      </div>
    );

  if (error || !category)
    return (
      <div className="space-y-4">
        <Link
          href="/admin/product-categories"
          className="inline-flex text-sm font-medium text-emerald-600 hover:underline"
        >
          ← Quay lại danh sách
        </Link>
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-300">
          <p className="font-semibold">Không thể tải danh mục</p>
          <p className="mt-1">
            {error || "Danh mục không tồn tại hoặc đã bị xóa."}
          </p>
          <button
            type="button"
            onClick={refetch}
            className="mt-3 font-semibold underline"
          >
            Thử lại
          </button>
        </div>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <Link
            href="/admin/product-categories"
            aria-label="Quay lại danh sách"
            className="mt-1 rounded-lg border border-zinc-200 bg-white p-2 text-zinc-600 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ←
          </Link>
          <div>
            <p className="mb-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Thực đơn & Bếp / Danh mục / Chi tiết
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {category.name || "Chưa đặt tên"}
              </h2>
              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${category.isDeleted ? "border-rose-200 bg-rose-50 text-rose-600" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}
              >
                {category.isDeleted ? "Đã xóa" : "Hoạt động"}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs text-zinc-400">
              ID: {category.id}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Chỉnh sửa danh mục
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
              Thông tin danh mục
            </h3>
            <span className="text-xs text-zinc-400">Thông tin cơ bản</span>
          </div>
          <dl className="space-y-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Tên danh mục
              </dt>
              <dd className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {category.name || "Chưa đặt tên"}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Mô tả
              </dt>
              <dd className="min-h-20 mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {category.description || "Danh mục này chưa có mô tả."}
              </dd>
            </div>
          </dl>
        </section>
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
            Lịch sử cập nhật
          </h3>
          <dl className="mt-5 space-y-4">
            <div className="border-l-2 border-emerald-500 pl-3">
              <dt className="text-xs text-zinc-400">Ngày tạo</dt>
              <dd className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                {formatDate(category.createdAt)}
              </dd>
            </div>
            <div className="border-l-2 border-zinc-200 pl-3 dark:border-zinc-700">
              <dt className="text-xs text-zinc-400">Cập nhật lần cuối</dt>
              <dd className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                {formatDate(category.updatedAt)}
              </dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            i
          </span>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Món ăn trong danh mục
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Danh sách món ăn liên kết sẽ được hiển thị tại đây khi API sản
              phẩm cung cấp bộ lọc theo category ID.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
