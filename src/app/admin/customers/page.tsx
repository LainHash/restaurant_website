import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function CustomersPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Khách hàng & Ví tích điểm (Customers & Wallet)"
      description="Xem danh sách khách hàng thân thiết, tra cứu số dư ví điểm thưởng và lịch sử nhận mã giảm giá."
      actionLabel="Thêm Khách Hàng"
      endpoints={[
        { method: "GET", path: "/api/Customers", description: "Lấy danh sách tất cả khách hàng trong hệ thống" },
        { method: "GET", path: "/api/Customers/{id}", description: "Xem chi tiết hồ sơ khách hàng theo ID" },
        { method: "GET", path: "/api/Customers/user", description: "Lấy thông tin khách hàng hiện tại đang đăng nhập" },
        { method: "POST", path: "/api/Customers/user/images", description: "Tải lên ảnh đại diện của khách hàng (multipart/form-data)" },
        { method: "GET", path: "/api/Customers/user/wallet", description: "Xem số dư ví tiền và điểm thưởng tích lũy của khách hàng" },
        { method: "POST", path: "/api/Customers/user/discounts/claim", description: "Khách hàng nhập mã để nhận voucher giảm giá vào ví" },
      ]}
      columns={[
        { header: "Mã khách hàng", accessor: "customerCode" },
        { header: "Họ và tên", accessor: "fullName" },
        { header: "Số điện thoại", accessor: "phone" },
        { header: "Email", accessor: "email" },
        { header: "Điểm tích lũy", accessor: "rewardPoints" },
        { header: "Hạng thành viên", accessor: "tier" },
      ]}
      sampleRows={[
        {
          customerCode: "CUS-8801",
          fullName: "Phạm Minh Tuấn",
          phone: "0988 777 666",
          email: "tuan.pham@gmail.com",
          rewardPoints: "1,450 điểm",
          tier: "Hạng Vàng (Gold)",
        },
        {
          customerCode: "CUS-8802",
          fullName: "Đỗ Kim Ngân",
          phone: "0977 111 222",
          email: "ngan.do@gmail.com",
          rewardPoints: "320 điểm",
          tier: "Hạng Bạc (Silver)",
        },
      ]}
    />
  );
}
