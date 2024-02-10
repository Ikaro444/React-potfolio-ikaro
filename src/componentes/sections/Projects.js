import styles from "./Projects.module.css"
import Card from "../elements/Card"
import angpsn from "../../img/projects/angpsn.png"
import pageTrab from "../../img/projects/pageTrab.png"
import calc from "../../img/projects/calc.png"
function Projects(){
    return(
        <div id='Projects' className = {styles.projects}>
            <h1>Projetos</h1>
            <div className = {styles.cards}>
                <Card
                    img = {angpsn}
                    tittle = "PSN - Store"
                    tech = "Angular (framework), Typescript, HTML e CSS."
                    description = "Desenvolvimento de uma loja de jogos com intuito de ser um clone da PSN"
                    repo = "https://github.com/Ikaro444/angular_proj_PSN.git"
                    site = "https://site-ikaro-psn.netlify.app/"
                    />
                <Card
                    img = {pageTrab}
                    tittle = "Arquitetura page"
                    tech = "HTML e CSS."
                    description = "Desenvolvimento de uma landing page para uma empresa de arquitetura (trabalho de curso)"
                    repo = "https://github.com/Ikaro444/landing-page-arquitetura.git"
                    site = "https://arquitetura-dnc.netlify.app/"
                />
                <Card
                    img = {calc}
                    tittle = "Calculadora simples"
                    tech = "JavaScript, HTML e CSS."
                    description = "Mini projeto onde criei uma calculadora que o usuário deve inserir os números e o operador matemático"
                    repo = "https://github.com/Ikaro444/Mini-projeto-calculadora.git"
                    site = "https://ikaro-calculadora.netlify.app/"
                />
            </div>    
         </div>
    )
}

export default Projects