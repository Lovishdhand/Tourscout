import "../Footer.css";

function Footer() {
  return (
    <div className="footerdiv">
      <div style={{ backgroundColor: "", width: "80vw" }}>
        <img
          src="/images/ontourlogo (1).svg"
          alt="Tour Scout Logo"
          height={"50vh"}
        />
      </div>

      <div>
    <h3>Privacy Policy</h3>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
      </div>
    </div>
  );
}

export default Footer;
