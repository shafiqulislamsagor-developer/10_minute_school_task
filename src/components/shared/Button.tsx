export default function Button({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary text-white px-4 py-1 rounded font-medium hover:bg-primary/90 cursor-pointer`}
    >
      {children}
    </button>
  );
}
