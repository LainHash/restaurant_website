import { brandService } from "@/services";
import type {
  ApiResponse,
  BrandFilterParams,
  BrandResponse,
  PaginatedResponse,
} from "@/types/api";

export type BrandTableRow = Record<string, string | number>;

export async function fetchBrandsData(
  params?: BrandFilterParams
): Promise<PaginatedResponse<BrandResponse>> {
  const normalizedParams: BrandFilterParams = {
    ...params,
    Page: params?.Page ?? 1,
    PageSize: params?.PageSize ?? 10,
  };

  return brandService.getAll(normalizedParams);
}

export async function fetchBrandDetailData(
  id: string
): Promise<ApiResponse<BrandResponse>> {
  return brandService.getById(id);
}

export function mapBrandsToTableRows(
  brands: BrandResponse[] = []
): BrandTableRow[] {
  return brands.map((brand) => ({
    id: brand.id,
    name: brand.name ?? "Không có tên",
    description: brand.description ?? "Chưa có mô tả",
    itemCount: 0,
    status: brand.isDeleted ? "Đã xóa" : "Đang hợp tác",
  }));
}
