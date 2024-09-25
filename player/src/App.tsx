import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from 'mediastore/UserContext';
import { MediaProvider } from 'mediastore/MediaContext';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <MediaProvider>
          <Routes>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
