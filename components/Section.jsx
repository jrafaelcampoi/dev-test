import ImovelSection from '../components/ImovelSection'

export default function Section(props) {
    return (
        //flex-wrap para mobile!
        // media queries em 1280px
        <section className='flex max-xl:flex-wrap justify-center max-md:justify-center max-md:w-[100vw] relative'>
            <ImovelSection cont1="120 a 150m²" cont2="2 ou 3 suítes" cont3="2 ou 3 vagas" cont4="120 a 150m²" />
            <ImovelSection cont1="120 a 150m²" cont2="2 ou 3 suítes" cont3="2 ou 3 vagas" cont4="120 a 150m²" />
        </section>
    )
}