// import Navbar from "./Navbar/Navbar"
import Landing from "./LandingPage/Landing"
import Process from "./Process/page"
// import PreLoader from "./preloader/PreLoader"
import TvlDash from "./tvl/tvl"
import Footer from "./footer/footer"
import Faqs from "./faqs/faqs"


export default function Home() {
  return (
    
       <main className="font-poppins">
          {/* <PreLoader /> */}
           <Landing/>
           <TvlDash />
           <Process />
           <Faqs />
           <Footer />
       </main>
  
  )
}
