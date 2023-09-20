import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ScrollTop } from "./utils/ScrollTop";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
