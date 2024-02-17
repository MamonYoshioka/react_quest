import './css/App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SnsPage from './components/SnsPage';
import { BrowserRouter as Router,  Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/sns' element={<SnsPage />}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
