/* eslint-disable jsx-a11y/alt-text */
import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, tittle, tech, description, repo, site}){
    return(
        <div className = {styles.card}>
            <a href = {site} target = "_blank" rel="noreferrer">
                <img src = {img} alt = 'imagem do projeto'/>
            </a>
            
            <section>
                <h3>{tittle}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text = 'Acesse o repositório' link = {repo}/>
            </section>
        </div>
    )
}

export default Card