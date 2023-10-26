import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://www.campuscameta.ufpa.br/images/logo_labex.jpg" 
            />
            <div className={styles.profile}>
                <strong>Thais Gonçalves</strong>
                <span>Programadora</span>
            </div>

            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}