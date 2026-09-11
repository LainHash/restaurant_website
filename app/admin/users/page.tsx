import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function UsersManagementPage() {
  return (
    <ModulePlaceholder
      title="Cấp tài khoản & Quản lý User (Users & Employee Accounts)"
      description="Tạo tài khoản đăng nhập hàng loạt cho nhân viên chi nhánh, kích hoạt xác thực email và quản lý hồ sơ tài khoản."
      actionLabel="Tạo Tài Khoản Hàng Loạt"
      endpoints={[
        { method: "POST", path: "/api/Users/create-employee-account", description: "Tạo tài khoản tự động cho nhân viên theo số lượng và đợt (batch)" },
        { method: "POST", path: "/api/Users/verify-email", description: "Kích hoạt tài khoản bằng mã xác thực email" },
        { method: "POST", path: "/api/Users/resend-verification", description: "Gửi lại mã xác thực email" },
        { method: "POST", path: "/api/Users/complete-profile", description: "Hoàn thiện thông tin hồ sơ người dùng lần đầu" },
        { method: "POST", path: "/api/Users/update-profile", description: "Cập nhật thông tin cá nhân của người dùng" },
      ]}
      columns={[
        { header: "Tên đăng nhập", accessor: "userName" },
        { header: "Email", accessor: "email" },
        { header: "Họ và tên", accessor: "fullName" },
        { header: "Vai trò", accessor: "roleName" },
        { header: "Xác thực Email", accessor: "isEmailVerified" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          userName: "chef.nam",
          email: "nam.nguyen@restaurant.vn",
          fullName: "Nguyễn Hoàng Nam",
          roleName: "Kitchen Staff",
          isEmailVerified: "Đã xác thực",
          status: "Hoạt động",
        },
        {
          userName: "waiter.ha",
          email: "ha.tran@restaurant.vn",
          fullName: "Trần Thu Hà",
          roleName: "Waiter",
          isEmailVerified: "Đã xác thực",
          status: "Hoạt động",
        },
      ]}
    />
  );
}
