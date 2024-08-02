import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import axios from 'axios'
import {action,originals} from './urls'

function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix originals' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
