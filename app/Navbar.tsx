import Link from "next/link"
import { useState } from "react"

import { GoChevronDown, GoChevronUp } from 'react-icons/go'

export default function Navbar(){
    // const [dropdown, setDropdown ] = useState(false);
    return(
        <div className='w-[100%] z-10 relative top-[110px]'>
           <div className="flex mx-auto justify-between items-center container py-6 px-20">
                <div className="text-[45px] font-light ">ArtLend</div>

                <div className="flex gap-16 text-[18px]">
                    <Link href="/Process">Our Process</Link>
                    <div className="flex flex-row gap-2" >
                        <Link href="/Lend">Lend </Link> 
                        <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/>
                    </div>
                    {/* <Link href="/Lend" onClick={() => setDropdown((prev) => !prev)}>Lend  {!dropdown ? (
                        <AiFillCaretDown/>
                    ): (
                        <AiFillCaretUp />
                    )
                }
                    </Link>  */}
                    <div className="flex flex-row gap-2" >
                        <Link href="/Lend">Loan </Link> 
                        <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/>
                    </div>
                    <div className="flex flex-row gap-2" >
                        <Link href="/Lend">About</Link> 
                        <GoChevronDown className="h-[24px] mt-1 cursor-pointer"/>
                    </div>
                    <Link href="/Blog">Blogs</Link>
                </div>

                <div>
                    <button className="w-[150px] h-[63px] left-[1213px] top-[121px] bg-gray-800 text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Get Started</button>
                </div>
           </div>
        </div>
    )
}