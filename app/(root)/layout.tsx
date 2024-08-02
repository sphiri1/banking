//special layout e.g home, dashboard

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
    SIDEBAR
    {children}
  </main>
  );
}
