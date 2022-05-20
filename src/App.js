import ParentsPortfolioSection from "./Components/portfolioSection/parents/ParentsPortfolioSection";
import ParentsCoverLetterPage from "./Components/coverLetter/parents/ParentsCoverLetterPage";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ParentsPortfolioSection />} />
        <Route path="/coverLetter" element={<ParentsCoverLetterPage />} />
      </Routes>
    </>
  );
}

export default App;
