export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>This is the AUTHENTICATION LAYOUT BROOO!</h1>
      {children}
    </>
  );
}
