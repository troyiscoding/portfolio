import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const NetflixTitle = React.lazy(() => import('./NetflixTitle'));
const Browse = React.lazy(() => import('./browse/browse'));
const ProfilePage = React.lazy(() => import('./profilePage/profilePage'));
const WorkPermit = React.lazy(() => import('./pages/WorkPermit'));
const WorkExperience = React.lazy(() => import('./pages/WorkExperience'));
const Recommendations = React.lazy(() => import('./pages/Recommendations'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ContactMe = React.lazy(() => import('./pages/ContactMe'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const NaturePhotography = React.lazy(() => import('./pages/NaturePhotography'));
const HomeHPC = React.lazy(() => import('./pages/HomeHPC'));
const ResumeRedirect = React.lazy(() => import('./pages/ResumeRedirect'));
const Layout = React.lazy(() => import('./Layout'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div style={{ backgroundColor: '#141414', height: '100vh', width: '100vw' }} />}>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
        <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
        <Route path="/photography" element={<Layout><NaturePhotography /></Layout>} />
        <Route path="/hpc" element={<Layout><HomeHPC /></Layout>} />
        <Route path="/resume" element={<ResumeRedirect />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
