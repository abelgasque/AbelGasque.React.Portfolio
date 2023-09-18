import {
  DiAngularSimple, 
  DiDotnet, 
  DiMsqlServer,
  DiReact,
  DiLaravel,
  DiPostgresql,
} from 'react-icons/di';

import "../styles/components/technologies-container.sass";

const technologies = [
  { id: "angular", name: "Angular 2+", icon: <DiAngularSimple /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "dotnet", name: ".NET", icon: <DiDotnet /> },
  { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
  { id: "sql-server", name: "SQL Server", icon: <DiMsqlServer /> },
  { id: "postgres", name: "Postgres SQL", icon: <DiPostgresql /> },
];

const TechnologiesContainer = () => {
  return (    
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Descrição</p>
            </div>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer;