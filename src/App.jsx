import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Uncategorised from './pages/Uncategorised';
import AuthorSoak from './pages/AuthorSoak';
import MetricPcm from './pages/MetricPcm';
import ThankYou from './pages/ThankYou';
import ProjectConstructionManagement from './pages/ProjectConstructionManagement';
import Error533 from './pages/Error533';
import ShutdownManagement from './pages/ShutdownManagement';
import CommissioningManagement from './pages/CommissioningManagement';
import RecentProjects from './pages/RecentProjects';
import OwnerRepresentation from './pages/OwnerRepresentation';
import ContactUs from './pages/ContactUs';
import RiskManagement from './pages/RiskManagement';
import OurServices from './pages/OurServices';
import AboutMetricPcm from './pages/AboutMetricPcm';
import PortfolioManagement from './pages/PortfolioManagement';
import Team from './pages/Team';
import JamesMorgan from './pages/JamesMorgan';
import JoshGelder from './pages/JoshGelder';
import DavidMorgan from './pages/DavidMorgan';
import ScottFletcher from './pages/ScottFletcher';
import GeorgiaEast from './pages/GeorgiaEast';
import AndrewRolfe from './pages/AndrewRolfe';
import HelloWorld from './pages/HelloWorld';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/uncategorised" element={<Uncategorised />} />
          <Route path="/authorsoak" element={<AuthorSoak />} />
          <Route path="/metricpcm" element={<MetricPcm />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/projectconstructionmanagement" element={<ProjectConstructionManagement />} />
          <Route path="/error533" element={<Error533 />} />
          <Route path="/shutdownmanagement" element={<ShutdownManagement />} />
          <Route path="/commissioningmanagement" element={<CommissioningManagement />} />
          <Route path="/recentprojects" element={<RecentProjects />} />
          <Route path="/ownerrepresentation" element={<OwnerRepresentation />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/riskmanagement" element={<RiskManagement />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/aboutmetricpcm" element={<AboutMetricPcm />} />
          <Route path="/portfoliomanagement" element={<PortfolioManagement />} />
          <Route path="/team" element={<Team />} />
          <Route path="/jamesmorgan" element={<JamesMorgan />} />
          <Route path="/joshgelder" element={<JoshGelder />} />
          <Route path="/davidmorgan" element={<DavidMorgan />} />
          <Route path="/scottfletcher" element={<ScottFletcher />} />
          <Route path="/georgiaeast" element={<GeorgiaEast />} />
          <Route path="/andrewrolfe" element={<AndrewRolfe />} />
          <Route path="/helloworld" element={<HelloWorld />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;