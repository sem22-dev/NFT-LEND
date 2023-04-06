import Navbar from "./Navbar"
import Landing from "./Landing"
import Process from "./Process/page"

export default function Home() {
  return (
    
       <main className="absolute top-[-10px] w-full">
           <Landing/>
           <Process />
       </main>
  
  )
}
