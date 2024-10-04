import Image from 'next/image';

export default function Header() {
  return (
    <header className="l-header">
      <a href="/" className="l-header_link">
        <Image src="/logo.svg" alt="logo" width={341} height={109} className="l-header_logo" />
      </a>
    </header>
  );
}
