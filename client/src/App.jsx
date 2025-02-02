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
import { Courses } from "./pages/Courses";
import { AdminLayout } from "./components/Layouts/Admin-Layout";
import { AdminContacts } from "./pages/Admin-Contacts";

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
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};
export default App