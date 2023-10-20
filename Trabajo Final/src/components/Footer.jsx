import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return(
        <>
      <footer className="page-footer font-small pt-4 footer"  >
      <div className="container-fluid text-center text-md-left pt-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Información de Contacto</h5>
            <p>+54 9 (381) 155555555</p>
            <p>info@pelis.com</p>
            <p>San Martín 204, San Miguel de Tucumán</p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3 footer-links">
            <a href="#!">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#!">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#!">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#!">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="">peliculas.com</a>
      </div>
    </footer>
        </>
    )
        
}
export default Footer;