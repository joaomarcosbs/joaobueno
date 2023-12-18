import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            Todos
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-react-native"
            )}`}
            onClick={handleFilterKeyChange("sorting-react-native")}
            data-href=".sorting-react-native"
          >
            React Native
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-react")}`}
            onClick={handleFilterKeyChange("sorting-react")}
            data-href=".sorting-react"
          >
            React
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-nextjs")}`}
            onClick={handleFilterKeyChange("sorting-nextjs")}
            data-href=".sorting-nextjs"
          >
            Next.js
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-mobile")}`}
            onClick={handleFilterKeyChange("sorting-mobile")}
            data-href=".sorting-mobile"
          >
            Mobile
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-web")}`}
            onClick={handleFilterKeyChange("sorting-web")}
            data-href=".sorting-web"
          >
            Web
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-front-end"
            )}`}
            onClick={handleFilterKeyChange("sorting-front-end")}
            data-href=".sorting-front-end"
          >
            Front-end
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-fullstack"
            )}`}
            onClick={handleFilterKeyChange("sorting-fullstack")}
            data-href=".sorting-fullstack"
          >
            FullStack
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react-native sorting-mobile">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://github.com/joaomarcosbs/FlanelinhaApp"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/flanelinha.jpg"
                        alt="Flanelinha"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Native, Mobile </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://github.com/joaomarcosbs/FlanelinhaApp"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      Flanelinha
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p
                    style={{
                      maxHeight: 50,
                      textOverflow: "ellipisis",
                      overflow: "hidden",
                    }}
                  >
                    Um aplicativo para anunciar e procurar vagas de
                    estacionamento em propriedades não comerciais próximas ao
                    seu local de destino. O usuário pode procurar vagas para
                    estacionar colocando o endereço e podendo visualizar as
                    disponíveis no mapa ou em lista. Também é possível realizar
                    o anúncio da vaga, colocando as informações e foto do local.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://github.com/joaomarcosbs/FlanelinhaApp"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projeto
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react sorting-web sorting-front-end">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://orni.com.br/"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/orni.png"
                        alt="Portal Orni"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React, Front-end, Web </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://orni.com.br/"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      Portal Orni (até 10/23)
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p
                    style={{
                      maxHeight: 50,
                      textOverflow: "ellipisis",
                      overflow: "hidden",
                    }}
                  >
                    Um site institucional múltiplas páginas e seções em que foi
                    utilizado principalmente React JS com HTML e CSS para
                    estruturação, estilização e animação dos componentes.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://orni.com.br/"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projeto
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react-native sorting-mobile ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://github.com/joaomarcosbs/buildersApp"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/weathernow.jpg"
                        alt="Weather Now"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Native, Mobile </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://github.com/joaomarcosbs/buildersApp"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                      a
                    >
                      Weather Now
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p
                    style={{
                      maxHeight: 50,
                      textOverflow: "ellipisis",
                      overflow: "hidden",
                    }}
                  >
                    Uma aplicação que possibilita saber as informações
                    climáticas atuais baseadas na localização do dispositivo,
                    onde a informação é enviada para uma API de serviços
                    climáticos e retorna as informações pertinentes, como país,
                    estado, cidade/bairro, temperatura, última atualização,
                    sensação térmica, humidade e mais algumas.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://github.com/joaomarcosbs/buildersApp"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projeto
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web sorting-front-end sorting-nextjs ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://easynursing.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/easynursing.png"
                        alt="Easy Nursing"
                        style={{ objectFit: "contain" }}
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Next.JS, Front-end, web </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://easynursing.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      Easy Nursing (até 10/23)
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Um site institucional com multiplas páginas e formulários de
                    contatos, feito em Next.JS, JavaScript, HTML e CSS.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://easynursing.com.br"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projeto
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web sorting-front-end sorting-react ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://tattooa.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/tattooa.png"
                        alt="Tattooa"
                        style={{ objectFit: "contain" }}
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React, Front-end, web </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://tattooa.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      Tattooa (até 10/23)
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Um site institucional com multiplas páginas e formulários de
                    contatos, feito em React.JS, JavaScript, HTML e CSS.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://tattooa.com.br"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projetos
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web sorting-front-end sorting-react ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link
                    legacyBehavior
                    href="https://valorcriarapp.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        decoding="async"
                        src="assets/images/criarapp.png"
                        alt="Valor Criar App"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Photography </span>
                <h5 className="name">
                  <Link
                    legacyBehavior
                    href="https://valorcriarapp.com.br"
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                    >
                      Valor Criar App (até 10/23)
                    </a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Uma página com formulário multi etapas transicionais para
                    solicitação de orçamento, feito em React.JS, JavaScript,
                    HTML e CSS.
                  </p>
                </div>
                <Link
                  legacyBehavior
                  href="https://valorcriarapp.com.br"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="lnk"
                  >
                    Ver Projeto
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link
              legacyBehavior
              href="/works"
            >
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Ver Mais</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
