import {Raleway} from 'next/font/google';
import Header from '../../components/Header';
import Main from '../../components/Main';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
    return (
      <div>
        <Header cor="transparent" />
        <Main />
      </div>  
    )
}
