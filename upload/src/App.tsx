import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Upload from './views/upload/Upload';
import { UserProvider } from 'mediastore/UserContext';
import { MediaProvider } from 'mediastore/MediaContext';
import TopBar from 'topbar/TopBar';

function App() {
  return (
    <UserProvider>
      <MediaProvider>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<Upload />} />
          </Routes>
        </Router>
      </MediaProvider>
    </UserProvider>
  );
}

export default App;
