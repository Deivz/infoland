import logo from "../../assets/logopreta.png";
import styles from "./topo.module.css";
import {FaBars, FaPhoneSquareAlt, FaShoppingCart, FaToggleOff, FaUserCircle} from "react-icons/fa";

export default function Topo(){
    return(
        <header>
            <div className={styles.container}>
                <h1><a href="#"><img src={logo} alt="Logotipo da empresa" className={styles.logo}></img></a></h1>
                <nav className={styles.navegacao}>
                    <ul className={styles.nav__lista}>
                        <li>
                            <FaUserCircle className={styles.fa} />
                            <span className={styles.nav__textos}>
                                Faça seu <a href="#">Login</a> ou <a href="#">Cadastre-se</a>
                            </span>
                        </li>
                        <li className={styles.atendimento}>
                            <a href="#">
                                <FaPhoneSquareAlt className={styles.fa} />
                                <span className={styles.nav__textos}>Atendimento ao cliente</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaToggleOff className={styles.fa} />
                                <span className={styles.nav__textos}>Modo escuro</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaShoppingCart className={styles.fa} />
                                <span className={styles.nav__textos}>Carrinho</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.botaoMenu}>
                    <FaBars className={styles.fa} />
                    <span className={styles.nav__textos}>Todos os departamentos</span>
                </div>
            </div>
            <div className={styles.busca}>
                    <form>
                        <input className={styles.campoBusca} placeholder="Digite o que você procura"/>
                    </form>
                </div>
        </header>
    );
}