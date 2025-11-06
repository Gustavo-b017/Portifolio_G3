import { useState } from 'react'; // 1. Importar o useState
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


function ProjetoCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Só mostra o botão "Saiba Mais" se a descrição for longa
  const hasLongDesc = project.desc && project.desc.length > 100; // Limite de 100 caracteres

  const wrapperClasses = [
    'proj_bio_wrapper',
    isExpanded ? 'expanded' : '',
    hasLongDesc ? 'long-desc' : '' // Classe para o CSS aplicar o "fade"
  ].join(' ');

  return (
    <li key={project.id} className="proj">
      <div className="proj_foto">
        <img src={fix(project.foto)} alt={project.alt} loading="lazy" />
      </div>

      <h3 className="proj_name">{project.title}</h3>

      <div 
        className={wrapperClasses}
        onClick={() => hasLongDesc && setIsExpanded(!isExpanded)} // Só é clicável se a descrição for longa
      >
        <p className="textos">{project.desc}</p>
      </div>

      <div className="links_icons" aria-label={`Redes de ${project.nome}`}>
        {project.links?.demo && (
          <a href={project.links.demo} aria-label="Demo" target="_blank" rel="noopener noreferrer">
            <img src={fix(project.links.demo_img)} alt="Demo" />
          </a>
        )}
        
        {project.links?.github && (
          <a href={project.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <img src={fix(project.links.github_img)} alt="GitHub" />
          </a>
        )}
      </div>
    </li>
  );
}


function Projeto() {
  return (
    <section id="projetos">
      <h2 className="proj_title">PROJETOS</h2>

      <ul className="proj-flex">
        {/* 5. Mapeia os projetos para o novo componente ProjetoCard */}
        {projects.map((p) => (
          <ProjetoCard project={p} key={p.id} />
        ))}
      </ul>
    </section>
  );
}

export default Projeto;