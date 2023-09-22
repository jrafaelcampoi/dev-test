import CCLogo from '@/assets/cclogo.png'
import MainLogo from '@/assets/icon-logo.png'
import Image from "next/image"
import LinkFooter from './LinkFooter'

export default function Footer() {
    return (
        <>
            <footer className=' bg-white w-full '>
                <div className=' h-[335px] max-md:h-[500px] pt-16 pl-[12vw] ml-[-12vw] pb-16 flex justify-center max-md:justify-start w-full max-md:flex-wrap '>
                    <div className='m-[50px] max-md:m-[10px] max-md:ml-[30px]'>
                        <div className='w-[65px] h-[5px] bg-gold-light mb-2'></div>
                        <h3 className='uppercase mb-3 text-2xl max-md:text-lg text-black font-bold tracking-wide'>Empreendimentos</h3>
                        <div className='flex flex-col gap-3'>
                            <LinkFooter content="Sun Beach Residence" />
                            <LinkFooter content="Gran Palace Residence" />
                            <LinkFooter content="Beau Lac Residence" />
                            <LinkFooter content="Bello Bosque Residence" />
                        </div>
                    </div>

                    <div className='m-[50px] max-md:m-[10px] max-md:ml-[30px] max-md:w-[100%]'>
                        <div className='w-[65px] h-[5px] bg-gold-light mb-2'></div>
                        <h3 className='uppercase mb-3 text-2xl max-md:text-lg text-black font-bold tracking-wide '>Mais Canais</h3>
                        <div className='flex flex-col gap-3'>
                            <LinkFooter content="Trabalhe conosco" />
                            <LinkFooter content="Portal do cliente" />
                        </div>
                    </div>

                    <div className='m-[50px] max-md:m-[10px] max-md:ml-[30px] max-md:w-[100%]'>
                        <div className='w-[65px] h-[5px] bg-gold-light mb-2'></div>
                        <h3 className='uppercase  mb-3 text-2xl max-md:text-lg text-black font-bold tracking-wide '>Explore</h3>
                        <div className='flex flex-col'>
                            <LinkFooter content="CUB / SC" />
                        </div>
                    </div>
                </div>
                <div className=' max-md:flex-col pt-8 max-md:gap-4 content-center border-t w-[full] text-primary-gold font-semibold items-center justify-around flex h-[203px] mt-8 pb-4'>
                    <span>GD & JR © 2023</span>
                    <div className='w-[60px] opacity-80 hover:duration-1000 hover:opacity-100 cursor-pointer'><Image src={MainLogo} /></div>
                    <div className='flex'>
                        <span className=' mt-1 mr-2'>desenvolvido por </span>
                        <Image alt='Corretor' className=' opacity-60 hover:duration-700 cursor-pointer hover:opacity-100 w-[31px] h-[31px]' src={CCLogo} />
                    </div>
                </div>
            </footer>
        </>
    )
}