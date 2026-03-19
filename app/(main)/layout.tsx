export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-11/12 mx-auto py-2">
      {children}
    </div>
  );
}
