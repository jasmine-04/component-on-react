import Button from "../Buttons/Button";
import "./Nav.css";

const Navbar = ({ color,  }) => {
  return (
    <div>
      <div className="stip" style={{ background: color }}>
        <img
          src="https://sheila-a.github.io/STC/images/yellow%20drug%20bcg.jpg"
          width="75px"
          height="55px"
        />
        <div className="net">
          <div>
            <h3>Home</h3>
          </div>
          <div>
            <h3>About Us</h3>
          </div>
          <div>
            <h3>Services</h3>
          </div>
          <div>
            <h3>Resources</h3>
          </div>
          <div>
            <h3>Blog</h3>
          </div>
          <div>
            <h3>Contact Us</h3>
          </div>
        </div>

        <div>
          <Button text="Register" />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
