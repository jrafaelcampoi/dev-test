import Image from 'next/image';
import {Raleway} from 'next/font/google';
import Header from '../../components/Header';
import Head from 'next/head';
import BgTitle from '../../components/BgTitle';
import Section from '../../components/Section';
import Setas from '../../components/Setas';
import Portfolio from '../../components/Portfolio';
import Cadastro from '../../components/Cadastro';
import IconLine from '../../components/IconLine';
import Footer from '../../components/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
    return (
      <div className='bg-primary-gray'>

        <Head></Head>

        <Header cor="black"/>

        <div className="max-md:max-w-[100%] max-w-[1280px] ml-auto mr-auto pt-[101px]">
          <BgTitle banner="1" content="Pré Lançamento" />
          <Section />
          <Setas />
          <BgTitle banner="2" content="Em Construção" />
          <Section />
          <Setas />
        </div>
        <Portfolio />
        <Cadastro />
        <IconLine />
        <Footer />


        
      </div>  
    )
}
