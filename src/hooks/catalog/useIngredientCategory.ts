"use client";

import { useState, useEffect, useCallback } from "react";
import { ingredientCategoryService } from "@/services";
import type {
  IngredientCategoryResponse,
  CategoryFilterParams,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

interface UseIngredientCategoriesState {
  data: PaginatedResponse<IngredientCategoryResponse> | null;
  isLoading: boolean;
  error: string | null;
}

interface UseIngredientCategoryState {
  data: ApiResponse<IngredientCategoryResponse> | null;
  isLoading: boolean;
  error: string | null;
}

export function useIngredientCategories(params?: CategoryFilterParams) {
  const [state, setState] = useState<UseIngredientCategoriesState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const { Keyword, Page, PageSize, SortField, SortDirection } = params ?? {};

  useEffect(() => {
    let ignore = false;

    ingredientCategoryService
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
            err instanceof Error ? err.message : "Không thể tải danh mục nguyên liệu.";
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
      const result = await ingredientCategoryService.getAll({
        Keyword,
        Page,
        PageSize,
        SortField,
        SortDirection,
      });
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Không thể tải danh mục nguyên liệu.";
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

export function useIngredientCategory(id: string | null | undefined) {
  const [state, setState] = useState<UseIngredientCategoryState>({
    data: null,
    isLoading: Boolean(id),
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    let ignore = false;

    ingredientCategoryService
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
      const result = await ingredientCategoryService.getById(id);
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
