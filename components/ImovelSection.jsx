import Image from "next/image"
import Imovel from "@/assets/imovel-1.png"
import LogoCon from "@/assets/bs-logo.png"
import Icon1 from "@/assets/icon1.png"
import Icon2 from "@/assets/icon2.png"
import Icon3 from "@/assets/icon3.png"
import Icon4 from "@/assets/icon4.png"

export default function ImovelSection(props) {
    return (
        <>
            <article className="p-[3vw] max-md:pl-[5vw] max-md:pr-[5vw] max-md:pt-24">
                <div className="flex">
                    <div className=" flex h-[570px] max-w-[456px] ">
                        <div>
                            <div className="max-w-[130px] w-full h-full mr-0 max-h-[150px] ">
                                <Image src={LogoCon} />
                            </div>
                            <div className=" flex bg-black h-[440px] max-w-[480px] w-[90vw] ">
                                <div className="w-[150px] h-[420px] flex flex-col items-start justify-around">                    
                                    <div className="flex flex-col justify-center items-center w-full h-[100px]">
                                        <div className="w-[40px] h-[30px] mb-[12px]">
                                            <Image src={Icon1} />
                                        </div>
                                        <p className=" text-white">{props.cont1}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full h-[100px]">
                                        <div className="w-[40px] h-[30px] mb-[12px]">
                                            <Image src={Icon2} />  
                                        </div>  
                                        <p className=" text-white">{props.cont2}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full h-[100px]">
                                        <div className="w-[40px] h-[30px] mb-[12px]">
                                            <Image src={Icon3} />
                                        </div>
                                        <p className=" text-white">{props.cont3}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full h-[100px]">
                                        <div className="w-[40px] h-[30px] mb-[12px]">
                                            <Image src={Icon4} />
                                        </div>
                                        <p className=" text-white">{props.cont4}</p>
                                    </div>
                                </div>
                                <div className="bg-white w-[65%] hidden max-md:block ">
                                    <Image className="h-[100%]" src={Imovel} />
                                </div>
                            </div>
                        </div>
                        <div className=" max-md:hidden max-md:w-[50%] mt-[70px] ml-[-330px] max-md:h-[465px] cursor-pointer hover:duration-1000 ">
                            <Image className="w-[100%] h-[100%]" src={Imovel} />
                        </div>
                    </div>    
                </div>
            </article>
        </>
    )
}