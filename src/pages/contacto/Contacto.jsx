import { Form } from '../../components/form/form';
import { Footer } from '../../components/footer/Footer';
import { Hacemos } from '../../components/hacemos/Hacemos';
import { Header } from '../../components/header/Header';
import { Subscribe } from '../../components/subscribe/Subscribe';
import './contacto.css';
import { Mapa } from '../../components/mapa/Mapa';

export const Contacto = ()=>{
    return (
        <>
      <Header />

      <div className="subscribe-container">
        <Subscribe />
      </div>

      <div className="nosotros-container">
        
        <div className="form-container">
            <Form/>
        </div>

        <div className="div-2">
          <Hacemos/>
          <Mapa/>
        </div>

      </div>

      <Footer/>
    </>
    )
}