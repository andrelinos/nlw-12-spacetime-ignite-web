import Image from 'next/image';
import Link from 'next/link';

import nlwLogo from '../assets/nlw-spacetime-logo.svg';

export function HeroMobile() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[80vw] space-y-1 ">
        <h1 className="text-5xl font-bold leading-tight text-gray-50 only:sm:text-center">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed only:sm:text-center">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <div className="flex justify-center lg:justify-start">
        <Link
          className="inline-block rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          href="/memories/new"
        >
          CADASTRAR LEMBRANÇA
        </Link>
      </div>
    </div>
  );
}
