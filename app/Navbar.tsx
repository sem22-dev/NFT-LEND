import Link from "next/link"

export default function Navbar(){
    return(
        <div className='flex gap-2 p-0 m-0 w-[100%] z-10'>
           <div className="container mx-auto flex justify-between items-center py-2">
                <Link href="/" className='text-[28px]'>VaultSwap</Link>
           </div>

           <div className="flex gap-2">
                <Link href="/Process">Our Process</Link>
                <Link href="/Lend">Lend</Link>
                <Link href="/Process">Loan</Link>
                <Link href="/Process">About</Link>
                <Link href="/Process">Blogs</Link>
           </div>
        </div>
    )
}