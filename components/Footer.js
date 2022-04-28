import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/">
            <a aria-label="Go home" title="Company" className="inline-flex items-center">
              <Image src="/logo.png" alt="logo" width={40} height={40} className="border-2 rounded-full hover:rounded-sm" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Pogogul Crypto</span>
            </a>
          </Link>
          <div className="mt-6 lg:max-w-sm hidden xl:inline-block lg:inline-block">
            <p className="text-sm text-gray-800">
              Dibentuk pada 2017, pogogulcrypto.com adalah media online yang berfokus menyajikan berita dan informasi seputar teknologi Blockchain, Bitcoin, dan Aset Kripto. Setiap hari tim kami menyampaikan berita terkini dengan gaya yang
              informatif dan edukatif.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a href="tel:+62 823 0009 3080" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-indigo-400 hover:text-indigo-800">
              +62 823 0009 3080
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@pogogulcrypto.com
"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-indigo-400 hover:text-indigo-800"
            >
              info@pogogulcrypto.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps/place/Toko+Riska/@1.1630648,121.4305823,18.68z/data=!4m5!3m4!1s0x3270b1deef6cb317:0xc417b830af264e89!8m2!3d1.1628648!4d121.4316396"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-indigo-400 hover:text-indigo-800"
            >
              Leok II, Buol, Sulawesi Tengah, Indonesia
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="https://twitter.com/pogogulcrypto" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/pogogul_crypto/" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/pogogulcrypto?_rdc=2&_rdr" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCjpGedzseicJjRojIw-vyAg/" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">
              <svg viewBox="0 0 24 24" width="30px" height="30px" fill="currentColor" className="h-10">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z" />
              </svg>
            </a>
            <a href="https://t.me/pogogulcrypto" target="_blank" className="text-gray-500 transition-colors duration-300 hover:text-indigo-400">
              <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" className="h-10">
                <path d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 C 3.9563403 13.559857 6.0424892 14.392968 6.9492188 14.755859 C 7.2668647 15.707799 8.0129251 17.950071 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710938 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.367188 C 15.897113 20.439837 16.308174 20.998047 17.261719 20.998047 C 17.829844 20.998047 18.280978 20.718791 18.568359 20.423828 C 18.855741 20.128866 19.034757 19.82706 19.115234 19.417969 L 19.115234 19.414062 L 19.115234 19.412109 C 19.171124 19.121728 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.01148 4.9067181 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799749 5.7182284 17.343164 18.059965 17.183594 18.878906 L 14.328125 16.240234 C 13.59209 15.559749 12.44438 15.535812 11.679688 16.181641 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.267511 8.8918132 10.350132 11.694224 7.96875 13.048828 C 7.8792978 12.995267 7.7913128 12.939666 7.6933594 12.900391 C 6.9119785 12.587666 5.4101276 11.985551 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.023438 C 17.152344 19.023438 17.154297 19.023438 17.154297 19.023438 C 17.154234 19.023761 17.152444 19.03095 17.152344 19.03125 C 17.154024 19.022709 17.151187 19.029588 17.152344 19.023438 z" />
              </svg>
            </a>
          </div>
          <div className="hidden xl:inline-block lg:inline-block">
            <p className="mt-4 text-sm text-gray-500">Bitcoin is a remarkable cryptographic achievement, and the ability to create something that is not duplicable in the digital world has enormous value.</p>
            <p className="italic mt-4 text-sm text-gray-500">-Eric Schmidt, CEO of Google</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2020 PogogoulCrypto. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="#faq">
              <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-400">F.A.Q</a>
            </Link>
          </li>
          <li>
            <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-400">Privacy Policy</a>
          </li>
          <li>
            <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-400">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
