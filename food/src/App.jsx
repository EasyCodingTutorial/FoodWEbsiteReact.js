import './App.css'

// For React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// For Layout
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'


// For Pages
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={[<Navbar />, <Home />, <Footer />]}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
