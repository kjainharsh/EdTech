import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};
export default App