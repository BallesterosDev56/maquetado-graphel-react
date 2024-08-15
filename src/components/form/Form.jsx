import './form.css';

export const Form = () => {
    return (
        <div className='contact-form'>
            <h2>Contacto</h2>
            <form action="#" method="post">
                <label htmlFor="name">Nombre:</label><br/>
                <input type="text" name="nombre" id="name" placeholder="Ingresa tu Nombre" required />
                
                <label htmlFor="email">Email:</label><br/>
                <input type="email" name="email" id="email" placeholder="Ingresa tu Email" required />
                
                <label htmlFor="tel">Teléfono:</label><br/>
                <input type="tel" name="telefono" id="tel" placeholder="Ingresa tu Teléfono" required />
                
                <label htmlFor="cel">Celular:</label><br/>
                <input type="tel" name="celular" id="cel" placeholder="Ingresa tu Celular" required />
                
                <label htmlFor="message">Mensaje:</label><br/>
                <textarea name="mensaje" id="message" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
