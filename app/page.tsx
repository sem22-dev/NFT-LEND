import Navbar from "./Navbar"
import Landing from "./Landing"
import Process from "./Process/page"
import PreLoader from "./PreLoader"
import TvlDash from "./tvl/tvl"
import { Poppins } from '@next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['300', '400', '600', '700'],
})

export default function Home() {
  return (
    
       <main className={poppins.className}>
          {/* <PreLoader /> */}
           <Landing/>
           <TvlDash />
           <Process />
       </main>
  
  )
}
