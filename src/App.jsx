
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import { Layout } from "./Layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
