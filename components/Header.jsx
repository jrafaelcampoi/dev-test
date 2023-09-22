import Image from "next/image"
import Logo from "@/assets/img-logo-2.png"
import MenuItem from "./MenuItem"
import Icon from "./Icon"

export default function Header(props) {

    let cor;
    switch (props.cor) {
        case 'gray':
            cor = 'bgGray'; break;
        case 'black':
            cor = 'bgBlack'; break;
        case 'transparent':
            cor = 'transparent'; break;
    }

    return (
        <nav id={cor} className=" w-full h-[90px] fixed z-20 flex select-none items-center justify-between">
            <Image src={Logo} alt="Logo" className="w-[90px] h-[70px] ml-[32px] mr-[-140px] cursor-pointer" />
            <ul className=" max-lg:hidden flex items-center">
                <MenuItem menu="Empreendimentos"/>
                <MenuItem menu="Sobre nós"/>
                <MenuItem menu="Oportunidades"/>
                <MenuItem menu="Portfólio"/>
                <MenuItem menu="Fale Conosco"/>
            </ul>
            <div className="flex ml-[-140px] mr-[8px]">
                <div className="max-lg:hidden">
                    <Icon content="wpp" />
                </div>
                <div className="max-lg:hidden">
                    <Icon content="insta" />
                </div>
                <div className="max-lg:hidden">
                    <Icon content="face" />
                </div>
                <div className="max-lg:hidden">
                    <Icon content="yt" />
                </div>
                <div className=" hidden max-lg:block">
                    <Icon content="hamburger" />
                </div> 
            </div>
        </nav>
    )
}