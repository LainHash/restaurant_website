export class ApiClientError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.data = data;
  }
}

export interface RequestOptions extends RequestInit {
  params?: Record<string, unknown>;
  token?: string;
}

const BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "https://hautedehallen.onrender.com").replace(/\/$/, "");

/**
 * Token manager to store and retrieve bearer tokens
 */
export const tokenStorage = {
  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("accessToken");
  },
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token);
    }
  },
  clearToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
  },
};

/**
 * Serialize query parameters cleanly
 */
function buildQueryString(params?: Record<string, unknown>): string {
  if (!params) return "";
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, String(v)));
      } else {
        query.append(key, String(value));
      }
    }
  });

  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
}

/**
 * Generic core request function
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, token, headers, ...customConfig } = options;
  const queryString = buildQueryString(params);
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${BASE_URL}${cleanEndpoint}${queryString}`;

  const authToken = token || tokenStorage.getToken();

  const defaultHeaders: Record<string, string> = {
    Accept: "application/json",
  };

  // Only set application/json if body is not FormData
  if (!(customConfig.body instanceof FormData)) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  if (authToken) {
    defaultHeaders["Authorization"] = `Bearer ${authToken}`;
  }

  const response = await fetch(url, {
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...(headers as Record<string, string>),
    },
  });

  if (!response.ok) {
    let errorData: unknown = null;
    try {
      errorData = await response.json();
    } catch {
      errorData = await response.text();
    }
    throw new ApiClientError(
      `API request failed: ${response.status} ${response.statusText}`,
      response.status,
      errorData
    );
  }

  // If 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  }

  return response.text() as unknown as Promise<T>;
}

export const http = {
  get<T>(endpoint: string, params?: Record<string, unknown>, options?: RequestOptions): Promise<T> {
    return apiClient<T>(endpoint, { method: "GET", params, ...options });
  },

  post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    const isFormData = body instanceof FormData;
    return apiClient<T>(endpoint, {
      method: "POST",
      body: isFormData ? body : JSON.stringify(body),
      ...options,
    });
  },

  put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    const isFormData = body instanceof FormData;
    return apiClient<T>(endpoint, {
      method: "PUT",
      body: isFormData ? body : JSON.stringify(body),
      ...options,
    });
  },

  patch<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return apiClient<T>(endpoint, {
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...options,
    });
  },

  delete<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return apiClient<T>(endpoint, {
      method: "DELETE",
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...options,
    });
  },

  upload<T>(endpoint: string, formData: FormData, options?: RequestOptions): Promise<T> {
    return apiClient<T>(endpoint, {
      method: "POST",
      body: formData,
      ...options,
    });
  },
};
