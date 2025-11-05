import team from "../data/team.json";
import "/public/style/integrante.scss";
import linkedin from "/public/icons/linkedin.svg";
import instagram from "/public/icons/instagram.svg";
import github from "/public/icons/github.svg";
import img from "/public/imgs/image.png";

function Integrante() {
  return (
    <section id="sobre" className="team">
      <h2 className="team_title">SOBRE NÓS</h2>

      <ul className="team-flex">
        {team.map((m) => (
          <li key={m.id} className="member">
            <div className="member_foto">
              <img src={img} alt={`Foto de ${m.nome}`} />
            </div>

            <h3 className="member_name">
              <span> {m.nome} </span>
              <span>  —  </span>
              <span className="member_role"> {m.func}</span>
            </h3>

            <p className="member_bio">{m.bio}</p>

            <div className="member_socials" aria-label={`Redes de ${m.nome}`}>
              {m.socials?.linkedin && (
                <a href={m.socials.linkedin} aria-label="LinkedIn">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              )}

              {m.socials?.instagram && (
                <a href={m.socials.instagram} aria-label="Instagram">
                  <img src={instagram} alt="Instagram" />
                </a>
              )}

              {m.socials?.github && (
                <a href={m.socials.github} aria-label="GitHub">
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
