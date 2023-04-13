"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

import { GoChevronDown} from 'react-icons/go'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'



export default function Navbar(){
    const [toggleMenu, setToggleMenu ] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
    return(
        <div className={`sticky top-0 font-lexend py-5 px-16 lg:px-32`}>
            <div className=' hidden font-bold lg:block'>
                <div className="flex mx-auto gap-1 justify-between items-center container">
                    <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>

                <div className="flex items-center gap-5 md:gap-10 font-light xl:gap-12 text-[17px]">
                {/* Lend */}
                <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p className="hover:text-header">Lend</p>
                    </div> 
                    {isOpen && (
                        <div tabIndex={0} className="dropdown-content menu bg-white p-3 shadow-lg text-black  w-60">
                            <Link className="hover:text-header rounded-none py-3 pl-2 " href="/Lend">Give a loan</Link>
                            <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">Offers</Link>
                        </div>
                    )}
                </div>
                    {/* Loan */}
                    <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p className="hover:text-header">Loan</p>
                    </div> 
                    {isOpen && (
                        <div tabIndex={0} className="dropdown-content menu bg-white p-3 shadow-lg text-black  w-60">
                        <Link className="hover:text-header rounded-none py-3 pl-2 " href="/Lend">Take a loan</Link>
                        <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">My loans</Link>
                    </div>
                    )}
                    </div>
                        {/* Community */}
                        <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p className="hover:text-header">Community</p>
                    </div> 
                    {isOpen && (
                         <div tabIndex={0} className="dropdown-content menu bg-white p-3 shadow-lg text-black  w-60">
                            <Link className="hover:text-header rounded-none py-3 pl-2 " href="/Lend">Twitter</Link>
                            <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">Discord</Link>
                        </div>
                    )}
                    </div>
                        {/* About */}
                        <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p className="hover:text-header">About</p>
                    </div> 
                    {isOpen && (
                        <div tabIndex={0} className="dropdown-content menu bg-white p-3 shadow-lg text-black  w-60">
                        <Link className="hover:text-header flex flex-row justify-between items-center rounded-none py-3 pl-2 " href="/Lend"><p>Docs</p> <span className="hidden hover:block transform -translate-y-1/2">
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L9.586 10 6.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span></Link>
                        <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">Stats</Link>
                        <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">Fair Launch</Link>
                        </div>
                    )}
                    </div>
                            {/* More */}
                        <div className="dropdown dropdown-hover">
                            <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                                <p className="hover:text-header">More</p>
                            </div> 
                            {isOpen && (
                             <div tabIndex={0} className="dropdown-content menu bg-white p-3 shadow-lg text-black  w-60">
                             <Link className="hover:text-header rounded-none py-3 pl-2 " href="/Lend">Faqs</Link>
                             <Link className="hover:text-header rounded-none py-3 pl-2" href="/Lend">How it Works?</Link>
                             </div>
                            )}
                        </div>                  
                </div>

                    <div>
                        <button type="button" className="text-white bg-bg hover:bg-header hover:text-bg2 border border-transparent focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                        <Image className="mr-[5px]" src="/images/meta.svg" alt="metamask" width={20} height={20}/>
                        Connect with MetaMask
                        </button>
                    </div>  
                </div>
            </div>
    

            {/* Mobile */}
           <div className={` w-screen lg:hidden z-20 absolute top-0 left-0  `}>
                    
                <div className={` bg-white flex justify-between items-center px-7 py-2 md:px-16 lg:px-24`}>
                <Link href="/" className=" text-[27px] font-extrabold ">SageFi</Link>
                    <HiOutlineMenuAlt1 fontSize={27} onClick={() => setToggleMenu(!toggleMenu)}/> 
                </div>
                    <div  className= {` ${toggleMenu ? 'block' : ' hidden'} flex fixed top-0 w-full`}>
                                <div className={`w-screen h-[100vh] flex flex-col gap-5 bg-white`}>
                                        <div className="flex  items-center justify-between py-10 px-16">
                                            <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>
                                            <button onClick={() => setToggleMenu(!toggleMenu)} className="text-[28px]"><GrClose /></button>
                                        </div>
                                    <div className={` w-full flex flex-col items-center gap-5 text-[28px] text-bg`}>
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row hover:text-header" href="/Lend"><p>LEND</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row hover:text-header" href="/Loan"><p>LOAN</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link>    
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row hover:text-header" href="/about"><p>COMMUNITY</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row hover:text-header" href="/about"><p>ABOUT</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                        <Link  onClick={() => setToggleMenu(false)} className="flex flex-row hover:text-header" href="/about"><p>MORE</p> <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/></Link> 
                                    </div>
                                </div>
                     </div>
                
           </div>
           
    </div>

        
    )
}

