import styles from "./rodape.module.css"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

export default function Rodape(){
    return(
        <footer>
            <div className={styles.container}>
                <ul className={styles.departamentos}>Departamentos
                    <li>
                        <a href="#">Celulares e Smartphones</a>
                    </li>
                    <li>
                        <a href="#">Computadores</a>
                    </li>
                    <li>
                        <a href="#">Hardware</a>
                    </li>
                    <li>
                        <a href="#">Monitores</a>
                    </li>
                    <li>
                        <a href="#">Periféricos</a>
                    </li>
                    <li>
                        <a href="#">Placa de vídeo</a>
                    </li>
                    <li>
                        <a href="#">Teclado e mouse</a>
                    </li>
                </ul>
                <ul className={styles.institucional}>Institucional
                    <li>
                        <a href="#">Políticas do site</a>
                    </li>
                    <li>
                        <a href="#">Trabalhe conosco</a>
                    </li>
                    <li>
                        <a href="#">Quem somos</a>
                    </li>
                </ul>
                <ul className={styles.duvidas}>Dúvidas
                    <li>
                        <a href="#">Como comprar</a>
                    </li>
                    <li>
                        <a href="#">Entrega</a>
                    </li>
                    <li>
                        <a href="#">Formas de pagamento</a>
                    </li>
                    <li>
                        <a href="#">Garantia</a>
                    </li>
                    <li>
                        <a href="#">Sobre boletos</a>
                    </li>
                </ul>
                <ul className={styles.atendimento}>Atendimento
                    <li>
                    Horário de atendimento:
                    08:00 às 18:00 - Segunda a Sábado, horário de Brasília (Exceto feriados, em Salvador-BA)

                    Endereço: Rua XXX, 26 - 2° andar - Salvador/BA
                    CEP: XXXXX-530

                    Central SAC: (71) XXXX-XXXX

                    E-mail: faleconosco@infoland.com
                    </li>
                </ul>
                <ul className={styles.social}>Mídias sociais
                    <div className={styles.midias}>
                        <li>
                            <a href="#"><FaFacebook /></a>
                        </li>
                        <li>
                            <a href="#"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="#"><FaLinkedin /></a>
                        </li>
                        <li>
                            <a href="#"><FaTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><FaYoutube /></a>
                        </li>
                    </div>
                </ul>
                <ul className={styles.newsletter}>Newsletter
                    <li>
                        Inscreva-se para receber ofertas exclusivas em seu e-mail
                    </li>
                    <form>
                        <input type="text" placeholder="Seu nome"></input>
                        <input type="text" placeholder="Seu e-mail"></input>
                    </form>
                </ul>
            </div>
        </footer>
    )
}