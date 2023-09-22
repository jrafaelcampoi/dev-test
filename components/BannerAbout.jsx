import Image from "next/image"
import Banner from '@/assets/banner-about.png'

export default function BannerAbout() {
    return (
        <>
            <div id="banner3" className="select-none flex items-center bg-cover text-center justify-center bg-top bg-no-repeat bg-primary-gray bg-fixed w-[100%] h-[100vh] bg-img-[url('../assets/banner-about.png')] ">
                <h1 className=" max-md:text-[6vw] uppercase text-white font-bold text-[5vw]">Construímos <br /> há 15 anos o <b className=" text-primary-gold">futuro</b><br /> da sua família</h1>
            </div>
        </>
    )

}