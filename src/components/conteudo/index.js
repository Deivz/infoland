import styles from "./conteudo.module.css"

export default function Conteudo(){
    return(
        <section>
            <main className={styles.container}>
                <span>Olá mundo!</span>
            </main>
        </section>
    );
}