import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Register from "./Auth/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
