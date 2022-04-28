import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg viewBox="0 0 24 24" className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}>
            <polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" points="2,7 12,17 22,7" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div id="faq" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <Link href="/">
            <a className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <Image src="/logo.png" alt="logo" width={40} height={40} className="border-2 rounded-full hover:rounded-sm" />
              </div>
            </a>
          </Link>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)" width="52" height="24" />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="Pogogoul Crypto Apa sih? 🤔">Pogogulcrypto.com adalah media online yang berfokus menyajikan berita dan informasi seputar teknologi Blockchain, Bitcoin, dan Aset Kripto.</Item>
          <Item title="Bagaimana cara bergabung dengan Pogogul Crypto">
            Kalian bisa bergabung melalui link telegram kami di{" "}
            <a href="https://t.me/pogogulcrypto" target="_blank" className="text-indigo-400">
              Telegram Pogogul Crypto
            </a>{" "}
          </Item>
          <Item title="Ada pertanyaan seputar Blockchain dan Cryptocurrency?">Buruan bergabung dengan grup dan media online Pogogul Crypto 😊😊 akan sangat baik untuk anda belajar lebih mengenai Blockchain dan Cryptocurrency</Item>
        </div>
      </div>
    </div>
  );
};
