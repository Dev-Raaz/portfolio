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
import { Helmet } from 'react-helmet'

//User Defined imports
import { Navbar } from './components'
import { HomePage } from './pages'
import { Footer } from './components'

function App() {
  return (
    <Router>
      <>
        <Helmet>
        <link rel="stylesheet" 
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        </Helmet>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
