/* eslint-disable jsx-a11y/alt-text */
import styles from './Skills.module.css'
import javascript from '../../img/skills/javascript.svg'
import angular from '../../img/skills/angular.svg'
import css from '../../img/skills/css.svg'
import html from '../../img/skills/html.svg'
import react from '../../img/skills/react.svg'
import typescript from '../../img/skills/typescript.svg'

function Skills(){
    return(
        <div id='Skills' className = {styles.skill}>
            <h1>HABILIDADES</h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos</p>
            <div>
                <img src = {javascript} />
                <img src = {typescript} />
                <img src = {css} />
                <img src = {html} />
                <img src = {angular} />
                <img src = {react} />
            </div>
        </div>
    )
}

export default Skills