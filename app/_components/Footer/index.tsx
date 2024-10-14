import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="l-footer">
      <nav className="l-footer_nav">
        <ul className="l-footer_navItems">
          <li className="l-footer_navItems_item">
            <Link href="/news">ニュース</Link>
          </li>
          <li className="l-footer_navItems_item">
            <Link href="/members">メンバー</Link>
          </li>
          <li className="l-footer_navItems_item">
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p className="l-footer_cr">&copy; 2024 株式会社</p>
    </footer>
  );
}
