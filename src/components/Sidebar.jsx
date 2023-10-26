import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://www.campuscameta.ufpa.br/images/logo_labex.jpg" 
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/thaiscaldas.png" />
                <strong>Thais Gonçalves</strong>
                <span>Programadora</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}