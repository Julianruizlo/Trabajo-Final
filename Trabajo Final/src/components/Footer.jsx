import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "../modules/Footer.css"
function Footer() {
    return(
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
              <h4>For Business</h4>
              <a href="">Employers</a>
              <a href="">Health Plan</a>
              <a href="">Individual</a>
            </div>
            <div className='sb__footer-links_div'>
            <h4>Resoruces</h4>
              <a href="">Employers</a>
              <a href="">Health Plan</a>
              <a href="">Individual</a>
            </div>
            <div className='sb__footer-links_div'>
            <h4>Parteners</h4>
              <a href="">Employers</a>
              
            </div>
            <div className='sb__footer-links_div'>
            <h4>Company</h4>
              <a href="">Employers</a>
              <a href="">Health Plan</a>
              <a href="">Individual</a>
            </div>
            <div className='sb__footer-links_div'>
            <h4>Comign soon on</h4>
              <a href="">Employers</a>
              
            </div>
            <div className='sb__footer-links_div'>
            <h4>Social Media</h4>
            <div className='socialmedia'>
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

          <hr ></hr >
          <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
              <p>@{new Date().getFullYear()} CodeInn. All right reserver</p>
               </div>
             
             <div className='sb__footer-below-links'>
              <a href=""><div><p>Terms & Conditions</p></div></a>
              <a href=""><div><p>Privacy</p></div></a>
              <a href=""><div><p>Security</p></div></a>
              <a href=""><div><p>Terms & Conditions</p></div></a>
             </div>
             </div>
        </div>
      </div>
     
  );
}
export default Footer;