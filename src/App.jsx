import Home from "./Layouts/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./assets/styles.css"
import HomeOutlet from "./view/home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}> 
          <Route index element={<HomeOutlet />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
