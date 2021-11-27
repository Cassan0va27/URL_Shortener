import "./styles/App.scss";
import { Navbar } from "./Navbar";
import { Login } from "./Login";
import { Register } from "./Register";
import { Sign_in } from "./Sign-in_result";
import { About } from "./About";
import { Dashboard } from "./Dashboard";
import { Loading } from "./Loading";
import { Logout } from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Navbar />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user/signup" component={Sign_in} />
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/loading" component={Loading} />
          <Route exact path="/user/logout" component={Logout} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
