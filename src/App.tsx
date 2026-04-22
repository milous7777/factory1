import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { LanguageProvider } from './theme/LanguageContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Diurne from './pages/Diurne';
import Nocturne from './pages/Nocturne';
import Formations from './pages/Formations';
import FormationDetails from './pages/FormationDetails';
import Graduates from './pages/Graduates';
import Gallery from './pages/Gallery';
import Inscription from './pages/Inscription';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="diurne" element={<Diurne />} />
              <Route path="nocturne" element={<Nocturne />} />
              <Route path="formations" element={<Formations />} />
              <Route path="formations/:category/:type" element={<FormationDetails />} />
              <Route path="diplomes" element={<Graduates />} />
              <Route path="galerie" element={<Gallery />} />
              <Route path="inscription" element={<Inscription />} />
              <Route path="a-propos" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
