type Props = {
  href: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  linkClassName?: string;
};

export default function ButtonLink({ href, children, wrapperClassName = '', linkClassName = '' }: Props) {
  return (
    <div className={wrapperClassName}>
      <a href={href} className={linkClassName}>
        <span>{children}</span>
      </a>
    </div>
  );
}
