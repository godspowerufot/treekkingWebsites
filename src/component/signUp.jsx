import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import "./Login.css";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserAuth } from "./contextapi";
function Copyright(props) {
  return (
    <Typography
      variant="body3"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  
  const { signUp } = UserAuth();
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track error state


  const handleSubmit = async (event) => {
    event.preventDefault();
  setLoading(true);
  setError(null);
    try {
      await signUp(form.email, form.password);
      setLoading(false)
      navigate("/function");
    } catch (error) {
      setLoading(false);

      // Set the error state to display an alert
      setError(" failed. Please try again.") 
    }
  };
  // update email and password form data
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handlechange(event) {
    const { name, value } = event.target;
    setform((p) => {
      return { ...p, [name]: value };
    });
  }

  return (
  <div className="signup" style={{backgroundColor: "#fff", width: "100vw", height: "100vh", overflow: "hidden"}}>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",

            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              onChange={handlechange}
              value={form.email}
              id="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handlechange}
              value={form.password}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             {loading ? (
            <div className="spinner"></div>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>          )}

          {/* Display an error alert if there's an error */}
          {error && <div className="error-alert">{error}</div>}
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  </div>
  );
}
