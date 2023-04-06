import Image from 'next/image';
import bgImg from '../public/images/backgroundImage.png';

export default function Home(){
    return(
        
        <div className=' w-[1995] h-[1066]'>
                {/* <Image src={bgImg} alt="img" /> */}
                <div className="container flex relative flex-col p-8 top-[100px]">
                    <div className="items-center flex justify-center text-[56px] font-bold text-center max-w-[1300px] ml-[99px]">
                        <h1>Use your NFT collection as collateral for a crypto loan</h1>
                    </div>


                    <div className="relative flex flex-row py-22 ml-[100px] items-center justify-center gap-[300px] top-[50px]">
                        <button className="w-[160px] h-[63px] top-[161px] bg-gray-800 text-white text-[15px] leading-[24.2px] font-medium rounded-sm tracking-wider">Need a Loan</button>
                        <button className="w-[160px] h-[63px] top-[161px] text-black  text-[15px] ml-[100px] leading-[24.2px] font-medium rounded-sm tracking-wider border-gray-800 bg-transparent border-2">Want to lend?</button>
                    </div>


                </div>
        </div>

        
    )
}