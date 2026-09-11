interface StatCardProps {
    label: string;
    value: string | number;
    valueClassName?: string;
}

export function StatCard({
    label,
    value,
    valueClassName = "text-zinc-950 dark:text-white",
}: StatCardProps) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {label}
            </p>

            <p className={`mt-2 text-2xl font-bold ${valueClassName}`}>
                {value}
            </p>
        </div>
    );
}