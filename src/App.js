import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route
    // Link
  } from "react-router-dom";

import Bedding from './Screens/Bedding/Bedding'
import Cushions from './Screens/Cushions/Cushions'
import SofaCovers from './Screens/SofaCovers/SofaCovers'
import ChairCovers from './Screens/ChairCovers/ChairCovers'
import Waterproof from './Screens/Waterproof/Waterproof'
import StorageBags from './Screens/StorageBags/StorageBags'
import Accessories from './Screens/Accessories/Accessories'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {

return (
  <div className="home">
      <Router>
          <Header />
          <Routes>
              <Route exact  path="/" element={ <Home /> } />
              <Route exact  path="/bedding" element={ <Bedding /> } />
              <Route exact  path="/cushions" element={ <Cushions /> } />
              <Route exact  path="/sofacovers" element={ <SofaCovers /> } />
              <Route exact  path="/chaircover" element={ <ChairCovers /> } />
              <Route exact  path="/waterproof" element={ <Waterproof /> } />
              <Route exact  path="/storagebags" element={ <StorageBags /> } />
              <Route exact  path="/accessories" element={ <Accessories /> } />
          </Routes>
      </Router>
      
      {/* <Footer /> */}
  </div>
)
}

export default App;
