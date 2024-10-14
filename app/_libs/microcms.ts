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

export type Member = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  name: string;
  position: string;
  profile: string;
};
