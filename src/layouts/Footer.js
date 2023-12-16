const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/joaomarcosbs"
                >
                  <i
                    aria-hidden="true"
                    className="fab fa-github"
                  />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://twitter.com/TheLabaxurias"
                >
                  <i
                    aria-hidden="true"
                    className="fab fa-twitter"
                  />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://instagram.com/joaomarcosbs"
                >
                  <i
                    aria-hidden="true"
                    className="fab fa-instagram"
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2023 - Todos os direitos reservados.
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Desenvolvido com ❤️ pelo <strong>dev que não toma café</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
