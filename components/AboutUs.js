import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section id="about">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <Link href="/">
              <a aria-label="Go Home" title="Logo" className="inline-block mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Image src="/logo.png" alt="logo" width={40} height={40} className="border-2 rounded-full hover:rounded-sm" />
                </div>
              </a>
            </Link>
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-indigo-300">POGOGUL CRYPTO</h5>
            <p className="mb-6 text-gray-900">
              Dibentuk pada 2017, pogogulcrypto.com adalah media online yang berfokus menyajikan berita dan informasi seputar teknologi Blockchain, Bitcoin, dan Aset Kripto. Setiap hari tim kami menyampaikan berita terkini dengan gaya yang
              informatif dan edukatif.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
