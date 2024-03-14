export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>This is the product details layout!</h1>
      {children}
    </>
  );
}
