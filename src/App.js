import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./components/navbar/navbar.css";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";

import { BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from "react-router-dom";
import imgAbout from "./korra2.jpg";

function App() {
  const user = false;
  return (
    <Router>
        <div className="TopNavBar">
          <nav>
            <ul className="listItems">
              <li className="topItem">
                <Link className="link" to="/" >Home</Link>
              </li>
              <li className="topItem"><Link className="link" to="/about" >Sobre</Link></li>
              <li className="topItem"><Link className="link" to="/contact" >Contato</Link></li>
              <li className="topItem"><Link className="link" to="/write" >Postar</Link></li>
              <li className="topItem">
                {user &&  "Logout"}
              </li>
              <li className="photoPerfil">
                {
                  user ? (
                    <img src={imgAbout} alt="Imagem de perfil do usuário" />
                   ) : (
                      <ul className="listItems">
                        <li className="topItem"><Link className="link" to="/login" >Login</Link></li>
                        <li className="topItem"><Link className="link" to="/register" >Cadastrar</Link></li>
                      </ul>
                  )
                }
              </li>
            </ul>
          </nav>
        </div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}> 
            <Home /> 
          </Route>
          <Route path="/login" exact component={Login} > {user ? <Home/> : <Login /> } </Route>
          <Route path="/register" exact component={Register} > {user ? <Home/> : <Register /> } </Route>
          <Route path="/settings" exact component={Settings} > {user ? <Settings/> : <Register /> } </Route>
          <Route path="/post/:postId" exact component={Single} > <Single /></Route>
          <Route path="/write" exact component={Write} > {user ? <Write/> : <Register /> } </Route>
          <Route path="/about" exact component={About} > <About /></Route>
          <Route path="/contact" exact component={Contact} > <Contact /></Route>
          <Route path="*" exact component={NotFound} > <NotFound /></Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
