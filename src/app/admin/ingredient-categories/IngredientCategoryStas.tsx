import { StatCard } from "@/components/StatCardProps";

interface IngredientCategoryStatsProps {
    totalItems: number | undefined;
    activeItems: number;
    currentPage: number;
    totalPages: number;
}

export function IngredientCategoryStats({
    totalItems,
    activeItems,
    currentPage,
    totalPages,
}: IngredientCategoryStatsProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-3">
            <StatCard
                label="Tổng danh mục"
                value={totalItems ?? "-"}
            />

            <StatCard
                label="Đang hiển thị"
                value={activeItems}
                valueClassName="text-emerald-600"
            />

            <StatCard
                label="Trang hiện tại"
                value={
                    totalItems !== undefined
                        ? `${currentPage} / ${totalPages}`
                        : "-"
                }
            />
        </div>
    );
}