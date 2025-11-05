import projects from "../data/projeto.json";
import "/public/style/projeto.scss";

function Projeto() {
  return (
    <section id="projetos">
      <h2 className="proj_title">NOSSOS PROJETOS</h2>

      <ul className="proj-flex">
        {projects.map((p) => (
          <li key={p.id} className="proj">
            <div className="proj_foto">
              <img src={p.foto} alt={p.alt} />
            </div>

            <h3 className="proj_name">{p.title}</h3>

            <p className="proj_bio">{p.desc}</p>

            <div className="proj_socials" aria-label={`Redes de ${p.nome}`}>
              {p.links?.demo && (
                <a href={p.links.demo} aria-label="Demo">
                  <img src={p.links.demo_img} alt="Demo" />
                </a>
              )}
              
              {p.links?.github && (
                <a href={p.links.github} aria-label="GitHub">
                  <img src={p.links.github_img} alt="GitHub" />
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
