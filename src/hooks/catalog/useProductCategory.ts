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
    isLoading: true,
    error: null,
  });

  const { Keyword, Page, PageSize, SortField, SortDirection } = params ?? {};

  useEffect(() => {
    let ignore = false;

    productCategoryService
      .getAll({
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
            err instanceof Error ? err.message : "Không thể tải danh mục món ăn.";
          setState((prev) => ({ ...prev, isLoading: false, error: message }));
        }
      });

    return () => {
      ignore = true;
    };
  }, [Keyword, Page, PageSize, SortField, SortDirection]);

  const refetch = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await productCategoryService.getAll({
        Keyword,
        Page,
        PageSize,
        SortField,
        SortDirection,
      });
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải danh mục món ăn.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [Keyword, Page, PageSize, SortField, SortDirection]);

  return {
    categories: state.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch,
  };
}

export function useProductCategory(id: string | null | undefined) {
  const [state, setState] = useState<UseProductCategoryState>({
    data: null,
    isLoading: Boolean(id),
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    let ignore = false;

    productCategoryService
      .getById(id)
      .then((result) => {
        if (!ignore) {
          setState({ data: result, isLoading: false, error: null });
        }
      })
      .catch((err) => {
        if (!ignore) {
          const message =
            err instanceof Error ? err.message : "Không thể tải chi tiết danh mục.";
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
      const result = await productCategoryService.getById(id);
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải chi tiết danh mục.";
      setState((prev) => ({ ...prev, isLoading: false, error: message }));
    }
  }, [id]);

  return {
    category: state.data?.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch,
  };
}
