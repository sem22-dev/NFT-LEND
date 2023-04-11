"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home(){
    return(
        
        <div>
            <div className="pt-10 px-7 lg:px-16 bg-center bg-cover bg-no-repeat sm:max-w-full h-[500px] lg:h-[700px] bg-none " style={{ backgroundImage: "url('/images/backgroundImage3.png')" }}>
                    <div className=" container flex flex-col gap-16 xl:gap-10 mx-auto ">
                        
                        <div className=" lg:text-[56px] text-[26px] font-bold text-center ">
                            <p className='font-medium'>Use your NFT collection as collateral <span className='font-bold'>for a crypto loan</span></p>
                        </div>


                        <div className="font-semibold flex  flex-row text-[17px] items-center justify-between md:justify-center md:gap-24 lg:gap-40 xl:gap-64">
                            <motion.button  whileHover={{ scale: 1.05 }} className="border-header px-3 py-5 sm:px-8  bg-bg text-white leading-[24.2px] rounded-sm tracking-wider">Need a Loan</motion.button>

                            <motion.button  whileHover={{ scale: 1.05 }} className=" bg-header px-3 py-5 sm:px-8 text-bg leading-[24.2px] rounded-sm tracking-wider">Want to lend?</motion.button>
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