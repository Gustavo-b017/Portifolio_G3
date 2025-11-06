import React from "react";
import "/public/style/footer.scss"; 

function Footer() {
  return (
    <footer className="site-footer">
      <a 
        href="#" 
        className="back-to-top__link" 
        aria-label="Voltar ao início"
      >
        {/* Este span será estilizado para virar a seta */}
        <span className="back-to-top__icon" aria-hidden="true"></span>
        <p>INÍCIO</p>
      </a>
    </footer>
  );
}

export default Footer;