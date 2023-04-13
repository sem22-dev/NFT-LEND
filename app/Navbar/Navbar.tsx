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
        <div className={`sticky top-0 font-lexend py-5 px-16`}>
            <div className=' hidden font-bold lg:block'>
                <div className="flex mx-auto gap-1 justify-between items-center container">
                    <Link href="/" className="text-[45px] font-extrabold ">SageFi</Link>

                <div className="flex items-center gap-5 font-light xl:gap-12 text-[17px]">
                {/* Lend */}
                <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p>Lend</p> <GoChevronDown className="h-[24px] mt-1  cursor-pointer"/>
                    </div> 
                    {isOpen && (
                        <ul tabIndex={0} className="dropdown-content menu bg-bg p-2 shadow text-white w-64">
                        <li><Link className="hover:bg-header rounded-none hover:text-bg" href="/Lend">Lend</Link></li>
                        <li><Link className="hover:bg-header rounded-none hover:text-bg" href="/Lend">Offers</Link></li>
                        </ul>
                    )}
                    </div>
                    {/* Loan */}
                    <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p>Loan</p> <GoChevronDown className="h-[24px] mt-1  cursor-pointer"/>
                    </div> 
                    {isOpen && (
                        <ul tabIndex={0} className="dropdown-content menu bg-bg p-2 shadow text-white w-64">
                            <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Borrow</Link></li>
                            <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">My Loans</Link></li>
                        </ul>
                    )}
                    </div>
                        {/* Community */}
                        <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p>Community</p> <GoChevronDown className="h-[24px] mt-1  cursor-pointer"/>
                    </div> 
                    {isOpen && (
                        <ul tabIndex={0} className="dropdown-content menu bg-bg p-2 shadow text-white w-64">
                            <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Discord</Link></li>
                            <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Twitter</Link></li>
                        </ul>
                    )}
                    </div>
                        {/* About */}
                        <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                        <p>About</p> <GoChevronDown className="h-[24px] mt-1  cursor-pointer"/>
                    </div> 
                    {isOpen && (
                        <ul tabIndex={0} className="dropdown-content menu bg-bg p-2 shadow text-white w-64">
                        <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Faqs</Link></li>
                        <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Analytics</Link></li>
                        </ul>
                    )}
                    </div>
                            {/* More */}
                        <div className="dropdown dropdown-hover">
                            <div className="cursor-pointer select-none flex flex-row gap-2" onClick={toggleDropdown} onMouseEnter={() => setIsOpen(true)}>
                                <p>More</p> <GoChevronDown className="h-[24px] mt-1  cursor-pointer"/>
                            </div> 
                            {isOpen && (
                                <ul tabIndex={0} className="dropdown-content menu bg-bg p-2 shadow text-white w-64">
                                <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Docs</Link></li>
                                <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Fair Launch</Link></li>
                                <li><Link className="hover:bg-header rounded-none hover:text-bg" href="Lend">Stats</Link></li>

                                </ul>
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

