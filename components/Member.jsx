import Image from "next/image";
import LogoR from '@/assets/membro1.png'
import LogoG from '@/assets/membro2.png'
import LogoJ from '@/assets/membro3.png'

export default function Member(props) {

    const nome = props.name;
    let imagem, id1;

    switch (nome) {
        case 'Robson': imagem = LogoR; break;
        case 'Gilberto': imagem = LogoG; break;
        case 'Junior': imagem = LogoJ; break;
    }

    return (
        <div>
            <article  className=" bg-black opacity-100 hover:duration-300 cursor-pointer m-6 mt-[-60px] max-md:mt-[-40px] max-md:m-12 ">
                <Image src={imagem} />
            </article>
        </div>
    )
}