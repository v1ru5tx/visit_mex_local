import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
// import Destinations from './pages/destinations';
// import Destination from './pages/destination';
// import Experience from './pages/experience';
// import ExperienceWedding from './pages/experienceWedding';
// import ExperienceAventure from './pages/experienceAventure';
// import ExperienceWellness from './pages/experienceWellness';
// import ExperienceSustainable from './pages/experienceSustainable';
// import ExperienceSunAndBeach from './pages/experienceSunAndBeach';
// import Calendario from './pages/calendario';
// import InternationalEvents from './pages/internationalEvents';
// import Blog from './pages/blog';
// import Videos from './pages/videos';
// import GuiasTuristicas from './pages/guiasTuristicas'
// import DiaMuertos from './pages/diaMuertos';
// import TrenMaya from './pages/trenMaya';
// import MagicTowns from './pages/magicTowns';
// import MariaIslands from './pages/mariaIslands';
// import Wines from './pages/wines';
// import Post from './pages/blog/post/';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/destinos' element={<Destinations />} />
          <Route path='/destinos/:id' element={<Destination />} />
          <Route path='/experiencias/bodas' element={<ExperienceWedding />} />
          <Route path='/experiencias/aventura' element={<ExperienceAventure />} />
          <Route path='/experiencias/bienestar' element={<ExperienceWellness />} />
          <Route path='/experiencias/sostenible' element={<ExperienceSustainable />} />
          <Route path='/experiencias/sol-y-playa' element={<ExperienceSunAndBeach />} />
          <Route path='/experiencias/rutas-gastronomicas' element={<Experience />} />
          <Route path='/experiencias/vinos' element={<Wines />} />
          <Route path='/experiencias/:id' element={<Experience />} />
          <Route path="/*" element={<Home />} />
          <Route path='/calendario' element={<Calendario />} />
          <Route path='/eventos-internacionales' element={<InternationalEvents />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/guias-turisticas' element={<GuiasTuristicas />} />
          <Route path='/dia-de-muertos' element={<DiaMuertos />} />
          <Route path='/tren-maya' element={<TrenMaya />} />
          <Route path="/pueblos-magicos" element={<MagicTowns />} />
          <Route path="/islas-marias" element={<MariaIslands />} />
          <Route path="/post" element={<Post />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
