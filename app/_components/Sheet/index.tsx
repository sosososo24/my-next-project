type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className="c-inner-medium c-inner-pad">{children}</div>;
}
