import "./App.css";
import Genres from "./components/genres";
import FillCards from "./components/fillCards";
import SearchField from "./components/searchField";
import { useState, useEffect } from "react";

function App() {
	const dataJson = require("./components/jsonData/Games.json");
	const [genreTags, setGenreTags] = useState([]);
	const [searchField, setSearchField] = useState("");
	const [customGames, setCustomGames] = useState(false);
	const negativeColour = '#0a0a0a';
  const selectedColour = '#00ced1';

	// if (localStorage.getItem('customGames') !== null) {
	// 	console.log("using custom games");
	// }

	function  switchCustomGames() {
		customGames == false ? setCustomGames(true) : setCustomGames(false);

	}
	useEffect(() => {
		if (customGames === true && localStorage.getItem('customGames') === null) {
			localStorage.setItem("customGames", JSON.stringify(dataJson));
			
		}
  }, [customGames]);

	function updateSearch(searchFieldParam) {
		setSearchField(searchFieldParam.target.value);
	}

	function populate(genreTagParam) {
		if (genreTags.includes(genreTagParam)) {
			const copyGenreTags = genreTags;
			copyGenreTags.splice(copyGenreTags.indexOf(genreTagParam), 1);
			// console.log(copyGenreTags);
			setGenreTags([...copyGenreTags]);
		} else {
			setGenreTags([...genreTags, genreTagParam]);
		}
	}

	return (
		<div className="App">
			<header className="App-header">Upcoming Games</header>
			<Genres populateFunction={populate} genreTags={genreTags}></Genres>
			<div className="Bottomheaderbar">
				<button onClick={switchCustomGames} style={{background: customGames === true ? selectedColour : negativeColour}}>Personal Game List</button>
				<SearchField
					updateSearch={updateSearch}
					searchField={searchField}
				></SearchField>
			</div>

			<div className="main">
				<FillCards
					customGames={customGames}		
					genreTags={genreTags}
					dataJson={customGames === false ? dataJson : JSON.parse(localStorage.getItem("customGames"))}
					searchField={searchField}
				></FillCards>
			</div>
		</div>
	);
}

export default App;
