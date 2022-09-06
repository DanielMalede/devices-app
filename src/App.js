import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import Header from './components/features/Header/Header';
// import LinkedList from './Class'
// import Node from './Class'
const pages = ["Home","Devices"];
function App() {
  return (
    <div className="App">
      <B.rowserRouter>
      <Header/>
      <Router/>
      </B.rowserRouter>
      {/* <LinkedList/>
      <Node/> */}
    </div>
  );
}
export default App;
