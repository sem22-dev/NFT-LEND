export default function Process(){
    return(
        <div className="flex flex-col w-[100%] bg-gray-800 h-[100%] lg:p-20 p-8">

            <div className="flex flex-col items-center justify-center text-center">
                    <div className="color-code-1 lg:text-[54px] text-[28px] lg:leading-[129px] leading-[62px] font-bold">
                        <h1>The process is pretty simple</h1>
                    </div>

                    <div className="text-white lg:w-[800px] lg:text-[32px] w-[400px]">
                        <p>ArtLend has emerged as the top-notch liquidity protocol for 
                        non-fungible tokens (NFTs), granting NFT holders the leverage to secure cryptocurrency loans from lenders by 
                        pledging their NFTs as collateral.</p>
                    </div>
            </div>


        <div className="flex flex-row container p-20 gap-5 items-center justify-center">
            <div className="color-code-1 leading-10 text-[24px] cursor-pointer">
                <h2>Borrowers</h2>
            </div>
            <div className="text-[24px] text-gray-500 cursor-pointer">
                <h2>Lenders</h2>
            </div>
        </div>
        </div>
    )
}