import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./components/form";
import ResumeComponent from "./components/resume";
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path="/" exact component={FormComponent} />
      <Route path="/view_resume/:id" exact component={ResumeComponent} />
    </Router>
  );
}

export default App;
