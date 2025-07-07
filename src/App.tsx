import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ExperiencePage from "./pages/experience";
import ContactPage from "./pages/contact";
import Layout from "./components/layout";
import NotFound from "./pages/not-found";
import ProjectPage from "./pages/project";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/projects/:projectSlug/:projectId"
            element={<ProjectPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
