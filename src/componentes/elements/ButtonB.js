import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div>
            <a href = {link} target = "_blank" rel="noreferrer">
                <button className = {styles.btn}>{text}</button>
            </a>       
        </div>
    )
}

export default ButtonB