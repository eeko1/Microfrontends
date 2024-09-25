import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "mediastore/UserContext";
import { MediaProvider } from "mediastore/MediaContext";
import TopBar from './components/topbar/TopBar';


const App = () => {
  return (
    <Router>
      <UserProvider>
        <MediaProvider>
          <TopBar/>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
};

export default App;