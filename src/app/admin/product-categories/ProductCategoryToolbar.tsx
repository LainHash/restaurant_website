interface ProductCategoryToolbarProps {
    keyword: string;
    onKeywordChange: (value: string) => void;
    onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function ProductCategoryToolbar({
    keyword,
    onKeywordChange,
    onSearch,
}: ProductCategoryToolbarProps) {
    return (
        <div className="flex flex-col gap-3 border-b border-zinc-200 p-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                    Tất cả danh mục
                </h3>

                <p className="mt-0.5 text-xs text-zinc-500">
                    Chọn một danh mục để xem thông tin chi tiết.
                </p>
            </div>

            <form
                onSubmit={onSearch}
                className="flex w-full max-w-sm gap-2"
            >
                <label className="min-w-0 flex-1">
                    <span className="sr-only">
                        Tìm danh mục
                    </span>

                    <input
                        value={keyword}
                        onChange={(event) =>
                            onKeywordChange(event.target.value)
                        }
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
    );
}