import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import { Logout } from "./pages/Logout";
import Footer from "./components/Footer";
import { Error } from "./pages/Error";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};
export default App