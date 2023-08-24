import { useState } from "react";
import { React } from "react";
import "./Login.css";
import { Facebook } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { UserAuth } from "./contextapi";
function LoginPage() {
  let navigate = useNavigate();
  const { logIn } = UserAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(note.email, note.password);
      navigate("/function");
    } catch (error) {
      alert("your not a signed user please  sign up");
    }
  };
  const [note, setnote] = useState({
    email: "",
    password: "",
  });
  function UpdateNote(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setnote((newnote) => ({ ...newnote, [name]: value }));
    console.log(note.email, note.password);
  }
  return (
    <div id="body">
      <div class="container" id="container">
        <form action="#">
          <h1>Login</h1>
          <div class="social-container">
            <a
              href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
              className="socials">
              <Facebook />
            </a>
            <a href="tel:+2347089293254" className="socials">
              <Phone />
            </a>
            <a href="http://wa.me/+2347089293254" className="socials">
              <WhatsApp />
            </a>
          </div>
          <span>or use your account</span>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={note.email}
            onChange={UpdateNote}
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={note.password}
            onChange={UpdateNote}
          />
          <a href="www.404.com">Forgot your password?</a>

          <button onClick={handleSubmit}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
