import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import ForumPage from "./pages/ForumPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
