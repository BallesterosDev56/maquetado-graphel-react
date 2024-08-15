import './imageContainer.css';

export const ImageContainer = ()=> {
    return (
        <section>
            <div className="image-container">
                <img src="../../../src/assets/images/cabecera.jpg" alt="image" />
                <div className="relative-text">
                    <h2>Expertos en Tecnologías Web</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum asperiores at quam qui architecto repudiandae corporis dolor.</p>
                </div>
            </div>
        </section>
    )
}