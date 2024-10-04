import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';
import NewsList from '@/app/_components/NewsList';
import { News } from '@/app/_libs/microcms';

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: '1',
      title: 'ニュースのタイトル1',
      category: {
        name: 'test1',
      },
      publishedAt: '2021-01-01',
      createdAt: '2021-01-01',
    },
    {
      id: '2',
      title: 'ニュースのタイトル2',
      category: {
        name: 'test2',
      },
      publishedAt: '2021-01-02',
      createdAt: '2021-01-02',
    },
    {
      id: '3',
      title: 'ニュースのタイトル3',
      category: {
        name: 'test3',
      },
      publishedAt: '2021-01-03',
      createdAt: '2021-01-03',
    },
  ],
};
export default function Home() {
  const slicedData = data.contents.slice(0, 2);
  return (
    <>
      <section className="l-main">
        <h1 className="l-main_ttl">これはタイトルです</h1>
        <Image className="l-main_img" src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className="c-news">
        <h2 className="c-news_mnTitle">News</h2>
        <NewsList news={slicedData} />
        <ButtonLink wrapperClassName="u-mt-xs c-btn-lightblue" linkClassName="target" href="/news">
          もっと見る
        </ButtonLink>
      </section>
    </>
  );
}
