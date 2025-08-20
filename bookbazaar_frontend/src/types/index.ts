export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description?: string;
  category: string;
  rating?: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  count?: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
