/**
 * @titl Main Component
 * @desc All the pages are assembled here.
 */

import 
{
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

//User Defined imports
import {Navbar} from './components'
import {HomePage} from './pages'

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
