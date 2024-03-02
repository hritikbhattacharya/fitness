import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
