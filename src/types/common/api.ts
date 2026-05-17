export interface ApiSuccessResponse<T> {
  data: T;
  count: number;
}

export interface ApiErrorResponse {
  error: string;
  message: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function isApiError(res: ApiResponse<unknown>): res is ApiErrorResponse {
  return "error" in res;
}
