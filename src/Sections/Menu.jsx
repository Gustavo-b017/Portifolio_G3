import { useState, useEffect } from "react";
import logo from "/public/imgs/logo-svg.svg"; 
import "/public/style/menu.scss";

function Menu() {
  const [open, setOpen] = useState(false);

  // Fecha o menu ao redimensionar / mudar orientação
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-wrap">
        {/* LOGO (esquerda) */}
        <a href="/" className="brand" aria-label="Página inicial">
          <img src={logo} alt="Logo" className="brand__logo" />
        </a>

        <div className="nav-spacer" />

        <button
          className="burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#projetos">Nossos projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
