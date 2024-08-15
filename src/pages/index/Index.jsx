import {Header} from '../../components/header/Header'
import {ImageContainer} from '../../components/image-container/ImageContainer'
import { Subscribe } from '../../components/subscribe/Subscribe'
import { Trilogy } from '../../components/trilogy/Trilogy'
import { Footer } from '../../components/footer/Footer'


import './index.css'

export const Index = ()=> {
    return (
        <>
            <Header/>
            <ImageContainer/>
            <Subscribe/>
            <Trilogy/>
            <Footer/>
        </>
    )
}