import Home from "./Layouts/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./assets/styles.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
