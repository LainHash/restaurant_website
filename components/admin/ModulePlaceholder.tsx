import React from "react";

export interface EndpointMapping {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
}

export interface ColumnDefinition {
  header: string;
  accessor: string;
  className?: string;
}

interface ModulePlaceholderProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  endpoints: EndpointMapping[];
  columns: ColumnDefinition[];
  sampleRows?: Record<string, unknown>[];
  children?: React.ReactNode;
}

export function ModulePlaceholder({
  title,
  description,
  actionLabel = "Thêm mới",
  endpoints,
  columns,
  sampleRows = [],
  children,
}: ModulePlaceholderProps) {
  const getMethodBadgeClass = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
      case "POST":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "PUT":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "PATCH":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case "DELETE":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600 border-zinc-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-lg transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {actionLabel}
          </button>
        </div>
      </div>

      {/* OpenAPI Endpoints Wiring Info Box */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            OpenAPI Endpoints tương ứng (Chờ nối nghiệp vụ)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {endpoints.map((ep, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 bg-white dark:bg-zinc-900 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs"
            >
              <span
                className={`px-1.5 py-0.5 font-mono text-[10px] font-bold rounded border uppercase ${getMethodBadgeClass(
                  ep.method
                )}`}
              >
                {ep.method}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-zinc-800 dark:text-zinc-200 block truncate">
                  {ep.path}
                </span>
                <span className="text-[11px] text-zinc-500 block truncate">
                  {ep.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom children if provided */}
      {children}

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Tìm kiếm theo từ khóa (Keyword)..."
              className="w-full pl-9 pr-3 py-1.5 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <svg
              className="w-4 h-4 text-zinc-400 absolute left-2.5 top-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg text-xs text-zinc-700 dark:text-zinc-300">
            <option value="CreatedAt">Sắp xếp: Mới nhất</option>
            <option value="Name">Theo tên (A-Z)</option>
            <option value="Price">Theo giá</option>
          </select>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>Hiển thị 10 / trang</span>
        </div>
      </div>

      {/* Standard Table Skeleton / View */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} className={`px-4 py-3 ${col.className || ""}`}>
                    {col.header}
                  </th>
                ))}
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
              {sampleRows.length > 0 ? (
                sampleRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 transition-colors">
                    {columns.map((col, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 font-medium">
                        {String(row[col.accessor] ?? "—")}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button className="text-emerald-600 hover:text-emerald-500 font-medium">
                          Sửa
                        </button>
                        <span className="text-zinc-300 dark:text-zinc-700">|</span>
                        <button className="text-rose-600 hover:text-rose-500 font-medium">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-zinc-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <svg className="w-8 h-8 text-zinc-300 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Khung sườn đã sẵn sàng. Dữ liệu sẽ hiển thị khi kết nối API logic.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination controls footer */}
        <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900 flex items-center justify-between text-xs text-zinc-500">
          <span>Trang 1 / 1</span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 border border-zinc-200 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-400 cursor-not-allowed">
              Trước
            </button>
            <button className="px-2.5 py-1 border border-zinc-200 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-400 cursor-not-allowed">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
