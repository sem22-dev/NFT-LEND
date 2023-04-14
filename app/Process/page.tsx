



export default function Process(){
    return(
        <div className="flex flex-col w-[100%] bg-bg h-[100%] py-20 sm:pt-30 px-7 lg:px-32">

            <div className=" md:px-16 flex flex-col gap-5 items-center justify-center text-center">
                    <div className=" text-white lg:text-[48px] text-[21px] sm:text-[24px]">
                        <h1>The process is <span className="lg:text-[48px] text-[21px] sm:text-[24px] font-semibold" >quick and Easy</span></h1>
                    </div>

                    <div className="text-white text-[12px] sm:text-[15px] lg:text-[20px] md:px-10">
                        <p>SageFi has emerged as the top-notch liquidity protocol for 
                        non-fungible tokens (NFTs), granting NFT holders the leverage to secure cryptocurrency loans from lenders by 
                        pledging their NFTs as collateral.</p>
                    </div>
            </div>
                    
                <div className="mx-auto md:text-lg my-10 md:my-20 w-[226px] inline-flex rounded-lg border border-header font-bold p-[2px]">
                    <button
                        className="bg-header inline-block rounded-md px-4 py-2 text-sm text-bg hover:text-gray-700 focus:relative"
                    >
                        BORROWERS
                    </button>

                    <button
                        className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                    >
                        LENDERS
                    </button>
                </div>

           
            
                <div className="flex flex-row justify-center gap-5 lg:gap-20 items-center mb-20">
                    
                    <div className="text-white text-24px lg:text-[54px] sm:text-[30px] font-bold ">
                        <h1 className="pb-10"><span className="font-light">List your</span> NFT</h1>
                        <p className=" font-normal w-[190px] sm:w-[500px] text-primary text-[16px] text-left sm:text-[25px]">
                            The process starts with listing your NFT and defining the loan's terms.
                            After that, other users will make loan offers to you
                        </p>
                    </div>

                    <div className="w-[200px] sm:w-[400px] lg:w-[300px]">
                    <img src="/images/1.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none " />
                    </div>
                </div>

                <div className=" flex flex-row-reverse justify-center  gap-5 lg:gap-20 items-center mb-20">
                    
                    <div className="text-white text-24px lg:text-[54px] sm:text-[30px] font-bold ">
                        <h1 className="pb-10"><span className="font-light">Pick best</span> loan offer</h1>
                        <p className=" font-normal w-[190px] sm:w-[500px] text-primary text-[16px] text-left sm:text-[25px]">
                        Upon accepting a loan offer, your NFT is secured in an escrow smart contract, and the lender transfers wETH/DAI/USDC directly to your wallet.
                        </p>
                    </div>

                    <div className=" w-[200px]  sm:w-[400px] lg:w-[300px]">
                    <img src="/images/2.png" alt="..." className="shadow rounded max-w-full h-auto  border-none" />
                    </div>
                </div>

                <div className=" flex flex-row justify-center  gap-5 lg:gap-20 items-center mb-20">
                    
                    <div className= "  text-white text-24px lg:text-[54px] sm:text-[30px] font-bold ">
                        <h1 className="pb-10"><span className="font-light">Repay Loan,</span> get NFT back.</h1>
                        <p className=" font-normal w-[190px] sm:w-[500px] text-primary text-[16px] text-left sm:text-[25px]">
                        When you repay your loan on time, your NFT will be automatically returned to your wallet.
                        </p>
                    </div>

                    <div className="w-[200px] sm:w-[400px] lg:w-[300px]">
                    <img src="/images/3.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none " />
                    </div>
                </div>

        <div className=" mt-1 mx-auto flex gap-4 md:gap-6">
          
            <div className=" w-30 md:w-60">
            <a
            className=" bg-header group relative inline-flex items-center overflow-hidden rounded border border-transparent px-8 py-3 text-bg focus:outline-none focus:ring "
            href="/download"
            >
            <span
                className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
            >
                <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
                </svg>
            </span>

            <span className="text-sm md:text-lg font-medium transition-all group-hover:ml-4">
                Get started
            </span>
            </a>
            </div>

            <div className="w-100 md:w-60">
            <a
            className=" group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-primary focus:outline-none focus:ring"
            href="/download"
            >
            <span
                className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
            >
                <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
                </svg>
            </span>

            <span className=" text-sm md:text-lg font-medium transition-all group-hover:ml-4">
                Learn More
            </span>
            </a>

            </div>

           
        </div>
</div>
        
        
    )
}