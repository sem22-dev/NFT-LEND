import Navbar from "./Navbar"
import Landing from "./Landing"
import Process from "./Process/page"
import PreLoader from "./PreLoader"
import TvlDash from "./tvl/tvl"

export default function Home() {
  return (
    
       <main className="w-full">
          {/* <PreLoader /> */}
           <Landing/>
           <TvlDash />
           <Process />
       </main>
  
  )
}
