import projects from "../data/projeto.json";
import "/public/style/projeto.scss";

/* 🔧 mesmo helper */
const fix = (p = "") => {
  if (!p) return p;
  if (/^https?:\/\//i.test(p)) return p;
  let out = p.replace(/^\/?public\//i, "/");
  if (!out.startsWith("/")) out = "/" + out;
  return out;
};

function Projeto() {
  return (
    <section id="projetos">
      <h2 className="proj_title">NOSSOS PROJETOS</h2>

      <ul className="proj-flex">
        {projects.map((p) => (
          <li key={p.id} className="proj">
            <div className="proj_foto">
              {/* ⬇️ normaliza a imagem do card */}
              <img src={fix(p.foto)} alt={p.alt} loading="lazy" />
            </div>

            <h3 className="proj_name">{p.title}</h3>

            <p className="proj_bio">{p.desc}</p>

            <div className="proj_socials" aria-label={`Redes de ${p.nome}`}>
              {p.links?.demo && (
                <a href={p.links.demo} aria-label="Demo" target="_blank" rel="noopener noreferrer">
                  {/* ⬇️ normaliza o ícone da demo, caso venha do JSON */}
                  <img src={fix(p.links.demo_img)} alt="Demo" />
                </a>
              )}
              
              {p.links?.github && (
                <a href={p.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  {/* ⬇️ normaliza o ícone do GitHub, caso venha do JSON */}
                  <img src={fix(p.links.github_img)} alt="GitHub" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projeto;
