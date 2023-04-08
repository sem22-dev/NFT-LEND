"use-client"

import { offers } from '../../Data'


export default function Lend(){
    return(
        <div className=" text-Pink-900 h-screen p-20 w-full justify-center relative">
            <div className="container flex flex-row px-02">
                    <div className="flex flex-col px-20">
                        <div className=" text-[45px] font-bold">
                            <h1>Lend</h1>
                        </div>
                        <div className="w-[500px]">
                            <p>Make loan offers on NFT collections. If you're not paid on time, you get to keep the NFT.</p>
                        </div>
                    </div>



                    <div className="container w-[500px] h-[150px] bg-gray-100">
                        <div className="flex flex-col px-20 pt-1">
                            <div className=" text-[20px] font-bold pt-[20px]">
                                <h1>How it works</h1>
                            </div>
                            <div className="w-[400px] relative text-[13px] ">
                                <p>Borrowers lock in NFTs from collections to receive $SOL, Lenders are repaid at the end of the loan, plus interest. If borrowers fail to repay, lenders keep the NFT.</p>
                                
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-row gap-8 px-[70px] pt-[50px] line ">
            <div className="font-bold ">
                    <h3>Make Offers</h3>
                </div>

                <div className="font-light">
                    <h3>Offers made</h3>
                </div>

               <div>
               {offers.map(({percentage}) => {
                    return (
                        <div className="skills__bar">
                            <span className="skills__percentage" style={{width:`${percentage}%`}}>
                            </span>
                        </div>
                );
            })}
               </div>

            </div>
      </div>

    )
}