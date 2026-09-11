import { SortDirection, SortField } from "./common";

export interface ImageItemResponse {
  id: string;
  url: string;
  fileName?: string;
  fileSize?: number;
  contentType?: string;
  createdAt?: string;
}

export interface ImageFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
