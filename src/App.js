import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import CTA from "./pages/CTA";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        
          <Layout>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/one" element={<PageOne />} />
            <Route path="/two" element={<PageTwo />} />
            <Route path="/three" element={<PageThree />} />
            <Route path="/cta" element={<CTA />} />
            </Routes>
          </Layout>
     
      </BrowserRouter>
    </>
  );
}

export default App;
