import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header className='oi'>
            
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/EygonSaldanha.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Dego Fernandes</strong>
                        <span>Wev dev</span>
                    </div>
                </div>

                <time 
                title='11 de maio as 08:33' 
                dateTime='2023-02-03 18:05:00'
                >
                    Publicado a 1h
                </time>
                
            </header>

            <div className={styles.content}>    
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto 
                que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href=''>jane.design/doctorcare</a></p>
            <p>
                <a href=''>#novoprojeto</a>{' '}
                <a href=''>#nlw</a> {' '}
                <a href=''>#rocketseat</a>
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}
