// import './App.css';
// import Contact from './components/Contact/Contact';
// import Home from './components/Home/Home';
// import Ecectika_Gallery from './components/Main_Gallery/Gallery';
// import Sponsor from './components/Sponsors/Sponsor';
import OverallTeam from './components/Team/Overall_Team';
// import MultiActionAreaCard from './materialUI/CardComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import OverAllDesign from './OverAll_Design';
import MainEvents from './components/Events/MainEvents';
import Merchandise from './components/Merchandise/Merchandise';



function App() {
  return (
    <div>
    
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< OverAllDesign />}></Route>
                 <Route  path='team' element={< OverallTeam/>}></Route>
                 <Route  path='events' element={< MainEvents/>}></Route>
                 <Route  path='merchandise' element={< Merchandise/>}></Route>
          </Routes>
          </div>
       </Router>
   </div>
  );
}

export default App;
