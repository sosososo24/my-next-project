import Image from 'next/image';
import { News } from '@/app/_libs/microcms';
import Category from '@/app/_components/Category';
import Date from '@/app/_components/Date';

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <div>記事がありません</div>;
  }
  return (
    <ul className="c-news_list">
      {news.map((article) => (
        <li key={article.id} className="c-news_list_item">
          <div className="c-news_link">
            <Image className="c-news_img" src="/no-image.png" alt="no image" width={1200} height={630} />
            <dl className="c-news_content">
              <dt className="c-news_title">{article.title}</dt>
              <dd className="c-news_meta">
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
