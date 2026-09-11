export function CategoryStatusBadge({
    isDeleted,
}: {
    isDeleted: boolean;
}) {
    return (
        <span
            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${isDeleted
                ? "border-rose-200 bg-rose-50 text-rose-600"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
        >
            {isDeleted ? "Đã xóa" : "Hoạt động"}
        </span>
    );
}