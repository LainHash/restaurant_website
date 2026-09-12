import { IngredientCategoryResponse } from "@/types/api";
import Link from "next/link";

interface IngredientCategoryRowProps {
    category: IngredientCategoryResponse;
}

export function IngredientCategoryRow({
    category,
}: IngredientCategoryRowProps) {
    return (
        <tr className="group transition hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10">
            <td className="px-5 py-4">
                <Link
                    href={`/admin/ingredient-categories/${category.id}`}
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
                {category.createdAt}
            </td>

            <td className="px-5 py-4">
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${category.isDeleted
                        ? "border-rose-200 bg-rose-50 text-rose-600"
                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                        }`}
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
    );
}