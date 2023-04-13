"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home(){
    return(
        
        <div>
            <div className="pt-10 px-7 hidden md:block lg:px-32 bg-center bg-cover bg-no-repeat sm:max-w-full h-[500px] lg:h-[700px] bg-blue-200 " style={{ backgroundImage: "url('/images/backgroundImage3.png')" }}>
                    <div className=" container flex flex-col gap-16 xl:gap-10 mx-auto ">
                        
                        <div className=" lg:text-[56px] text-[26px] font-bold text-center ">
                            <p className='font-medium'>Use your NFT collection as collateral <span className='font-bold'>for a crypto loan</span></p>
                        </div>


                        <div className="font-semibold flex  flex-row text-[17px] items-center justify-between md:justify-center md:gap-24 lg:gap-40 xl:gap-64">
                            <motion.button  whileHover={{ scale: 1.05 }} className="border-header px-3 py-5 sm:px-8  bg-bg text-white leading-[24.2px] rounded-sm tracking-wider"><Link href="/Loan">Need a Loan</Link></motion.button>

                            <motion.button  whileHover={{ scale: 1.05 }} className=" bg-header px-3 py-5 sm:px-8 text-bg leading-[24.2px] rounded-sm tracking-wider"><Link href="/Lend">Want to Lend</Link></motion.button>
                        </div>
                    </div>
            </div>
            
            {/* mobile */}
            <div className=" px-7 pt-10 md:hidden bg-center bg-cover bg-no-repeat max-w-full h-[370px] "> 

                <div className="  mx-auto ">
    
                    <div className="text-[26px] pb-16 font-bold text-center">
                            <p className='pb-10'>Use your NFT collection as collateral for a crypto loan</p>
                            <div className="font-semibold flex gap-2  flex-col text-[17px] items-center justify-center">
                            <motion.button  whileHover={{ scale: 1.05 }} className="border-header w-40 px-3 py-5 sm:px-8  bg-bg text-white leading-[24.2px] rounded-sm tracking-wider"><Link href="/Loan">Need a Loan</Link></motion.button>

                            <motion.button  whileHover={{ scale: 1.05 }} className=" bg-header px-3 w-40 py-5 sm:px-8 text-bg leading-[24.2px] rounded-sm tracking-wider"><Link href="/Lend">Want to Lend</Link></motion.button>
                        </div>
                    </div>


       
                </div>

            </div>
                
         </div>
                    
    )
}