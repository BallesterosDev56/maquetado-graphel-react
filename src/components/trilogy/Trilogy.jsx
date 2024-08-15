import './trilogy.css';
import {Tecnology} from '../tecnology/Tecnology'

export const Trilogy = ()=> {
    return (
        <div className='trilogy-container'>
            <Tecnology title={"HTML5"} url={"../../../src/assets/images/logo_css.png"}/>
            <Tecnology title={"CSS3"} url="../../../src/assets/images/logo_html.png"/>
            <Tecnology title={"WEB DESIGN"} url="../../../src/assets/images/logo_brush.png"/>
        </div>
    )
}