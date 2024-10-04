export default function Footer() {
  return (
    <footer className="l-footer">
      <nav className="l-footer_nav">
        <ul className="l-footer_navItems">
          <li className="l-footer_navItems_item">
            <a href="/news">ニュース</a>
          </li>
          <li className="l-footer_navItems_item">
            <a href="/member">メンバー</a>
          </li>
          <li className="l-footer_navItems_item">
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className="l-footer_cr">&copy; 2024 株式会社</p>
    </footer>
  );
}
