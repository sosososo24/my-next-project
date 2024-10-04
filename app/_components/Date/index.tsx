import Image from 'next/image';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className="c-news_date">
      <Image src="/clock.svg" alt="clock" width={16} height={16} priority />
      {date}
    </span>
  );
}
