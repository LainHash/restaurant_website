interface IngredientCategoryPaginationProps {
    totalItems?: number;
    page: number;
    totalPages: number;
    isLoading: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

export function IngredientCategoryPagination({
    totalItems,
    page,
    totalPages,
    isLoading,
    onPrevious,
    onNext,
}: IngredientCategoryPaginationProps) {
    return (
        <div className="flex items-center justify-between border-t border-zinc-200 px-5 py-3 text-xs text-zinc-500 dark:border-zinc-800">
            <span>
                {totalItems !== undefined
                    ? `${totalItems} danh mục`
                    : "Đang tải dữ liệu..."}
            </span>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={page <= 1 || isLoading}
                    onClick={onPrevious}
                    className="rounded-md border border-zinc-200 px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700"
                >
                    Trước
                </button>

                <span>
                    Trang {page}
                </span>

                <button
                    type="button"
                    disabled={page >= totalPages || isLoading}
                    onClick={onNext}
                    className="rounded-md border border-zinc-200 px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700"
                >
                    Sau
                </button>
            </div>
        </div>
    );
}