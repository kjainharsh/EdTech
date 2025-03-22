import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
import { AdminUsers } from "./pages/Admin-Users";
import { AdminUpdate } from "./pages/Admin-Update";
import { AdminCourses } from "./pages/Admin-Course";
import { AdminCourseUpdate } from "./pages/Admin-CourseUpdate";
import { AdminCourseInsert } from "./pages/Admin-CourseInsert";
import Notifications from "./pages/Notifications";
import AdminNotifications from "./pages/Admin-Notifications";
import Cart from "./pages/Cart"; 
import MyProfiles from "./pages/MyProfiles";
import EditProfiles from "./pages/EditProfiles";
import Features from "./pages/Features";

const App = () => {
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? JSON.parse(savedCartCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cartCount} /> 
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/courses" element={<Courses cartCount={cartCount} setCartCount={setCartCount} />} /> {/* Pass cartCount and setCartCount as props */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/myprofile" element={<MyProfiles />} /> {/* Uncommented the MyProfiles route */}
          <Route path="/edit-profile/:id" element={<EditProfiles />} /> {/* Added the EditProfiles route */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="courses/insert" element={<AdminCourseInsert />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="courses/:id/edit" element={<AdminCourseUpdate />} />
            <Route path="notifications" element={<AdminNotifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;