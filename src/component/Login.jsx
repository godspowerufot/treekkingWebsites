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
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track error state

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Set loading to true to show the spinner
    setLoading(true);
    setError(null);

    try {
      await logIn(note.email, note.password);
      setLoading(false)
      navigate("/function");
    } catch (error) {
// Set loading to false to hide the spinner
setLoading(false);

// Set the error state to display an alert
setError(" failed. Please try again.")    }
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
          <span></span>
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

  {/* Display a spinner while loading */}
  {loading ? (
            <div className="spinner"></div>
          ) : (
            <button onClick={handleSubmit}>SIGNIN</button>
          )}

          {/* Display an error alert if there's an error */}
          {error && <div className="error-alert">{error}</div>}
                </form>
      </div>
    </div>
  );
}

export default LoginPage;
