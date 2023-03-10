import Image from "next/image";

import ApplePay from "../assets/ApplePay.png";
import Interac from "../assets/Interac.png";
import Mastercard from "../assets/Mastercard.png";
import Square from "../assets/Square.png";
import Visa from "../assets/Visa.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="book-now-button">
        <div className="book">
          <h2 className="book-text">Book Now.</h2>
        </div>
      </div>

      <div className="footer-info">
        <div className="available-payments">
          <div className="payments" id="square">
            <Image src={Square} alt="Square Logo" />
          </div>
          <div className="payments" id="applepay">
            <Image src={ApplePay} alt="ApplePay Logo" />
          </div>
          <div className="payments" id="visa">
            <Image src={Visa} alt="Visa Logo" />
          </div>
          <div className="payments" id="mastercard">
            <Image src={Mastercard} alt="Mastercard Logo" />
          </div>
          <div className="payments" id="interac">
            <Image src={Interac} alt="Interac Logo" />
          </div>
        </div>

        <div className="clout">
          <p className="keyboard-wizard">
            Designed + Developed by Jericho Fillon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
