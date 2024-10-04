import '@/app/styles/ress.scss';
import '@/app/styles/main.scss';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
