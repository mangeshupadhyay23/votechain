import "./App.css";
import CandidateList from "./components/list/candidateList";
import Auth from "./components/login/authPage";
import Admin from "./components/admin/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Auth} />
        <Route path="/candidateList" component={CandidateList} />
        <Route path="/" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
