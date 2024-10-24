import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIST_LIMIT } from '@/app/_libs/_constants';
import ButtonLink from '@/app/_components/ButtonLink';
import NewsList from '@/app/_components/NewsList';

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIST_LIMIT });
  return (
    <>
      <section className="l-main">
        <div>
          <h1 className="l-main_ttl">これはタイトルです</h1>
        </div>
        <Image className="l-main_img" src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className="c-news">
        <h2 className="c-news_mnTitle">News</h2>
        <NewsList news={data.contents} />
        <ButtonLink wrapperClassName="u-mt-xs c-btn-lightblue" linkClassName="target" href="/news">
          もっと見る
        </ButtonLink>
      </section>
    </>
  );
}
