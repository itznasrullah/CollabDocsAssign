import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import JoinRoom from "./components/JoinRoom";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <JoinRoom /> } />
          <Route path='/document/:id' element={ <Editor /> } />
          <Route path='*' element={ <Navigate to="/" /> }/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
