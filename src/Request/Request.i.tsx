interface PARAMS {
  uri: string;
  id?: number;
  data?: Record<string, any> | null;
  headers?: Record<string, any> | null;
  params? : Record<string, any> | null;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
}

type RequestParams = {
  event: 'GET' | 'GETONE' | 'POST' | 'DELETE' | 'PUT';
  config: PARAMS;
}

type RequestReturn<T> = {
  data: T | null;
  error: Error | null;
  isFailed: boolean;
  isLoading: boolean;
}

export type { PARAMS, RequestParams, RequestReturn };