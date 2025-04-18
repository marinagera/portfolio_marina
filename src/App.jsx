import { Routes, Route } from "react-router";
import HomePage from './pages/homepage/HomePage';
import LayoutComponent from './pages/layout/Layout';
import ProjectsComponent from './pages/projects/ProjectsComponent';
import AboutComponent from './pages/about/AboutComponent';
import ContactComponent from './pages/contact/ContactComponent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent/>}>
        <Route index element={<HomePage/>} />
        <Route path='projects' element={<ProjectsComponent/>} />
        <Route path='about' element={<AboutComponent/>} />
        <Route path='contact' element={<ContactComponent/>} />
      </Route>
    </Routes>
  )
}

export default App;
