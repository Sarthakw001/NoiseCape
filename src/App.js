import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Primary from './Components/Primary';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/primary' element={<Primary/>}/>
    </Routes>
  </Router>
  );
}

export default App;
