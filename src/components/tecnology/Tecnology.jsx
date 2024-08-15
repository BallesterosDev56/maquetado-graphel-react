import './tecnology.css'

export const Tecnology = ({url, title})=> {
    return (
        <div className="card-container">
            <img src={url} alt="image-logo" />
            <h2>{title}</h2>
            <div className="text-container">
                <p>Lorem ipsum dolor sit amet, esciunt aliquid modi totam, maiores dolorum fuga explicabo odit distinctio.</p>
            </div>
        </div>
    )
}