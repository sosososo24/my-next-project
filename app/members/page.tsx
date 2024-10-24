import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '@/app/_libs/_constants';

export default async function page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
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
