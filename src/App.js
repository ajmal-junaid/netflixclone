import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,comedy,documentaries,horror,originals, romance} from './urls'
function App() {
  return (
     <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={comedy} title='Comedy-Movies' isSmall/>
      <RowPost url={horror} title='Horror-Movies' isSmall/>
      <RowPost url={romance} title='Romantic-Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
     </div>
  );
}

export default App;
