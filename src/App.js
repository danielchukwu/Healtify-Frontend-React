import Home from "./Home.js";
import './index.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Appointment } from "./Appointment";
import Booked from "./Booked.js";

function App() {

  return (
    <Router>

    <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<Appointment />} />
          <Route path="/successful" element={<Booked />} />
          {/* <Route path='/register' element= /> */}
        </Routes>
    </div>

    </Router>
  );
}

export default App;
