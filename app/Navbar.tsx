import Link from "next/link"
import { useState } from "react"

import { GoChevronDown, GoChevronUp } from 'react-icons/go'

export default function Navbar(){
    // const [dropdown, setDropdown ] = useState(false);
    return(
        <div className=' z-10 relative pt-20 '>
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
    )
}