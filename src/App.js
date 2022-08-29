import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import Header from './components/features/Header/Header';
const pages = ["Home","Devices"];

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
