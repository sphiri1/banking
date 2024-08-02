//special layout e.g sign in, sign up

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
    {children}
  </main>
  );
}
