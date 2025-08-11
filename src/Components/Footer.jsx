import "../Footer.css";


function Footer() {
  return (
    <div className="footerdiv">
      <div style={{ backgroundColor: "", width: "88vw" }}>
        <img
          src="/images/ontourlogo (1).svg"
          alt="Tour Scout Logo"
          height={"40vh"}
        />
      </div>

      <div
        style={{
          backgroundColor: "",
          width: "88vw",
          display: "flex",
          justifyContent: "center",
          height: "12vh",
          alignItems: "center",
          fontSize: "16px",
        }}
      >
        <ul
          style={{
       
            display: "flex",
            gap: "40px",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ listStyle: "none" }}>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div style={{ fontSize: "19.2px", backgroundColor: "", width: "88vw" }}>

        © 2024 TourScout, Inc. All rights
      </div>
    </div>
  );
}

export default Footer;
