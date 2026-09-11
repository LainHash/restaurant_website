import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://hautedehallen.onrender.com/";

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6">
      <main className="flex flex-col items-center justify-center max-w-xl w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12 text-center shadow-sm">
        <Image
          className="dark:invert h-7 w-auto mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Restaurant Management System
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
          Hệ Thống Quản Trị Nhà Hàng
        </h1>
        
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
          Cấu trúc quản lý đã được thiết lập thành công từ OpenAPI spec. Bao gồm đầy đủ Types/DTOs, API Services và các màn hình quản lý theo từng phân hệ.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <Link
            href="/admin"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20"
          >
            Vào Bảng Điều Khiển Quản Trị
            <span>→</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 w-full text-xs text-zinc-400 font-mono truncate">
          API Endpoint: {apiUrl}
        </div>
      </main>
    </div>
  );
}
