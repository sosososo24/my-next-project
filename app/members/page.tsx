import Image from 'next/image';
import { Member } from '@/app/_libs/microcms';

const data: {
  contents: Member[];
} = {
  contents: [
    {
      id: '1',
      image: {
        url: '/img-member1.jpg',
        width: 240,
        height: 240,
      },
      name: 'member1',
      position: 'CEO',
      profile:
        'グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自分の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の請求を牽引している。',
    },
    {
      id: '2',
      image: {
        url: '/img-member2.jpg',
        width: 240,
        height: 240,
      },
      name: 'member2',
      position: 'CTO',
      profile:
        'ソフトウェア開発のエキスパート。新しい技術を取り入れ、ビジネスの成長を促進するために、会社の技術戦略を策定している。以前は、大手ソフトウェア企業で主要な技術リーダーとして勤務し、数々のプロジェクトを成功に導いてきた。',
    },
    {
      id: '3',
      image: {
        url: '/img-member3.jpg',
        width: 240,
        height: 240,
      },
      name: 'member3',
      position: 'CFO',
      profile:
        '財務戦略の専門家。会社の財務状況を最適化し、収益性を向上させるために、会社の財務戦略を策定している。以前は、大手ソフトウェア企業で財務部門の責任者として勤務し、会社の財務状況を改善するための戦略を策定してきた。',
    },
  ],
};

export default function Page() {
  return (
    <div className="l-member">
      {data.contents.length === 0 ? (
        <p className="l-member_empty">メンバーが登録されていません</p>
      ) : (
        <ul className="l-member_lists">
          {data.contents.map((member) => (
            <li key={member.id} className="l-member_lists_item">
              <Image className="l-member_lists_image" src={member.image.url} alt={member.name} width={member.image.width} height={member.image.height} />
              <dl>
                <dt className="l-member_lists_name">{member.name}</dt>
                <dd className="l-member_lists_position">{member.position}</dd>
                <dd className="l-member_lists_profile">{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
