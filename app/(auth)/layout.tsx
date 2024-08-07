//special layout e.g sign in, sign up

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src='/icons/auth-image.svg'
            height={400}
            width={400}
            alt='Auth image'
          />
        </div>
      </div>
    </main>
  );
}
