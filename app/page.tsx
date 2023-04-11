// import Navbar from "./Navbar/Navbar"
import Landing from "./LandingPage/Landing"
import Process from "./Process/page"
import PreLoader from "./preloader/PreLoader"
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
