import Image from 'next/image';
// import bgImg from '../public/images/backgroundImage.png';

export default function Home(){
    return(
        
        <div>
            <div className="pt-10 px-7 lg:px-16 bg-center bg-cover bg-no-repeat sm:max-w-full h-[500px] lg:h-[700px] bg-none " style={{ backgroundImage: "url('/images/backgroundImage3.png')" }}>
                    <div className=" container flex flex-col gap-8 mx-auto ">
                        
                        <div className=" lg:text-[56px] text-[26px] font-bold text-center ">
                            <p className='font-medium'>Use your NFT collection as collateral <span className='font-bold'>for a crypto loan</span></p>
                        </div>


                        <div className="flex flex-row  items-center justify-center md:gap-[200px]">
                            <button className=" hover:bg-bg3 border border-gray-200  lg:w-[160px] w-[120px] h-[43px] lg:h-[63px] lg:top-[161px] top-[11px] bg-bg text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Need a Loan</button>

                            <button className=" hover:bg-header hover:text-bg hover:border-transparent w-[120px] h-[43px] lg:w-[160px] lg:h-[63px] lg:top-[161px] text-black  text-[15px] ml-[100px] leading-[24.2px] font-medium rounded-sm tracking-wider border-gray-800 bg-white border-2">Want to lend?</button>
                        </div>
                    </div>
            </div>
            
            {/* mobile */}
            {/* <div className=" pt-10 md:hidden bg-center bg-cover bg-no-repeat max-w-full h-[370px]  " style={{ backgroundImage: "url('/images/backgroundImage3.png')" }}> 

                <div className="  mx-auto ">
    
                    <div className="text-[16px] pb-16 w-full font-bold text-center">
                            <p className='pb-10'>Use your NFT collection as collateral for a crypto loan</h1>
                        <div className="flex flex-row  items-center justify-center gap-[100px]">
                            <button className="w-[100px] h-[38px] text-white text-[12px]  bg-gray-800">Need a Loan</button>

                            <button className="w-[110px] h-[38px] text-[12px] border-gray-800 bg-transparent border-2">Want to lend</button>
                        </div>
                    </div>


       
                </div>

            </div> */}
                
         </div>
                    
    )
}