export type NewsCategory = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: NewsCategory;
  publishedAt: string;
  createdAt: string;
};
