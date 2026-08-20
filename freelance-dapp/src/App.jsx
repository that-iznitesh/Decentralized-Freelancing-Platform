import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalNetwork from "./components/GlobalNetwork";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Marketplace />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
      </Routes>

      <GlobalNetwork />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
