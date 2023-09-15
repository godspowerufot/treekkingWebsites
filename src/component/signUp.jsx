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

  const [note, setnote] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track error state

  function UpdateNote(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setnote((newnote) => ({ ...newnote, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Set loading to true to show the spinner
    setLoading(true);
    setError(null);

    try {
      await signUp(note.email, note.password);
      setLoading(false); // Turn off the spinner
      navigate("/function");
    } catch (error) {
      console.error(error);

      // Set loading to false to hide the spinner
      setLoading(false);

      // Set the error state to display an alert
      setError("Sign-up failed. Please try again.");
    }
  };

  const googlesubmit = async (event) => {
    event.preventDefault();
    // Same loading and error handling as in handleSubmit function
    setLoading(true);
    setError(null);

    try {
      await Googles();
      setLoading(false);
      navigate("/function");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Sign-up with Google failed. Please try again.");
    }
  };

  return (
    <div id="body">
      <div class="container" id="container">
        <form action="#">
          <h1>SIGNUP</h1>
          <div class="social-container">
            <a
              href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
              className="socials"
            >
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

          {/* Display a spinner while loading */}
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <button onClick={handleSubmit}>LOGIN</button>
          )}

          {/* Display an error alert if there's an error */}
          {error && <div className="error-alert">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
