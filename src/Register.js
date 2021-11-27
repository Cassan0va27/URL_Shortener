import "./styles/Register.scss";

export function Register() {
  return (
    <section>
      <form className="form-control" action="/user/register" method="post">
        <div className="contentBox">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <span>Enter your name</span>
            <input type="text" name="name"></input>
          </div>
          <div className="inputBox">
            <span>Enter your email</span>
            <input type="text" name="email"></input>
          </div>
          <div className="inputBox">
            <span>Enter your password</span>
            <input type="password" name="password"></input>
          </div>
          <div className="inputBox">
            <span>Re-Enter the password</span>
            <input type="password" name="password"></input>
          </div>
        </div>
        <div className="contentBox">
          <div className="conditionBox">
            <input type="checkbox" value="Sign In"></input>{" "}
            <p>I have read and agree to the Terms & Condition</p>
          </div>
          <div className="inputBox">
            <p>
              By Clicking Sign Up, you agree to our Terms and that you hav read
              our Data Use Policy, including our Cookie Use.{" "}
            </p>
          </div>
          <div className="inputBox">
            <input type="submit" value="Sign Up"></input>
          </div>
        </div>
      </form>
    </section>
  );
}
