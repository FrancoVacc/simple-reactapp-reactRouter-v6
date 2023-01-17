import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogItem from "./pages/BlogItem";


function App() {


  return (
    <div>
      <h1>React router v6</h1>
      <Navbar/>
      <Routes>
        <Route element={<LayoutPublic/>} path="/">
            <Route element={<Inicio/>} index></Route>
            <Route element={<Blog/>} path="/blog"></Route>
            <Route element={<BlogItem/>} path="/blog/:id"></Route>
            <Route element={<Contacto/>} path="/contacto"></Route>
        </Route>
        <Route element={<NotFound/>} path="*"/>
        </Routes>
    </div>
  )
}

export default App
