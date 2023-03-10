export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-book">
        <h2 className="book-now">Book Now.</h2>
      </div>

      <div className="footer-info">
        <div className="available-payments">
          <div className="payments" id="square"></div>
          <div className="payments" id="applepay"></div>
          <div className="payments" id="visa"></div>
          <div className="payments" id="mastercard"></div>
          <div className="payments" id="interac"></div>
        </div>

        <div className="clout">
          {/* Designed + Developed by Jericho Fillon */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
