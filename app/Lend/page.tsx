"use client"

import Image from "next/image"
import { useState } from "react";
import Link from "next/link";

export default function Lend(){

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    function handleLendClick() {
      setIsModalVisible(true);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
      }

    return(
        
       <div className="py-2">
            <div className="px-7 md:px-32 font-poppins">
                <div className="py-10 text-left">
                    <h1 className="text-[40px] sm:text-[48px] font-extrabold">Provide a Loan and Reap the Rewards!</h1>
                    <p className=" text-gray-600 text-lg">
                        At the end of the loan term, you'll get your money back with interest. And if the borrower fails to repay, you'll be compensated with a valuable NFT that you can add to your collection.
                    </p>
                </div>
                {/* Searchbar */}
                    <form className="flex items-center w-full">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="flex gap-2 items-center bg-transparent border-2 border-gray-300  text-gray-900 text-lg focus-within:border-header rounded-lg w-full p-2.5 lg:w-1/2">
                                <svg aria-hidden="true" className=" w-5 h-5 focus:outline-none focus:text-bg  text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <input type="text" id="simple-search" className="bg-transparent text-lg focus:outline-none w-full" placeholder=" Search Listed NFT Collections... " required />
                        </div>
                    </form> 

                {/* for lg screen */}
                <div className=" hidden lg:flex flex-col p-5 shadow-squareShadow my-10">
                    <div className="flex border-b pb-4  text-gray-500 text-[16px] lg:gap-5 xl:gap-5">
                        <h1 className=" lg:w-[250px] xl:w-[300px]  ">Collections</h1>
                        <h1 className="  lg:w-[150px] xl:w-[180px] ">Available Pool</h1>
                        <h1 className="  lg:w-[150px] xl:w-[180px] ">Best Loan Offer</h1>
                        <h1 className="  lg:[80px] xl:w-[100px] ">Duration</h1>
                        <h1 className=" lg:[80px] xl:w-[100px] ">APY</h1>
                    </div>

                    <div className=" py-4 border-b flex  items-center text-black font-semibold text-[19px] gap-5">
                        <div className=" w-[300px]   flex items-center gap-4">
                            <Image src="/images/luffy.png" width="70" height="70" alt="nft" className="rounded-lg" />
                            <h1>LUFFY <br /><span className="text-base flex items-center gap-1"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 4.75  <span className=" font-medium text-gray-600">floor</span></span></h1>
                        </div>
                        <div className=" w-[180px] ">
                            <h1 className="flex  gap-1 items-center"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 981.9 </h1>
                            <span className="text-[14px] font-medium text-gray-500"><span className="text-black">943</span> loans available</span>
                        </div>
                        <div className=" w-[180px] ">
                            <h1 className="flex  gap-1 items-center"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 3.90 </h1>
                            <span className="text-[14px] font-medium text-gray-500"><span className="text-black">3.75 ETH </span>latest loan</span>
                        </div>
                        <h1 className=" flex w-[100px] ">16d</h1>
                        <h1 className=" w-[100px]  text-green-700 ">160%</h1>
                        <button className="rounded-lg  px-6 py-1 bg-header text-white hover:text-black hover:bg-headerDark" onClick={handleLendClick}>Lend</button>

                        {/* Lending Modal */}
                        {isModalVisible && 
                        (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleCloseModal}>
                            <div className="bg-white p-0 w-[700px] rounded-lg shadow-lg" onClick={(event) => event.stopPropagation()}>
                                <div className="flex p-4 gap-8">
                                    <Image src="/images/luffy.png" alt="luffy" width={350} height={200} className=" bg-cover h-[400px]"/>
                                    <div className="w-full flex flex-col gap-2">
                                        <div className="flex justify-between p-1">
                                            <div className="flex flex-col gap-2">
                                                <h1 className="font-light  text-xl">NFT Info</h1>
                                                <div className="flex flex-col gap-0">
                                                    <h1 className="font-medium text-lg">#456789</h1>
                                                    <Link href="/" className="text-header font-medium text-base">One Piece</Link>
                                                </div>
                                            </div>


                                            {/* etherscan,opensea links and floor */}
                                            <div className="flex gap-3 flex-col items-center">
                                                <div className="flex gap-2">
                                                    <div className="tooltip tooltip-info font-light" data-tip="View on Etherscan.io">
                                                        <Link href="/"> 
                                                            <Image src="/images/etherscan.svg" alt="ether" width={25} height={25}/> 
                                                        </Link>
                                                    </div>
                                                    <div className="tooltip tooltip-info font-light" data-tip="View on Opensea.io">
                                                        <Link href="/"> 
                                                            <Image src="/images/opensea.svg" alt="ether" width={25} height={25}/> 
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="font-light flex flex-col items-end">
                                                    <h1 className="font-light text-gray-500 text-base">Floor</h1>
                                                    <h1 className="font-semibold">5 ETH</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex border-b justify-between w-full p-1 pb-2">
                                            <div className="flex flex-col">
                                                    <h1 className="font-light text-gray-500 text-base">APY</h1>
                                                    <h1 className="font-bold text-green-600 text-lg ">120%</h1>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                    <h1 className="font-light text-gray-500 text-base">Duration</h1>
                                                    <h1 className="font-bold text-lg ">30D</h1>
                                            </div>
                                        </div>
                                        {/* Offer amount input  */}
                                        <div className="flex flex-col gap-10 items-center">
                                            <div className="flex items-start justify-between">
                                                <div className="w-1/2">
                                                    <span className="text-md font-light text-gray-500">Offer Amount</span>
                                                    <div className="flex items-center rounded-lg border-2 border-transparent bg-gray-100 p-2 focus-within:text-headerDark focus-within:border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:border-blue-500 ">
                                                        <h1 className="  font-light  text-s">ETH</h1>
                                                        <input type="text" className="w-full tracking-widest bg-transparent valid:text-headerDark px-1 py-1 rounded-sm outline-none" />
                                                    </div>
                                                    <p className="text-xs font-light text-gray-400">Best Offer : 0.3 ETH</p>
                                                </div>
                                                <div className="items-end flex gap-4 flex-col">
                                                    <span className="text-md font-light text-gray-500">Total Interest</span>
                                                    <span className="text-lg font-bold">ETH 0.2</span>
                                                </div>
                                            </div>
                                            <button className="p-4 w-full bg-header hover:bg-headerDark text-white hover:text-black rounded-lg">Place Offer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                        }

                    </div>
                </div>

                {/* For screens smaller than lg */}

                <div className=" p-4 lg:hidden border shadow-squareShadow my-10">
                    <div className="flex flex-col gap-0 border-b md:px-24 pb-4">
                        <div className="flex w-full justify-between  pb-4 items-center">
                            <div className="flex justify-start flex-col">
                                    <h1 className=" text-gray-500 text-[16px] w-[150px] ">Collection</h1>
                                    <h1 className="text-[19px] font-semibold ">LUFFY</h1>
                            </div>
                            <div className="flex flex-col justify-center items-end gap-1">
                                <Image src="/images/luffy.png" width="50" height="50" alt="nft" className="rounded-lg" />
                                <span className="text-base font-semibold flex items-center gap-1"><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" /> 4.75  <span className=" font-medium text-gray-600">floor</span></span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Available Pool</h1>
                            <div className="flex flex-col items-end">
                                <h1 className="flex  gap-1 items-center font-semibold "><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" />81.9 </h1>
                                <span className="text-[14px] font-medium text-gray-500"><span className="text-black">943</span> loans available</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Best Loan Offer</h1>
                            <div className="flex flex-col items-end">
                                <h1 className="flex  gap-1 items-center font-semibold "><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" />3.90 </h1>
                                <span className="text-[14px] font-medium text-gray-500"><span className="text-black">3.75 ETH</span> latest loan</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Duration</h1>
                            <h1 className="flex font-semibold  gap-1 ">16d</h1>
                        </div>
                        <div className="flex w-full justify-between pb-4">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">APY</h1>
                            <h1 className="flex font-semibold text-green-700 gap-1 ">160%</h1>
                        </div>
                        <button className="rounded-lg mx-auto w-1/2 px-6 py-1 bg-header font-semibold hover:border-transparent" onClick={handleLendClick}>Lend</button>
                    </div>
                    
                </div>
                


        </div>
       </div>
    )
}


