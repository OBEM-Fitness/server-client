import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExercisePage from './pages/Exercise/ExercisePage';
import GlobalStyles from './GlobalStyles.style';
import Welcome from './pages/Welcome/Welcome';
// import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/exercises" element={<ExercisePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
