export default function Button({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`${className} bg-primary text-white px-4 py-1 rounded font-medium hover:bg-primary/90 cursor-pointer`}
    >
      {children}
    </button>
  );
}
