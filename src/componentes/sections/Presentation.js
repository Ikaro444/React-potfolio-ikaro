import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div className = {styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Ikaro Belem</h1>
            <p>Sou fascinado por tecnologia, buscando sempre aprender mais e<br/>
               me aperfeiçoar no que eu já sei, faço um curso superior de ciência<br/>
               da computação e paralelo a isso, cursos complementares para a área<br/>
               de desenvolvimento web que é onde estou me especializando, meu objetivo<br/>
               é crescer como profissional na área. 
            </p>
            <ButtonA link='https://github.com/Ikaro444' text='Conect-se comigo!'/>
        </div>
    )
}

export default Presentation