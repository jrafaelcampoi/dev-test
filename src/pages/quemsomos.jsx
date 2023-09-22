import {Raleway} from 'next/font/google';
import Header from '../../components/Header';
import Head from 'next/head';
import BannerAbout from '../../components/BannerAbout';
import Team from '../../components/Team'
import SectionText from '../../components/SectionText';
import TeamBanner from '../../components/TeamBanner';
import Manifesto from '../../components/Manisfesto';
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

        <Header cor="gray" />
        <div className="max-md:max-w-[100%] max-w-[1280px] ml-auto mr-auto">
          <BannerAbout />
        </div>
        <SectionText />
        <TeamBanner />
        <Team />
        <Manifesto />
        <IconLine />
        <Footer id="teste" />

      </div>  
    )
}
