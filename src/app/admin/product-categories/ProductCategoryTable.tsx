import { ProductCategoryResponse } from "@/types/api";
import { ProductCategoryRow } from "./ProductCategoryRow";

interface ProductCategoryTableProps {
    items: ProductCategoryResponse[];
}

export function ProductCategoryTable({
    items,
}: ProductCategoryTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-950/50">
                    <tr>
                        <th className="px-5 py-3 font-semibold">
                            Tên danh mục
                        </th>

                        <th className="px-5 py-3 font-semibold">
                            Mô tả
                        </th>

                        <th className="px-5 py-3 font-semibold">
                            Ngày tạo
                        </th>

                        <th className="px-5 py-3 font-semibold">
                            Trạng thái
                        </th>

                        <th className="px-5 py-3 text-right font-semibold">
                            Chi tiết
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {items.map((category) => (
                        <ProductCategoryRow
                            key={category.id}
                            category={category}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}