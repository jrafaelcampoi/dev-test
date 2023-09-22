import Image from "next/image"
import Logo1 from "@/assets/wpp.png"
import Logo2 from "@/assets/insta.png"
import Logo3 from "@/assets/face.png"
import Logo4 from "@/assets/yt.png"
import Logo5 from "@/assets/hamburger.png"

export default function Icon(props) {
    let icon, altContent;
    switch (props.content) {
        case "wpp":
            icon = Logo1; altContent="Fale conosco via WhatsApp"; break;
        case 'insta':
            icon = Logo2; altContent="Visite nosso Instagram"; break;
        case 'face':
            icon = Logo3; altContent="Visite nosso Facebook"; break;
        case 'yt':
            icon = Logo4; altContent="Acesse nosso YouTube"; break;
    }

    if (props.content == 'hamburger') {
        
        icon = Logo5;
        
        return (
            <Image className="cursor-pointer opacity-100 w-[27px] h-[27px] ml-[8px] mr-[8px]" src={icon}></Image>
        )
    } else {
        return (
        <>
            <Image title={altContent} className="cursor-pointer opacity-60 w-[27px] h-[27px] ml-[8px] mr-[8px] hover:opacity-90 hover:duration-500" src={icon}></Image>
        </>
    )}
}