import { productService } from "@/services";
import type {
  ApiResponse,
  PaginatedResponse,
  ProductFilterParams,
  ProductResponse,
} from "@/types/api";

export type ProductTableRow = Record<string, string | number>;

export async function fetchProductsData(
  params?: ProductFilterParams
): Promise<PaginatedResponse<ProductResponse>> {
  const normalizedParams: ProductFilterParams = {
    ...params,
    Page: params?.Page ?? 1,
    PageSize: params?.PageSize ?? 10,
  };

  return productService.getAll(normalizedParams);
}

export async function fetchProductDetailData(
  id: string
): Promise<ApiResponse<ProductResponse>> {
  return productService.getById(id);
}

function formatVnd(value?: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}

export function mapProductsToTableRows(
  products: ProductResponse[] = []
): ProductTableRow[] {
  return products.map((product) => ({
    id: product.id,
    name: product.name ?? "Không có tên",
    categoryName: product.categoryName ?? "Chưa phân loại",
    unitPrice: formatVnd(product.unitPrice),
    inventoryType: product.inventoryType ?? "MadeToOrder",
    unitName: product.unitName ?? "Chưa có",
    brandName: product.brandName ?? "Chưa có thương hiệu",
  }));
}
