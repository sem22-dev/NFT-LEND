"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

import { GoChevronDown, GoChevronUp,} from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

export default function Navbar(){
    const [toggleMenu, setToggleMenu ] = useState(false);
    return(
        <div>
            <div className=' z-10 relative pt-20 hidden lg:block'>
            <div className="flex mx-auto justify-between items-center container py-3 px-20 2xl:px-48">
                <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>

                <div className="flex gap-16 text-[18px]">
                    <Link href="/Process">Our Process</Link>
                    <Link className="flex flex-row gap-2" href="/Lend"><p>Lend</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                    <Link className="flex flex-row gap-2" href="/Loan"><p>Loan</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                    <Link className="flex flex-row gap-2" href="/about"><p>About</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                    <Link href="/blogs">Blogs</Link>
                </div>

                <div>
                <button type="button" className="text-white bg-bg hover:bg-header hover:text-bg2 border border-transparent focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                    <Image className="mr-[5px]" src="/images/meta.svg" alt="metamask" width={20} height={20}/>
                    Connect with MetaMask
                    </button>
                </div>
           </div>
        </div>

        <div className=' bg-transparent relative z-10 lg:hidden flex flex-row justify-between h-screen'>
           <div className=" bg-transparent mx-auto container ">
                    
                <div className=" flex justify-between items-center px-3 py-3  sm:px-16 sm:py-16 ">
                    <HiOutlineMenuAlt1 fontSize={27} onClick={() => setToggleMenu(!toggleMenu)}/> 
                    <Link href="/" className=" text-[27px] font-extrabold ">SageFi</Link>
                </div>
                {
                    toggleMenu && (
                        <div className=" absolute top-0 bg-transparent w-full">
                            <div className="flex  w-[50%] h-[100vh] bg-gray-700 flex-col z-10 top-0 left-0 slide-side">
                                <div className=" pt-36 pl-8 flex flex-col gap-5 text-[20px] text-white">
                                    <Link className="flex flex-row" href="/"><p>Home</p> </Link> 
                                    <Link href="/Process" className="flex flex-row">Process</Link>
                                    <Link className="flex flex-row" href="/Lend"><p>Lend</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                    <Link className="flex flex-row" href="/Loan"><p>Loan</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                                    <Link className="flex flex-row" href="/about"><p>About</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                    <Link href="/blogs">Our Blog</Link>
                                    <button onClick={() => setToggleMenu(!toggleMenu)} className="absolute top-2 right-2">X</button>
                                </div>
                            </div>
                        </div>
                    )
                }
           </div>
           
        </div>
     </div>
        
    )
}