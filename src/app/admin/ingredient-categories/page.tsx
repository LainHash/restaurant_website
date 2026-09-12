"use client";

import Link from "next/link";
import { useState } from "react";
import { useIngredientCategories } from "@/hooks/catalog/useIngredientCategory";
import { IngredientCategoryPagination } from "./IngredientCategoryPagination";
import { IngredientCategoryToolbar } from "./IngredientCategoryToolbar";
import { IngredientCategoryStats } from "./IngredientCategoryStas";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { IngredientCategoryTable } from "./IngredientCategoryTable";

const PAGE_SIZE = 10;

function formatDate(value?: string) {
  if (!value) return "Chưa cập nhật";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export default function IngredientCategoriesPage() {
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const { categories, isLoading, error, refetch } = useIngredientCategories({
    Keyword: submittedKeyword || undefined,
    Page: page,
    PageSize: PAGE_SIZE,
    SortField: "Name",
    SortDirection: "Asc",
  });

  const items = categories?.data ?? [];
  const totalPages = categories?.totalPages ?? 1;

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSubmittedKeyword(keyword.trim());
  }


  return (
    <div className="space-y-6">

      <IngredientCategoryHeader
        onCreate={() => { }}
      />

      <IngredientCategoryStats
        totalItems={categories?.totalItems}
        activeItems={
          items.filter((item) => !item.isDeleted).length
        }
        currentPage={categories?.indexPage ?? page}
        totalPages={totalPages}
      />

      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

        <IngredientCategoryToolbar
          keyword={keyword}
          onKeywordChange={setKeyword}
          onSearch={submitSearch}
        />

        {/* <IngredientCategoryContent
          error={error}
          isLoading={isLoading}
          items={items}
          onRetry={refetch}
        /> */}

        <IngredientCategoryTable
          items={items}
        />

        <IngredientCategoryPagination
          totalItems={categories?.totalItems}
          page={page}
          totalPages={totalPages}
          isLoading={isLoading}
          onPrevious={() =>
            setPage((current) => current - 1)
          }
          onNext={() =>
            setPage((current) => current + 1)
          }
        />

      </section>
    </div>
  );
}
