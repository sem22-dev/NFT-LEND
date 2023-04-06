import Image from 'next/image';
import bgImg from '../public/images/backgroundImage.png';

export default function Home(){
    return(
        
        <div className=" bg-center bg-contain bg-no-repeat max-w-full  h-[980px] pt-56 relative top-0"
        style={{ backgroundImage: "url('/images/backgroundImage.png')" }}>
                <div className="container flex flex-col mx-auto ">
                    <div className="items-center flex justify-center text-[56px] font-bold text-center ">
                        <h1>Use your NFT collection as collateral for a crypto loan</h1>
                    </div>
                    <div className="flex flex-row py-22 mt-10 items-center justify-center gap-[200px]">
                        <button className="w-[160px] h-[63px] top-[161px] bg-gray-800 text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Need a Loan</button>
                        <button className="w-[160px] h-[63px] top-[161px] text-black  text-[15px] ml-[100px] leading-[24.2px] font-medium rounded-sm tracking-wider border-gray-800 bg-transparent border-2">Want to lend?</button>
                    </div>
                </div>
        </div>

        
    )
}