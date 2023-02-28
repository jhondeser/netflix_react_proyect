import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
 
function Footer() {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer-wrapper">
          <div className="site_footer">
            <div className="footer_top">
              <p>¿preguntas? llama al <a href="#">900-769-136</a></p>
            </div>
            <div className="bottom_footer">
              <a href="#">
                <span> © 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <p className='title_info__wrapper'>Informate</p>
          <div className="info_liks__container">
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
          </div>
        </div>
        <div className="footer-wrapper">
          <p>Follow us</p>
          <ul className='social_logos__container'>
            <li className='social_logo'><BsFacebook size={40}/></li>
            <li className='social_logo'><AiFillInstagram size={40}/></li>
            <li className='social_logo'><AiFillTwitterCircle size={40}/></li>
            <li className='social_logo'><AiFillGithub size={40}/></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer