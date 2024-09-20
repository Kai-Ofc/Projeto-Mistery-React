import styles from './Page404.module.css'

function Page404() {
    return (
        <>
                <h2 className={styles.titulo2}>Página 404</h2>
                <div className={styles.textos}>
                    <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                </div>
        </>
    )
}

export default Page404
