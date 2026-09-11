import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export default function EmployeesPage() {
  return (
    <ModulePlaceholder
      title="Quản lý Nhân sự (Employees)"
      description="Quản lý hồ sơ nhân viên nhà hàng (Bếp trưởng, Thu ngân, Phục vụ, Quản lý chi nhánh), ngày nhận việc và thông tin định danh."
      actionLabel="Thêm Nhân Viên"
      endpoints={[
        { method: "GET", path: "/api/Employees", description: "Lấy danh sách nhân viên theo branchId, positionId, keyword" },
        { method: "POST", path: "/api/Employees", description: "Tạo nhân viên mới kèm thông tin hồ sơ cá nhân (CreatePersonalProfileRequest)" },
        { method: "GET", path: "/api/Employees/{id}", description: "Xem chi tiết hồ sơ cá nhân và vị trí công tác" },
      ]}
      columns={[
        { header: "Mã nhân viên", accessor: "employeeCode" },
        { header: "Họ và tên", accessor: "fullName" },
        { header: "Chức danh", accessor: "positionName" },
        { header: "Phòng ban", accessor: "departmentName" },
        { header: "Chi nhánh làm việc", accessor: "branchName" },
        { header: "Số điện thoại", accessor: "phone" },
        { header: "Ngày vào làm", accessor: "hireDate" },
        { header: "Trạng thái", accessor: "status" },
      ]}
      sampleRows={[
        {
          employeeCode: "EMP-001",
          fullName: "Nguyễn Hoàng Nam",
          positionName: "Bếp Trưởng (Executive Chef)",
          departmentName: "Bộ phận Bếp (Kitchen)",
          branchName: "Chi nhánh Trung Tâm",
          phone: "0908 123 456",
          hireDate: "15/01/2023",
          status: "Đang làm việc",
        },
        {
          employeeCode: "EMP-002",
          fullName: "Trần Thu Hà",
          positionName: "Trưởng Ca Phục Vụ",
          departmentName: "Bộ phận Phục Vụ (F&B Service)",
          branchName: "Chi nhánh Trung Tâm",
          phone: "0912 345 678",
          hireDate: "01/06/2024",
          status: "Đang làm việc",
        },
      ]}
    />
  );
}
