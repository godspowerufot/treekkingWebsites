import { useState } from "react";
import { React } from "react";
import { Facebook } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import "./Login.css";

import { Google } from "@mui/icons-material";
import { UserAuth } from "./contextapi";
import { useNavigate } from "react-router";
function SignUp() {
  const { signUp, Googles } = UserAuth();
  let navigate = useNavigate();
  //on submission do this caled the fault tolerance  and login in user that sign in
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(note.email, note.password);
      navigate("/function");
    } catch (error) {
      console.log("error");
    }
  };
  const googlesubmit = async (event) => {
    event.preventDefault();
    try {
      await Googles();
      navigate("/function");
    } catch (error) {
      console.log(error);
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
          <h1>SIGNUP</h1>
          <div class="social-container">
            <a
              href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
              className="socials">
              <Facebook />
            </a>
            <span className="socials" onClick={googlesubmit}>
              <Google />
            </span>
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

          <button onClick={handleSubmit}>SIGNUP</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
