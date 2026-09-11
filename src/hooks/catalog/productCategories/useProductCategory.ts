"use client";

import { useState, useEffect, useCallback } from "react";
import { productCategoryService } from "@/services";
import type {
  ProductCategoryResponse,
  CategoryFilterParams,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

interface UseProductCategoriesState {
  data: PaginatedResponse<ProductCategoryResponse> | null;
  isLoading: boolean;
  error: string | null;
}

interface UseProductCategoryState {
  data: ApiResponse<ProductCategoryResponse> | null;
  isLoading: boolean;
  error: string | null;
}

export function useProductCategories(params?: CategoryFilterParams) {
  const [state, setState] = useState<UseProductCategoriesState>({
    data: null,
    isLoading: false,
    error: null,
  });

  const fetchAll = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await productCategoryService.getAll(params);
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải danh mục món ăn.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [
    params?.Keyword,
    params?.Page,
    params?.PageSize,
    params?.SortField,
    params?.Direction,
  ]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    categories: state.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch: fetchAll,
  };
}

export function useProductCategory(id: string | null | undefined) {
  const [state, setState] = useState<UseProductCategoryState>({
    data: null,
    isLoading: false,
    error: null,
  });

  const fetchById = useCallback(async () => {
    if (!id) return;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await productCategoryService.getById(id);
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải chi tiết danh mục.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [id]);

  useEffect(() => {
    fetchById();
  }, [fetchById]);

  return {
    category: state.data?.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch: fetchById,
  };
}
