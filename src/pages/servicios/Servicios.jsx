import { Block } from '../../components/blocks/Block';
import { Footer } from '../../components/footer/Footer';
import { Hacemos } from '../../components/hacemos/Hacemos';
import { Header } from '../../components/header/Header';
import { Subscribe } from '../../components/subscribe/Subscribe';
import './servicios.css';

export const Servicios = ()=>{
    return (
        <>
      <Header />

      <div className="subscribe-container">
        <Subscribe />
      </div>

      <div className="nosotros-container">
        
        <div className="blocks-container">
            <Block/>
            <Block/>
            <Block/>
        </div>

        <div className="div-2">
          <Hacemos/>
        </div>

      </div>

      <Footer/>
    </>
    )
}