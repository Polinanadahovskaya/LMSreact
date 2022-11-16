import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Pages/SignUp';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
import Starsrating from './pages/Starsrating';
import Notfounde from './Pages/Notfounde';
import Courseabout from './Pages/Courseabout';
import Coursepage from './Pages/Coursepage';
import Modulepage from './Pages/Modulepage';
import Hellopage from './Pages/Hellopage';
import Test from './Pages/Test';

const App = () => {
  return (
    <>
      <nav>
        <ul className="links-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courseabout">CourseAbout</Link>
          </li>
          <li>
            <Link to="/coursepage">CoursePage</Link>
          </li>
          <li>
            <Link to="/modulepage">ModulePage</Link>
          </li>
          <li>
            <Link to="/hellopage">HelloPage</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/staspage">Staspage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfounde />} />
        <Route path="courseabout" element={<Courseabout />} />
        <Route path="coursepage" element={<Coursepage />} />
        <Route path="modulepage" element={<Modulepage />} />
        <Route path="hellopage" element={<Hellopage />} />
        <Route path="test" element={<Test />} />
        <Route path="staspage" element={<Starsrating />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
