import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../styles/components/information-container.sass";

const informations = [
    { title: "Telefone", description: "(48) 99137-7315", icon: <AiFillPhone id="phone-icon" /> },
    { title: "E-mail", description: "contato.abelgasque@gmail.com", icon: <AiOutlineMail id="email-icon" /> },
    { title: "Localização", description: "São José / SC", icon: <AiFillEnvironment id="pin-icon" /> },
];

const InformationContainer = () => {
  return (
    <section id="information">
        {informations.map((info) => (
            <div className="info-card" key={info.title}>
                {info.icon}
                <div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
            </div>
            </div>
        ))}
    </section>
  );
}

export default InformationContainer;

