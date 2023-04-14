import Link from "next/link";

const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand" href="/">Controle Pessoal de Livros</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="/inclusao">Inclusão</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" href="/manutencao">Manutenção</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" href="/resumo">Resumo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuSuperior;