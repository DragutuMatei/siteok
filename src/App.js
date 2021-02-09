import "./App.css";
import Navbar from "./components/Navabr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Item from "./pages/Item";
import Card from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" exact component={Item} />
          <Route path="/card" exact component={Card} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
