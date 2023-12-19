import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas",
    academy: "Instituto Federal de Educação, Ciência e Tecnologia",
    // dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // startYear: "2015",
    endYear: "2022",
  },
  {
    id: 2,
    title: "Microsoft Student to Business",
    academy: "Pontíficia Universidade Católica",
    dec: "Trilha Teste de Software",
    startYear: "2012",
    endYear: "2017",
  },
  {
    id: 3,
    title: "Manutenção de Hardware",
    academy: "Microcamp Tecnologia",
    //dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    startYear: "2010",
    endYear: "2015",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Desenvolvedor FullStack JR.",
    company: "Orni Venture Builder",
    dec: "Desenvolvimento de sites em React.Js e Next.Js. Desenvolvimento de apps mobile em React Native para Android e iOS. Manutenção em códigos, como API's, em Node.js. Consumo de API's. Uso de metodologias ágeis e GitHub para versionamento",
    startYear: "10/2022",
    endYear: "10/2023",
  },
  {
    id: 2,
    title: "Estagiário T.I.",
    company: "TCE/RS",
    dec: "Participar do desenvolvimento e manutenção de plataformas de trabalho para acompanhamento de Plano de Gestão, auditorias internas de gestão, gestão de riscos, MMD-TC e elaboração de pesquisas sobre diversos temas.",
    startYear: "03/2021",
    endYear: "08/2022",
  },
  {
    id: 3,
    title: "Estagiário Suporte de T.I.",
    company: "MPRS",
    dec: "Registrar chamados técnicos no GLPI e controlar o efetivo atendimento dos chamados. Instalar, configurar e interligar os equipamentos de informática: microcomputadores, impressoras e periféricos, bem como fazer a manutenção dos mesmos. Documentar a movimentação patrimonial da/para UEQ. Instalação, interligação, conectorização e documentação dos cabeamentos lógicos do MPRS.",
    startYear: "02/2018",
    endYear: "02/2020",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section
      className="lui-section lui-gradient-bottom"
      id="resume-section"
    >
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Currículo </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                minha <b>História</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Educação </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {/* {education.startYear} -*/} {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experiência </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience, i) => (
                  <div
                    key={experience.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      experienceToggle == experience.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() =>
                        setExperienceToggle(
                          experienceToggle == experience.id
                            ? null
                            : experience.id
                        )
                      }
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Tragetória </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
