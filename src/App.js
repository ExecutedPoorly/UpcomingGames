
import './App.css';
import Genres from './components/genres';
import FillCards from './components/fillCards';
import { useState } from 'react';






function App() {
  const dataJson = require('./components/jsonData/Games.json');
  const [genreTags, setGenreTags] = useState([]);

  function populate(genreTagParam) {
    console.log(genreTagParam);
  }


  return (
    <div className="App">
      <header className="App-header">
        Upcoming games!
      </header>
      <Genres populateFunction={populate} genreTags={genreTags}></Genres>
      <div className="main">
      <FillCards genreTags={genreTags} dataJson={dataJson}></FillCards>        
      </div>
    </div>
  );
}

export default App;
