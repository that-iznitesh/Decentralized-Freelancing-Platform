import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Freelancer from "./pages/Freelancer";
import SubmitWork from "./pages/SubmitWork";
import Footer from "./components/Footer";
import GlobalNetwork from "./components/GlobalNetwork";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/submit-work" element={<SubmitWork />} />
      </Routes>
      <GlobalNetwork />

      <Footer />


    </BrowserRouter>
  );
}

export default App;