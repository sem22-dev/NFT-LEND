"use client"

import Link from "next/link"
import { useState } from "react"

import { GoChevronDown, GoChevronUp,} from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

export default function Navbar(){
    const [toggleMenu, setToggleMenu ] = useState(false);
    return(
        <div>
            <div className=' z-10 relative pt-20 hidden lg:block'>
            <div className="flex mx-auto justify-between items-center container py-3 px-20">
                <Link href="/" className="text-[45px] font-light ">ArtLend</Link>

                <div className="flex gap-16 text-[18px]">
                    <Link href="/Process">Our Process</Link>
                    <Link className="flex flex-row gap-2" href="/Lend"><p>Lend</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                    <Link className="flex flex-row gap-2" href="/Loan"><p>Loan</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                    <Link className="flex flex-row gap-2" href="/about"><p>About</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                    <Link href="/blogs">Blogs</Link>
                </div>

                <div>
                    <button className="w-[150px] h-[63px] left-[1213px] top-[121px] bg-gray-800 text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Get Started</button>
                </div>
           </div>
        </div>

        <div className=' bg-transparent relative z-10 lg:hidden flex flex-row justify-between h-screen'>
           <div className=" bg-transparent mx-auto container ">
                    
                <div className="flex justify-between align-center px-3 py-3">
                    <HiOutlineMenuAlt1 fontSize={27} onClick={() => setToggleMenu(!toggleMenu)}/> 
                    <Link href="/" className="text-[27px] font-light ">ArtLend</Link>
                </div>
                {
                    toggleMenu && (
                        <div className="absolute top-0 bg-transparent w-full">
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