import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import UserSearch from "./components/users/UserSearch";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GitHubProvider} from './context/github/gitHubContext'
import User from "./components/layout/User";
import About from "./components/pages/About";

function App() {
  return (
    <GitHubProvider>

    <div className="App">
        <Router>
        <Navbar />
          <main className="main">
            <div className="container mx-auto">
            <Routes>
              <Route path="/" element = {<UserSearch />}/>
              <Route path="/about" element = {<About />}/>
              <Route exact path="/user/:login" element = {<User />}/>
            </Routes>

            </div>
          </main>
        </Router>
        <Footer />
    </div>
    </GitHubProvider>
  );
}

export default App;
