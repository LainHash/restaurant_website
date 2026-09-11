import Link from "next/link";

interface OrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      {/* Back button & Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/orders"
            className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Chi tiết Đơn hàng: #{id.slice(0, 8)}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                Đang xử lý
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5 font-mono">ID: {id}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            In Hóa Đơn (/api/Orders/{id.slice(0, 4)}/invoice)
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors">
            Hủy Đơn Hàng
          </button>
        </div>
      </div>

      {/* OpenAPI wiring alert */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs">
        <p className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          ⚡ API Endpoints phục vụ trang chi tiết này:
        </p>
        <ul className="list-disc list-inside space-y-1 text-zinc-500 font-mono">
          <li>GET /api/Orders/{id} - Lấy chi tiết đơn hàng và orderDetails</li>
          <li>GET /api/Orders/{id}/invoice - Lấy thông tin hóa đơn xuất</li>
          <li>POST /api/OrderDetails/:detailId/preparing - Bếp bắt đầu chế biến món</li>
          <li>POST /api/OrderDetails/:detailId/ready - Món đã xong tại bếp</li>
          <li>POST /api/OrderDetails/:detailId/served - Đã phục vụ ra bàn cho khách</li>
          <li>POST /api/OrderDetails/:detailId/cancelled - Hủy món cụ thể</li>
        </ul>
      </div>

      {/* Order items table placeholder */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Danh sách món ăn yêu cầu (OrderDetails)
          </h3>
          <span className="text-xs text-zinc-500">2 món ăn</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 uppercase font-semibold">
            <tr>
              <th className="px-4 py-3">Món ăn</th>
              <th className="px-4 py-3">Số lượng</th>
              <th className="px-4 py-3">Đơn giá</th>
              <th className="px-4 py-3">Ghi chú</th>
              <th className="px-4 py-3">Trạng thái bếp</th>
              <th className="px-4 py-3 text-right">Thao tác bếp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="px-4 py-3 font-semibold">Bò Wagyu Nướng Đá Muối</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">480,000 đ</td>
              <td className="px-4 py-3 text-zinc-500">Chín vừa (Medium Rare), không hành tây</td>
              <td className="px-4 py-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  Đang chế biến
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-medium transition-colors">
                  Báo xong (Ready)
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold">Nước Ép Lựu Đỏ Tươi</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">65,000 đ</td>
              <td className="px-4 py-3 text-zinc-500">Ít đường, nhiều đá</td>
              <td className="px-4 py-3">
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  Đã phục vụ
                </span>
              </td>
              <td className="px-4 py-3 text-right text-zinc-400">
                Hoàn tất
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
