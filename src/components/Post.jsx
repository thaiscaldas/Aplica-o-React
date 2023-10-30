import styles from './Post.module.css';

export function Post() {
    return (
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/thaiscaldas.png" />
                <div className={styles.authorInfo}>
                    <strong>Thais Gonçalves</strong>
                    <span>Programadora</span>
                </div>
            </div>

            <time title='26 de Outubro às 09:47' dateTime='2023-10-26 09:47:36'>Publicado há 1h</time>
        </header>


        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> <a a href=''>jane.design/doctorcare</a></p>
        <p> 
            <a href=''>#novoprojeto</a>{' '}
            <a href=''>#nlw</a> {' '}
            <a href=''>#rocketseat</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder='Deixe um comentário'
            />

           <footer>
            <button type='submit'>Publicar</button>
           </footer>
        </form>
       </article>
    );
}