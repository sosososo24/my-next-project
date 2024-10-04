import { NewsCategory } from '@/app/_libs/microcms';

type Props = {
  category: NewsCategory;
};

export default function Category({ category }: Props) {
  return <span className="c-news_tag">{category.name}</span>;
}
