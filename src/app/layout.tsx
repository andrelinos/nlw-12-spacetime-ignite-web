import { ReactNode } from 'react';
import './globals.css';

import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google';
import { cookies } from 'next/headers';

import { Copyright } from '~/components/Copyright';
import { HeroMobile } from '~/components/HeroMobile';
import { Profile } from '~/components/Profile';
import { SignIn } from '~/components/SignIn';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
});

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-6 py-16 lg:px-28">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}
            {/* <Hero /> */}
            <HeroMobile />
            <div className="hidden lg:flex">
              <Copyright />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover lg:max-h-screen lg:overflow-y-scroll">
            {children}
          </div>
          <div className="my-6 flex justify-center lg:hidden">
            <Copyright />
          </div>
        </main>
      </body>
    </html>
  );
}
