import Image from "next/image"



export default function TvlDash(){
    return(
       <div>

    <div className=" md:rounded-t-[100px] bg-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7 lg:px-32 py-20">
        {/* firstbox */}
        <div className=" bg-bg  border border-pinkBg gap-2 p-5 rounded-lg shadow-slate-700 h-auto md:h-auto flex flex-col justify-between row-span-2 md:row-span-1">
                   
                        <div>
                            <h1 className=" text-header font-bold">Deposit and Borrow Total Value Locked (TVL)</h1>
                            <h1 className=" text-lg text-white font-bold">116,689.91ETH</h1>
                        </div>
                        <div className="flex flex-col gap-3 ">
                        <div className="flex gap-20 justify-between ">
                            <div>
                                <span className="text-sm text-gray-400">Reserved ETH</span>
                                <div className="flex gap-[5px]">
                                    <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1  className="text-white font-bold">70,982.87</h1>
                                </div>
                            </div>

                            <div>
                                <span className="text-sm text-gray-400">Available ETH</span>
                                <div className="flex gap-[5px]">
                                    <Image   src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1  className="text-white font-bold">70,982.87</h1>
                                </div>
                            </div> 
                        </div>

                        <div className="flex justify-between border-b pb-4 ">
                            <div>
                                <span className="text-sm text-gray-400">Total borrowed</span>
                                <div className="flex gap-[5px]">
                                    <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1 className="text-white font-bold">70,982.87</h1>
                                </div>
                            </div>

                            <div>
                                <span className="text-sm text-gray-400">NFT Collaterals</span>
                                <div className="flex gap-[5px]">
                                    <Image   src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1 className="text-white font-bold">70,982.87</h1>
                                </div>
                            </div> 
                        </div>
                    
                        <div className="flex justify-between ">
                            <div>
                                <span className="text-sm text-gray-400">Auctionable Debt</span>
                                <div className="flex gap-[5px]">
                                    <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1 className="text-white font-bold">0</h1>
                                </div>
                            </div>

                            <div>
                                <span className="text-sm text-gray-400">Floating Losses</span>
                                <div className="flex gap-[5px]">
                                    <Image   src="/images/eth.svg" alt="eth" width="20" height={20}/>
                                    <h1 className="text-white font-bold">0</h1>
                                </div>
                            </div> 
                        </div>
                    </div>

    </div>

    {/* secondbox */}
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-1 gap-4">
        <div className=" bg-bg border border-pinkBg h-auto md:h-auto gap-2 p-5 rounded-lg flex flex-col justify-between">
                            <h1 className=" text-header font-bold">ETH Deposit APR</h1>
                            <div className="flex justify-between items-center border-b pb-3">
                                <h1 className=" text-lg text-green-600 font-bold">9.78%</h1>
                                <button className=" rounded-lg border border-header hover:text-pink-700 w-28 p-1 px-2 text-header">Deposit ETH</button>
                            </div>
                            <div className=" text-sm">
                                <div className="text-white flex justify-between">
                                    <span>Interest APR <span className=" text-gray-500">(Paid in ETH)</span></span>
                                    <div className="flex gap-[5px] items-center">
                                            <Image   src="/images/eth.svg" className="rounded-full" alt="eth" width="15" height="15"/>
                                            <h1 className="text-white font-bold text-xs">6.95%</h1>
                                    </div>
                                </div>
                                <div className="text-white flex justify-between">
                                    <span>Reward APR<span className=" text-gray-500">(Paid in SAGE)</span></span>
                                    <div className="flex gap-[5px] items-center">
                                            <Image   src="/images/eth.svg" className="rounded-full" alt="eth" width="15" height="15"/>
                                            <h1 className="text-white font-bold text-xs">1.95%</h1>
                                    </div>
                                </div>
                            </div>
                        
                </div>

                {/* thirdbox */}
                    <div className="flex flex-col border border-pinkBg gap-2 p-5 rounded-lg h-auto justify-between">
                        <h1 className=" text-header font-bold">ETH Borrow APR</h1>
                        <div className="flex justify-between items-center border-b pb-3">
                            <h1 className=" flex items-center gap-[5px] text-lg text-green-600 font-bold">9.78%  <span className="text-sm">(paid)</span></h1>
                            <button className=" rounded-lg border border-header hover:text-pink-700 w-28 p-1 px-2 text-header">Borrow ETH</button>
                        </div>
                        <div className="text-sm">
                            <div className="text-white flex justify-between">
                                <span>Interest APR <span className=" text-gray-500">(Paid in ETH)</span></span>
                                <div className="flex gap-[5px] items-center">
                                        <Image   src="/images/eth.svg" className="rounded-full" alt="eth" width="15" height="15"/>
                                        <h1 className="text-white font-bold text-xs">29.95%</h1>
                                </div>
                            </div>
                            <div className="text-white flex justify-between">
                                <span>Reward APR<span className=" text-gray-500">(Earned in SAGE)</span></span>
                                <div className="flex gap-[5px] items-center">
                                        <Image   src="/images/eth.svg" className="rounded-full" alt="eth" width="15" height="15"/>
                                        <h1 className="text-white font-bold text-xs">15.95%</h1>
                                </div>
                            </div>
                        </div>
                    </div> 
            
        </div>

    <div className="grid grid-rows-2 md:row-span-1 md:grid-rows-1 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1 gap-4">

        {/* fourth box */}
        <div className="flex-col bg-bg border border-pinkBg gap-2 p-5 rounded-lg h-auto flex justify-between">
            
                        <div >
                            <h1 className=" text-header font-bold">SAGE Locking APR</h1>
                            <span className="text-white font-light">Reward APR<span className=" text-gray-500">(Paid in ETH)</span></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className=" text-lg text-green-600 font-bold">9.78%</h1>
                            <button className=" rounded-lg border border-header hover:text-pink-700 w-28 p-1 px-2 text-header">Stake SAGE</button>
                        </div>

        </div>
        <div className="flex justify-between border border-pinkBg flex-col bg-bg gap-2 p-5 rounded-lg h-auto ">
                        <div >
                            <h1 className=" text-header font-bold">Liquidity Mining APR</h1>
                            <span className="flex gap-[5px] text-sm text-white font-light">Reward APR<span className=" text-gray-500">Earned in SAGE</span></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className=" text-lg text-green-600 font-bold">45.78%</h1>
                            <button className=" rounded-lg border border-header hover:text-pink-700 w-28 p-1 px-2 text-header">Stake LPs</button>
                        </div> 
        </div>
    </div>
</div>



    </div>
    )
}