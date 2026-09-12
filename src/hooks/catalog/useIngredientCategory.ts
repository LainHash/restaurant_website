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
    isLoading: false,
    error: null,
  });

  const fetchAll = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const result = await ingredientCategoryService.getAll(params);
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
    params?.SortDirection,
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

export function useIngredientCategory(id: string | null | undefined) {
  const [state, setState] = useState<UseIngredientCategoryState>({
    data: null,
    isLoading: false,
    error: null,
  });

  const fetchById = useCallback(async () => {
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
