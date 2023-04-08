"use-client"

import { collections, offers } from '../../Data'


export default function Lend(){
    return( 
        <div className=" text-Pink-900 h-screen lg:p-20 px-0 py-20   w-full items-center flex justify-center relative pb-[400px] ">
            <div className="container flex lg:flex-row flex-col px-02">
                    <div className="flex flex-col px-20">
                        <div className=" lg:text-[45px] font-bold text-[23px] lg:pb-0 ">
                            <h1>Lend</h1>
                        </div>
                        <div className="lg:w-[500px] w-[300px] lg:pb-0 pb-[20px]">
                            <p>Make loan offers on NFT collections. If you're not paid on time, you get to keep the NFT.</p>
                        </div>
                    </div>



                    <div className="container lg:w-[500px] w-[400px] h-[150px] bg-gray-100 lg:p-0">
                        <div className="flex flex-col px-20 pt-1">
                            <div className=" text-[20px] font-bold pt-[20px]">
                                <h1>How it works</h1>
                            </div>
                            <div className="lg:w-[400px] relative text-[13px] w-[300px]">
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

               {/* <div>
               {offers.map(({percentage}) => {
                    return (
                        <div className="skills__bar">
                            <span className="skills__percentage" style={{width:`${percentage}%`}}>
                            </span>
                        </div>
                );
            })}
               </div> */}

            </div>

            <div className='container flex flex-row px-20 py-10 gap-[400px] '>
                <div className="flex flex-start items-center rounded-[50px] overflow-hidden border-purple-50 border-2">
                    <input type="text" placeholder="Search Collections..." className="w-[290px] px-4 py-2 focus:outline-none bg-purple-50 border " />
                </div>
               <div className='flex flex-row gap-2'>
                   <div className='pt-2'><p>Sort by:</p></div>

                   <div className="flex flex-end items-center overflow-hidden border-gray-500 border-2 rounded-[50px]">
                        <input type="text" placeholder="Most Recent Added Collection " className="w-[290px]  px-4 py-2 focus:outline-none border " />
                    </div>
               </div>
            </div>

            <div className='container flex px-20 pt-10 flex-col pb-[400px]'>

                <div className='flex flex-row justify-around gap-20 bg-purple-200 w-[100%] h-[40px] align-center items-center rounded-sm ml-0 border-2 border-gray-800 font-bold text-[13px]'>
                        <div className='mr-20'>
                            <h2>Collections</h2>
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/Loan</h2>
                        </div>
                </div>

                <div className='flex flex-row justify-around gap-20 w-[100%] h-[80px] align-center items-center ml-0 border-2 border-gray-800 border-t-0 border-b-gray-400'>
                        <div className='mr-20 mr'>
                            <h2>Collections</h2>
                           
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/loan</h2>
                        </div>
                </div>

                <div className='flex flex-row justify-around gap-20 w-[100%] h-[80px] align-center items-center ml-0 border-2 border-gray-800 border-t-0 border-b-gray-400'>
                        <div className='mr-20'>
                            <h2>Collections</h2>
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/loan</h2>
                        </div>
                </div>

                <div className='flex flex-row justify-around gap-20 w-[100%] h-[80px] align-center items-center ml-0 border-2 border-gray-800 border-t-0 border-b-gray-400'>
                        <div className='mr-20'>
                            <h2>Collections</h2>
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/loan</h2>
                        </div>
                </div>
                <div className='flex flex-row justify-around gap-20 w-[100%] h-[80px] align-center items-center ml-0 border-2 border-gray-800 border-t-0 border-b-gray-400'>
                        <div className='mr-20'>
                            <h2>Collections</h2>
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/loan</h2>
                        </div>
                </div>
                <div className='flex flex-row justify-around gap-20 w-[100%] h-[80px] align-center items-center ml-0 border-2 border-gray-800 border-t-0 border-b-gray-50'>
                        <div className='mr-20'>
                            <h2>Collections</h2>
                        </div>
                        <div className='ml-20'>
                            <h2>Available Pool</h2>
                        </div>
                        <div>
                            <h2>Highest Loan Offer</h2>
                        </div>
                        <div>
                            <h2>Loan Duration</h2>
                        </div>
                        <div className='mr-20'>
                            <h2>% Return/loan</h2>
                        </div>
                </div>
                    
            </div>
                     {/* <div>
                        {collections.map(({name, token, floor, pool, loan_available, loan_offer, last_loan, duration, returns, apy}, index) => {
                            return (
                              <div className='relative flex flex-row gap-2 justify-around w-[100%] collection-title'>
                                    <h1 className='font-bold'>{name}</h1>
                                <div className='line'></div>
                              </div>
                               
                        );
                        })}
                    </div> */}
          
      </div>

    )
}