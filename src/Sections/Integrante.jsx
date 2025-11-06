import team from "../data/team.json";
import "/public/style/integrante.scss";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import github from "/public/icons/github.svg";

/* 🔧 helper para remover o prefixo /public e garantir a barra inicial */
const fix = (p = "") => {
  if (!p) return p;
  if (/^https?:\/\//i.test(p)) return p;               
  let out = p.replace(/^\/?public\//i, "/");              
  if (!out.startsWith("/")) out = "/" + out;              
  return out;
};

function Integrante() {
  return (
    <section id="sobre">
      <h2 className="section_title">SOBRE NÓS</h2>

      <ul className="team-flex">
        {team.map((m) => (
          <li key={m.id} className="member">
            <div className="member_foto">
              <img src={fix(m.foto)} alt={`Foto de ${m.nome}`} loading="lazy" />
            </div>

            <h3 className="member_name">
              <span> {m.nome} </span>
              <span>  —  </span>
              <span className="member_role"> {m.func}</span>
            </h3>

            <p className="textos">{m.bio}</p>

            <div className="links_icons" aria-label={`Redes de ${m.nome}`}>
              {m.socials?.linkedin && (
                <a href={m.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              )}

              {m.socials?.instagram && (
                <a href={m.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              )}

              {m.socials?.github && (
                <a href={m.socials.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Integrante;
