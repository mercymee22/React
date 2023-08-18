import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />  {/*App.js Renders these 3 components*/}
      <Routes>
          <Route path='/' element={<HomePage />} />  {/*All element props are components, and are passed using curly braces. (HomePage)*/}
          <Route path='contact' element={<ContactPage />} /> {/*element prop tells the path what compenent to render when the path is requested.*/}
          <Route path='directory' element={<CampsitesDirectoryPage />} />
           {/*colon lets react router know, campsiteId is a route parameter name, not a literal path. If there is something after the forward slash in the url, this will kick in otherwise it won't*/}
          <Route  
              path='directory/:campsiteId'  
              element={ <CampsiteDetailPage />} />
          <Route path='about' element={<AboutPage />} />
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
