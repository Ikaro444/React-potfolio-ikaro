import styles from './Navbar.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className = {styles.navbar}>
            <ul>
                <li className = {styles.link}><Nav.Link href='#Presentation'>APRSENTAÇÃO</Nav.Link></li>
                <li className = {styles.link}><Nav.Link href='#Skills'>HABILIDADES</Nav.Link></li>
                <li className = {styles.link}><Nav.Link href='#Project'>PROJETOS</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/ikaro_belem?igsh=Y2UycHY0dGdieGt1' target='blank'><FaInstagram size = {35}/></a></li>
                <li><a href='https://github.com/Ikaro444' target='blank'><FaGithub size = {35}/></a></li>
                <li><a href='https://www.linkedin.com/in/ikaro-belem-5197a4252/' target='blank'><FaLinkedin size = {35}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar