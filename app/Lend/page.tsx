import Image from "next/image"
import Navbar from "../Navbar/Navbar"


export default function Lend(){
    return(
        
       <div className="py-10">
            <div className="px-7 md:px-16 font-poppins">
                <div className="py-10 text-center">
                    <h1 className="text-[40px] sm:text-[48px] font-extrabold">Provide a Loan and Reap the Rewards!</h1>
                    <p className=" text-gray-600 text-lg">
                        At the end of the loan term, you'll get your money back with interest. And if the borrower fails to repay, you'll be compensated with a valuable NFT that you can add to your collection.
                    </p>
                </div>
                {/* Searchbar */}
            
                <form className="flex items-center">   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative  sm:w-1/2 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 focus:outline-none focus:text-bg  text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-transparent border-2 border-gray-300  text-gray-900 text-lg focus:outline-none focus:border-header rounded-lg block w-full pl-10 p-2.5  dark:bg-header dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-header dark:focus:border-orange-500" placeholder=" Search Listed NFT Collections... " required />
                    </div>
                </form> 

                {/* for lg screen */}
                <div className=" hidden lg:flex flex-col p-5 shadow-squareShadow my-10">
                    <div className="flex border-b pb-4  text-gray-500 text-[16px] gap-10">
                        <h1 className=" w-[300px] ">Collections</h1>
                        <h1 className="  w-[180px]">Available Pool</h1>
                        <h1 className="  w-[180px]">Best Loan Offer</h1>
                        <h1 className="  w-[100px]">Duration</h1>
                        <h1 className=" w-[100px]">APY</h1>
                    </div>

                    <div className=" py-4 border-b flex  items-center text-black font-semibold text-[19px] gap-10">
                        <div className=" w-[300px]  flex items-center gap-4">
                            <Image src="/images/luffy.png" width="70" height="70" alt="nft" className="rounded-full" />
                            <h1>LUFFY <br /><span className="text-base flex items-center gap-1"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 4.75  <span className=" font-medium text-gray-600">floor</span></span></h1>
                        </div>
                        <div className=" w-[180px]">
                            <h1 className="flex  gap-1 items-center"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 981.9 </h1>
                            <span className="text-[14px] font-medium text-gray-500"><span className="text-black">943</span> loans available</span>
                        </div>
                        <div className=" w-[180px]">
                            <h1 className="flex  gap-1 items-center"><Image src="/images/ethereum.svg" alt="eth" height="12" width="15" className=" rounded-full" /> 3.90 </h1>
                            <span className="text-[14px] font-medium text-gray-500"><span className="text-black">3.75 ETH </span>latest loan</span>
                        </div>
                        <h1 className=" flex w-[100px]">16d</h1>
                        <h1 className=" w-[100px] text-green-700 ">160%</h1>
                        <button className="rounded-lg px-6 py-1 bg-header hover:border-transparent">Lend</button>
                    </div>

                </div>

                {/* For screens smaller than lg */}

                <div className=" p-4 lg:hidden border shadow-squareShadow my-10">
                    <div className="flex flex-col gap-0 border-b md:px-24 pb-4">
                        <div className="flex w-full justify-between sm:px-14   pb-4 items-center">
                        <div className="flex justify-start flex-col">
                                <h1 className=" text-gray-500 text-[16px] w-[150px] ">Collection</h1>
                                <h1 className="text-[19px] font-semibold ">LUFFY</h1>
                        </div>
                            <div className="flex flex-col justify-center items-end gap-1">
                                <Image src="/images/luffy.png" width="50" height="50" alt="nft" className="rounded-full" />
                                <span className="text-base font-semibold flex items-center gap-1"><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" /> 4.75  <span className=" font-medium text-gray-600">floor</span></span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between sm:px-14  pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Available Pool</h1>
                            <div className="flex flex-col items-end">
                                <h1 className="flex  gap-1 items-center font-semibold "><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" />81.9 </h1>
                                <span className="text-[14px] font-medium text-gray-500"><span className="text-black">943</span> loans available</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between sm:px-14  pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Best Loan Offer</h1>
                            <div className="flex flex-col items-end">
                                <h1 className="flex  gap-1 items-center font-semibold "><Image src="/images/ethereum.svg" alt="eth" height="12" width="12" className=" rounded-full" />3.90 </h1>
                                <span className="text-[14px] font-medium text-gray-500"><span className="text-black">3.75 ETH</span> latest loan</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-between sm:px-14  pb-4 ">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">Duration</h1>
                            <h1 className="flex font-semibold  gap-1 ">16d</h1>
                        </div>
                        <div className="flex w-full justify-between sm:px-14  pb-4">
                            <h1 className=" text-gray-500 text-[16px] w-[150px] ">APY</h1>
                            <h1 className="flex font-semibold text-green-700 gap-1 ">160%</h1>
                        </div>
                        <button className="rounded-lg mx-auto w-1/2 px-6 py-1 bg-header font-semibold hover:border-transparent">Lend</button>
                    </div>
                    
                </div>
                


        </div>
       </div>
    )
}


