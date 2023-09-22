import Image from "next/image"
import CCLogo from '@/assets/cclogo2.png'
import LogoCon from '@/assets/bs-logo.png'

export default function Main() {
    return (
        <>
            <div id="banner4" className=" text-white text-center gap-6 bg-no-repeat bg-cover bg-center select-none w-[100vw] h-[100vh] items-center justify-center m-[0 auto] flex flex-col">
                <Image className="w-[174px] h-[143px]" src={LogoCon} />
                <h1 className=" text-[2.5vw] max-lg:text-[4vw] max-md:text-[5vw] leading-tight">VIVA O <b className=" font-semibold bg-gold-light">HOJE</b>, COM A<br /> SEGURANÇA DO SEU<br /> PATRIMÔNIO</h1>
                <span className="max-md:text-[13px]">Apartamentos com 120 a 150m² no Perequê, Porto Belo</span>
                <a className="uppercase hover:bg-gold-light hover:duration-1000 tracking-widest font-semibold border-4 rounded-3xl pl-5 pr-5 pb-2 pt-2" href="/empreendimentos">Explore</a>
            </div>        
            <div className="cursor-pointer hover:font-semibold hover:duration-700 tracking-wider flex justify-end text-white uppercase font-light items-center mt-[-62px] pr-[40px]">
                <p>desenvolvido por</p>
                <Image className="w-[32px] h-[31px] ml-[10px]" src={CCLogo} />
            </div>
        </>
    )
}