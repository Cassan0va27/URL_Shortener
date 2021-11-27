import "./styles/Login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section>
      <div className="imgBox">
        <img
          src="https://via.placeholder.com/628x890.png"
          alt="Placeholder Banner"
        ></img>
      </div>
      <div className="contentBox">
        <form className="form-box" action="/login" method="post">
          <h2>Login</h2>
          <div className="inputBox">
            <span>Enter your username</span>
            <input type="text" name="username"></input>
          </div>
          <div className="inputBox">
            <span>Enter your password</span>
            <input type="password" name="password"></input>
          </div>

          <div className="inputBox">
            <input type="submit" value="Login"></input>
          </div>
          <div className="inputBox">
            <p>
              Dont have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
