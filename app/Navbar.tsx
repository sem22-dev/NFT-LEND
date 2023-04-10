"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

import { GoChevronDown, GoChevronUp,} from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

export default function Navbar(){
    const [toggleMenu, setToggleMenu ] = useState(false);


    return(
        <div className=" pt-8 pb-2 px-16 ">
            <div className=' z-10 relative hidden lg:block'>
                <div className="flex mx-auto gap-2 justify-between items-center container">
                    <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>

                    <div className="flex  gap-10 xl:gap-16 text-[18px]">
                        <Link className="flex flex-row gap-2" href="/Lend"><p>Lend</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                        <Link className="flex flex-row gap-2" href="/Loan"><p>Loan</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                        <Link className="flex flex-row gap-2" href="/about"><p>Community</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                        <Link className="flex flex-row gap-2" href="/about"><p>About</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                        <Link className="flex flex-row gap-2" href="/about"><p>More</p></Link> 

                    </div>

                    <div>
                        <button type="button" className="text-white bg-bg hover:bg-header hover:text-bg2 border border-transparent focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                        <Image className="mr-[5px]" src="/images/meta.svg" alt="metamask" width={20} height={20}/>
                        Connect with MetaMask
                        </button>
                    </div>  
                </div>
            </div>

    
           <div className={`${toggleMenu ? 'h-full' : ''} w-screen lg:hidden z-20 absolute top-0 left-0  `}>
                    
                <div className={` bg-white flex justify-between items-center px-7 pt-2 md:px-16 lg:px-24`}>
                    <HiOutlineMenuAlt1 fontSize={27} onClick={() => setToggleMenu(!toggleMenu)}/> 
                    <Link href="/" className=" text-[27px] font-extrabold ">SageFi</Link>
                </div>
                    <div  className= {`flex fixed top-0 overflow-y-hidden w-full ${toggleMenu ? 'bg-littleBlack block' : ' hidden'}`}>
                                <div className={`flex row w-[400px] h-[100vh] bg-gray-700 flex-col z-10 top-0 left-0 ${toggleMenu ? 'slide-side' : 'slide-side-out'}`}>
                                    <div className={`pt-36 pl-8 flex flex-col gap-5 text-[20px] text-white`}>
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row" href="/"><p>Home</p> </Link> 
                                        <Link onClick={() => setToggleMenu(false)}  href="/Process" className="flex flex-row">Process</Link>
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row" href="/Lend"><p>Lend</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row" href="/Loan"><p>Loan</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row" href="/about"><p>About</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                        <Link onClick={() => setToggleMenu(false)}  href="/blogs">Our Blog</Link>
                                        <button onClick={() => setToggleMenu(!toggleMenu)} className="absolute top-2 right-2">X</button>
                                    </div>
                                </div>
                                <div onClick={() => setToggleMenu(false)}  className={` w-full `}></div>
                     </div>
                
           </div>
           
        </div>
    //  </div>
        
    )
}

