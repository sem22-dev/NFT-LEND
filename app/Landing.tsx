import Image from 'next/image';
import bgImg from '../public/images/backgroundImage.png';

export default function Home(){
    return(
        
        <div>
            <div className=" bg-center bg-contain bg-no-repeat sm:max-w-full h-[600px] lg:h-[980px] lg:pt-56 top-0 sm:block hidden" style={{ backgroundImage: "url('/images/backgroundImage.png')" }}>
                    <div className=" container flex flex-col gap-8 mx-auto ">
                        
                        <div className=" sm:pt-40 lg:pt-0 items-center lg:px-20 px-20 lg:pb-0 flex justify-center lg:text-[56px] text-[26px] font-bold text-center ">
                            <h1>Use your NFT collection as collateral for a crypto loan</h1>
                        </div>


                        <div className="flex flex-row  items-center justify-center md:gap-[200px]">
                            <button className="lg:w-[160px] w-[120px] h-[43px] lg:h-[63px] lg:top-[161px] top-[11px] bg-gray-800 text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Need a Loan</button>

                            <button className=" w-[120px] h-[43px] lg:w-[160px] lg:h-[63px] lg:top-[161px] text-black  text-[15px] ml-[100px] leading-[24.2px] font-medium rounded-sm tracking-wider border-gray-800 bg-transparent border-2">Want to lend?</button>
                        </div>
                    </div>
            </div>
            
            <div className=" p-0 sm:hidden bg-center bg-contain bg-no-repeat max-w-full h-[365px]  " style={{ backgroundImage: "url('/images/mobileBG.png')" }}> 

            <div className="container relative lg:flex sm:flex flex md:flex flex-col mx-auto ">
    
                        <div className="absolute text-[16px] px-20 font-bold text-center py-20">
                            <h1>Use your NFT collection as collateral for a crypto loan</h1>
                        </div>


                        <div className="flex flex-row py-[100px] mt-10 items-center justify-center gap-[100px]">
                            <button className="w-[100px] h-[38px] text-white text-[12px]  bg-gray-800">Need a Loan</button>

                            <button className="w-[110px] h-[38px] text-[12px] border-gray-800 bg-transparent border-2">Want to lend</button>
                        </div>
                    </div>

            </div>
                
        </div>
                    
    )
}