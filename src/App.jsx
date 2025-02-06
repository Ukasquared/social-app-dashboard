import Home from "./Layouts/Home"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import "./assets/styles.css"
import HomeOutlet from "./view/home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}> 
          <Route index element={<HomeOutlet />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
