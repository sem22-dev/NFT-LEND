import Navbar from "./Navbar"
import Landing from "./Landing"
import Process from "./Process/page"
import PreLoader from "./PreLoader"

export default function Home() {
  return (
    
       <main className="absolute top-[-10px] w-full">
          <PreLoader />
           <Landing/>
           <Process />
       </main>
  
  )
}
