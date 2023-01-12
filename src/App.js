import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Primary from './Components/Primary';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <h1>hello this is me sarthk tyagi ji </h1>
      <Route path='/primary' element={<Primary/>}/>
    </Routes>
  </Router>
  );
}

export default App;
