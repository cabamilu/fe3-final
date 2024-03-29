
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/utils/global.context";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Contact from "./routes/Contact";
import Favs from "./routes/Favs"
import { Layout } from "./layout/Layout";


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
