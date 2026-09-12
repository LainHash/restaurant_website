interface IngredientCategoryHeaderProps {
    onCreate: () => void;
}

export function IngredientCategoryHeader({
    onCreate,
}: IngredientCategoryHeaderProps) {
    return (
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
                onClick={onCreate}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
            >
                <span className="text-lg leading-none">+</span>
                Thêm danh mục
            </button>
        </div>
    );
}