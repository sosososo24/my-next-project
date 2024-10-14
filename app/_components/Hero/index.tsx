import Image from 'next/image';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="l-main _sub">
      <div>
        <h1 className="l-main_ttl">{title}</h1>
        <p className="l-main_sub">{sub}</p>
      </div>
      <Image className="l-main_img" src="/img-mv.jpg" alt="" width={4000} height={1200} />
    </section>
  );
}
