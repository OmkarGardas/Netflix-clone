import "./Footer.css";
import YouTube from "../../assets/youtube_icon.png";
import Twitter from "../../assets/twitter_icon.png";
import Instagram from "../../assets/instagram_icon.png";
import Facebook from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={YouTube} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Invenstor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Information</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@CopyRights Netflix, INC.</p>
    </div>
  );
};

export default Footer;
