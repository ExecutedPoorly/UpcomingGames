
import './App.css';
import Genres from './components/genres';
import FillCards from './components/fillCards';
import { useState } from 'react';


function App() {
  const dataJson = require('./components/jsonData/Games.json');
  const [genreTags, setGenreTags] = useState([]);

  function populate(genreTagParam) {
    if (genreTags.includes(genreTagParam)){
      const copyGenreTags = genreTags;
      copyGenreTags.splice(copyGenreTags.indexOf(genreTagParam), 1);
      // console.log(copyGenreTags);
      setGenreTags([...copyGenreTags])
  }
    else {
      setGenreTags([...genreTags, genreTagParam])
    }
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
