import Link from "next/link"
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(

    <footer aria-label="Site Footer" className=" font-lexend bg-gradient-to-top">
    <div className="font-comic max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div className=" flex flex-col md:flex-row gap-20 md:gap-40 ">
        <div className="flex flex-col gap-2">
                <div className="text-bg font-lexend">
                    <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>
                </div>
                <div className="flex gap-4">

                    <Link href="_blank" className="bg-twitter p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <FaTwitter className="w-7 h-6"/>
                    </Link >
                    <Link href="_blank" className="bg-discord p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <FaDiscord className="w-7 h-6"/>
                    </Link >
                    <Link href="_blank" className="bg-youtube p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <FaYoutube className="w-7 h-6"/>
                    </Link >
                </div>
        </div>

      <div
        className=" flex flex-col md:flex-row gap-24 md:gap-32"
      >
          <div className="flex flex-col gap-6">
          <p className=" text-gray-900 text-xl font-medium  pb-2">Links</p>
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Lend
            </Link>
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Loan
            </Link>
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Faqs
            </Link>
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Analytics
            </Link>
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Docs
            </Link>
        </div>

        <div className="flex flex-col gap-6">
          <p className=" text-gray-900 text-xl font-medium pb-2">Legal</p>
          <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Terms & Conditions
                </Link>

    
            <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Privacy Policy
            </Link>
        </div>

        <div className="flex flex-col gap-6">
          <p className=" text-gray-900 text-xl font-medium pb-2">Helpful Links</p>
          <Link href="#" className="text-gray-700 transition hover:opacity-75">
                How it works ?
          </Link>

        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500">
      &copy; 2023.SageFi. All rights reserved.
    </p>
  </div>
</footer>


    )
}
