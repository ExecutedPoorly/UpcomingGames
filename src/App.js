
import './App.css';
import Genres from './components/genres';
import FillCards from './components/fillCards';
import SearchField from './components/searchField';
import { useState } from 'react';



function App() {
  const dataJson = require('./components/jsonData/Games.json');
  const [genreTags, setGenreTags] = useState([]);
  const [searchField, setSearchField] = useState("");

  function updateSearch (searchFieldParam) {
    setSearchField(searchFieldParam.target.value);
    
  }

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
        Upcoming Games
      </header>
      <Genres populateFunction={populate} genreTags={genreTags}></Genres>
      <SearchField updateSearch={updateSearch} searchField={searchField}></SearchField>
      <div className="main">
      <FillCards genreTags={genreTags} dataJson={dataJson} searchField={searchField}></FillCards>        
      </div>
      
    </div>
  );
}

export default App;
