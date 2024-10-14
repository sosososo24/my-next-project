import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/app/_components/Menu';

export default function Header() {
  return (
    <header className="l-header">
      <Link href="/" className="l-header_link">
        <Image src="/logo.svg" alt="logo" width={341} height={109} className="l-header_logo" />
      </Link>
      <Menu />
    </header>
  );
}
