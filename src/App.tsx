import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TestimonialsPage from './pages/TestimonialsPage';
import ListingsPage from './pages/ListingsPage';
import SoldPage from './pages/SoldPage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceArticlePage from './pages/ResourceArticlePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="sold" element={<SoldPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:id" element={<ResourceArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="py-12 text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Page Not Found</h1>
              <p className="text-xl text-gray-600">The page you are looking for doesn't exist.</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
