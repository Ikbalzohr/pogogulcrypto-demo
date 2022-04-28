import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 object-cover w-full h-full xl:h-full pt-16">
        <Image src="/bg.png" layout="fill" className="absolute inset-0 object-cover w-full h-full pt-16" />
      </div>
      <div className="relative bg-opacity-20 pt-8 pb-32">
        <svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1180 160">
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl pt-20 xl:pt-0 mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                Welcome to <br className="hidden md:block" />
                POGOGUL CRYPTO
              </h2>
              <p className="font-bold max-w-xl mb-4 text-xl text-black md:text-lg">
                Whereas most technologies tend to automate workers on the periphery doing menial tasks, blockchains automate away the center. Instead of putting the taxi driver out of a job, blockchain puts Uber out of a job and lets the
                taxi drivers work with the customer directly.
              </p>
              <p className="max-w-xl mb-4 text-base text-black md:text-lg italic"> - Vitalik Buterin, Co-Founder of Ethereum</p>
              <a
                href="https://www.huffpost.com/entry/blockchain---the-key-to-p_b_10537540"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="hidden w-full max-w-xl xl:px-8 xl:w-5/12 xl:inline-block md:inline-block ">
              <div className="bg-white rounded shadow-2xl p-2 sm:p-10 flex flex-col items-center ">
                <div className="basis-6/12 mb-3">
                  <Image src="/logo.png" alt="logo" width={100} height={100} className="border rounded-full" />
                </div>

                <h3 className="basis-6/12 mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Sign up for updates</h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="firstName" className="inline-block mb-1 font-medium">
                      First name
                    </label>
                    <input
                      placeholder="Ikhing"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-indigo-300 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="lastName" className="inline-block mb-1 font-medium">
                      Last name
                    </label>
                    <input
                      placeholder="Riuh"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-indigo-300 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="email" className="inline-block mb-1 font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="ikhing@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-indigo-300 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 border-2 border-gray-300 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-300 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
