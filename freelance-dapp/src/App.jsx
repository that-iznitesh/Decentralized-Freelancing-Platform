import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalNetwork from "./components/GlobalNetwork";
import RoleSelectModal from "./components/RoleSelectModal";
import ProtectedRoute from "./components/ProtectedRoute";

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
      <RoleSelectModal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Marketplace />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route
          path="/create-job"
          element={
            <ProtectedRoute role="client">
              <CreateJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute role="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/freelancer-dashboard"
          element={
            <ProtectedRoute role="freelancer">
              <FreelancerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <GlobalNetwork />
      <Footer />
    </BrowserRouter>
  );
}

export default App;