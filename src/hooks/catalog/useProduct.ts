"use client";

import { useState, useEffect, useCallback } from "react";
import { productService } from "@/services";
import type {
  ProductResponse,
  ProductFilterParams,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

interface UseProductsState {
  data: PaginatedResponse<ProductResponse> | null;
  isLoading: boolean;
  error: string | null;
}

interface UseProductState {
  data: ApiResponse<ProductResponse> | null;
  isLoading: boolean;
  error: string | null;
}

export function useProducts(params?: ProductFilterParams) {
  const [state, setState] = useState<UseProductsState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const { CategoryId, BrandId, Keyword, Page, PageSize, SortField, SortDirection } = params ?? {};

  useEffect(() => {
    let ignore = false;

    productService
      .getAll({
        CategoryId,
        BrandId,
        Keyword,
        Page,
        PageSize,
        SortField,
        SortDirection,
      })
      .then((result) => {
        if (!ignore) {
          setState({ data: result, isLoading: false, error: null });
        }
      })
      .catch((err) => {
        if (!ignore) {
          const message =
            err instanceof Error ? err.message : "Không thể tải danh sách món ăn.";
          setState((prev) => ({ ...prev, isLoading: false, error: message }));
        }
      });

    return () => {
      ignore = true;
    };
  }, [CategoryId, BrandId, Keyword, Page, PageSize, SortField, SortDirection]);

  const refetch = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await productService.getAll({
        CategoryId,
        BrandId,
        Keyword,
        Page,
        PageSize,
        SortField,
        SortDirection,
      });
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải danh sách món ăn.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [CategoryId, BrandId, Keyword, Page, PageSize, SortField, SortDirection]);

  return {
    products: state.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch,
  };
}

export function useProduct(id: string | null | undefined) {
  const [state, setState] = useState<UseProductState>({
    data: null,
    isLoading: Boolean(id),
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    let ignore = false;

    productService
      .getById(id)
      .then((result) => {
        if (!ignore) {
          setState({ data: result, isLoading: false, error: null });
        }
      })
      .catch((err) => {
        if (!ignore) {
          const message =
            err instanceof Error ? err.message : "Không thể tải chi tiết món ăn.";
          setState((prev) => ({ ...prev, isLoading: false, error: message }));
        }
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  const refetch = useCallback(async () => {
    if (!id) return;
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await productService.getById(id);
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải chi tiết món ăn.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [id]);

  return {
    product: state.data?.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch,
  };
}

