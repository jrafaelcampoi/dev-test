import Seta from '@/assets/seta.png'
import Seta2 from '@/assets/seta2.png'
import Image from "next/image";

export default function Setas() {
    return (
        <div className='flex mt-[2rem] max-md:mt-[5vw] pb-[6rem] cursor-pointer'>
            <div className='w-[150px] h-[44px] mr-5 ml-16 opacity-60 hover:duration-500 hover:opacity-100'>
                <Image src={Seta} />
            </div>
            <div className='w-[150px] h-[45px] opacity-60 hover:duration-500 hover:opacity-100'>
                <Image src={Seta2} />
            </div>
        </div>
    )
}