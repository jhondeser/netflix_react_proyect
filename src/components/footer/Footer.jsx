import './footer.css'

function Footer() {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer-wrapper">
          <div className="site_footer">
            <div className="footer_top">
              <p>¿preguntas? llama al <a href="#">900-769-136</a></p>
            </div>
            <ul className="footer_links">
              <li className="footer_link_item">
                <a href="#">
                  <span>Preguntas frecuentes</span>
                </a>
              </li>
              <li className="footer_link_item">
                <a href="#">
                  <span>Centro de ayuda</span>
                </a>
              </li>
              <li className="footer_link_item">
                <a href="#">
                  <span>Cuenta</span>
                </a>
              </li>
              <li className="footer_link_item">
                <a href="#">
                  <span>Zona de prensa</span>
                </a>
              </li>
              <li className="footer_link_item">
                <a href="#">
                  <span>Inversores</span>
                </a>
              </li>
              <li className="footer_link_item">
                <a href="#">
                  <span>tarjetas de regalo</span>
                </a>
              </li>
            </ul>
            <div className="bottom_footer">
              <a href="#">
                <span>© todos los derechos reservados</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer