import './header.css'
import { useNavigate } from 'react-router-dom'
export const Header = ()=> {

    const navigate = useNavigate();

    const indexRoute = ()=>{
        navigate('/');
    }
    const nosotrosRoute = ()=>{
        navigate('/nosotros');
    }
    const serviciosRoute = ()=>{
        navigate('/servicios');
    }
    const contactoRoute = ()=>{
        navigate('/contacto');
    }

    return(
        <>
            <header>
            <div className="title" >Diseño<span className='font-blue'>Multimedia</span></div>
            <div className='buttons-container '>

                <div onClick={indexRoute} className='buttons font-white'>Index</div>
                <div onClick={nosotrosRoute} className='buttons font-white'>Nosotros</div>
                <div onClick={serviciosRoute} className='buttons font-white'>Servicios</div>
                <div onClick={contactoRoute} className='buttons font-white'>Contacto</div>

            </div>
            </header>
        </>
    )
}