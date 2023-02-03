import styles from './Header.module.css'
import igniteLogo from '../assets/IgniteLogo.svg'

export function Header(){
    return(
        <div>
            <header className={styles.header}>
            <img src={igniteLogo} alt='LogotipoDoIgnite'/>
            
            </header>
        </div>
    )
}