import Navbar from "./Navbar"
import Landing from "./Landing"

export default function Home() {
  return (
    
       <main className="bg-center bg-cover bg-no-repeat relative w-[1495] h-[1077px]"
       style={{ backgroundImage: "url('/images/backgroundImage.png')" }}>
           <Navbar />
           <Landing/>
       </main>
  
  )
}
