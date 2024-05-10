import { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import LoadingSpinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [sign, setSign] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (sign === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner">
      <img src={LoadingSpinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={Logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{sign}</h1>
        <form action="">
          {sign === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={user_auth} type="submit">
            {sign}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSign("Sign Up");
                }}
              >
                Sign up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSign("Sign In");
                }}
              >
                Sign in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
