import Image from "next/image"



export default function TvlDash(){
    return(
       <div>

<div className=" h-screen mt-64">
            <div className="flex flex-col gap-2 mx-auto p-5 shadow-lg  shadow-slate-700 w-[350px] h-[293px]">
                <h1 className=" text-blue-400 font-bold">Deposit & Borrow TVL</h1>
                <h1 className=" text-lg text-white font-bold">116,689.91ETH</h1>
                <div className="flex flex-col gap-3 pb-8 border-b-2">
                 <div className="flex justify-between">
                    <div>
                        <span className=" text-gray-400">Reserved ETH</span>
                        <div className="flex gap-[5px]">
                            <Image src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1  className="text-white">70,982.87</h1>
                        </div>
                    </div>

                    <div>
                        <span className=" text-gray-400">Available ETH</span>
                        <div className="flex gap-[5px]">
                            <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1  className="text-white">70,982.87</h1>
                        </div>
                    </div> 
                 </div>

                 <div className="flex justify-between">
                    <div>
                        <span className=" text-gray-400">Total borrowed</span>
                        <div className="flex gap-[5px]">
                            <Image src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1 className="text-white">70,982.87</h1>
                        </div>
                    </div>

                    <div>
                        <span className=" text-gray-400">NFT Collaterals</span>
                        <div className="flex gap-[5px]">
                            <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1 className="text-white">70,982.87</h1>
                        </div>
                    </div> 
                 </div>
            </div>
            <div className="flex justify-between ">
                    <div>
                        <span className=" text-gray-400">Auctionable Debt</span>
                        <div className="flex gap-[5px]">
                            <Image src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1 className="text-white">70,982.87</h1>
                        </div>
                    </div>

                    <div>
                        <span className=" text-gray-400">Floating Losses</span>
                        <div className="flex gap-[5px]">
                            <Image  src="/images/eth.svg" alt="eth" width="20" height={20}/>
                            <h1 className="text-white">70,982.87</h1>
                        </div>
                    </div> 
                 </div>
            </div>
            
            
        </div>



       </div>
       )
}