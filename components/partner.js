import Image from "next/image";

export const Partner = () => {
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col items-center relative px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <div className="z-10 py-4 lg:py-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none">OUR PARTNER</h1>
        </div>
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-indigo-100">
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
            <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
            <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
            <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
          </svg>
        </div>
        <div className="relative px-2 py-2 sm:px-5 sm:py-5 lg:px-20 lg:py-20 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-2 lg:gap-32 lg:justify-items-center ">
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-start mb-3 ">
                <Image src="/mantra.png" alt="logo" width={100} height={100} className="border rounded-3xl" />
              </div>
              <p className="mb-2 font-bold">MANTRA DAO</p>
              <p className="text-sm leading-5 text-gray-900 text-justify">
                MANTRA DAO adalah platform DeFi yang dikelola komunitas yang berfokus pada Staking, Lending, dan Governance. MANTRA DAO memanfaatkan kebijaksanaan orang banyak untuk menciptakan ekosistem yang diatur oleh komunitas,
                transparan, dan terdesentralisasi untuk web 3.0. Dibangun di atas Substrat Paritas untuk ekosistem Polkadot, MANTRA DAO memberikan kontrol keuangan kembali kepada masyarakat untuk menyimpan dan menumbuhkan kekayaan bersama.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-start mb-3">
                <Image src="/skale.png" alt="logo" width={100} height={100} className="border rounded-3xl" />
              </div>
              <p className="mb-2 font-bold">SKALE</p>
              <p className="text-sm leading-5 text-gray-900 text-justify">
                Protokol modular SKALE Networks adalah salah satu yang pertama dari jenisnya yang memungkinkan pengembang untuk dengan mudah menyediakan blockchain yang sangat dapat dikonfigurasi, yang memberikan manfaat desentralisasi
                tanpa mengorbankan komputasi, penyimpanan, atau keamanan.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
