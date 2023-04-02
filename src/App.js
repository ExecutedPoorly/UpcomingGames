import "./App.css";
import Genres from "./components/genres";
import FillCards from "./components/fillCards";
import SearchField from "./components/searchField";
import { PopUpBox } from "./components/popUpBox";
import { useState, useEffect } from "react";

function App() {
	const dataJson = require("./components/jsonData/Games.json");
	const [genreTags, setGenreTags] = useState([]);
	const [searchField, setSearchField] = useState("");
	const [customGames, setCustomGames] = useState(false);
	const [renderDialogue, setRenderDialogue] = useState(false);
	const negativeColour = '#0a0a0a';
  const selectedColour = '#00ced1';
	
	
	if (localStorage.getItem('customGames') === null) {
		localStorage.setItem("customGames", JSON.stringify(dataJson));
	}
	function clearData() {
		localStorage.setItem("customGames", JSON.stringify(dataJson));
		confirmClear();
	}

	function getJsonData(forceGrab) {
	if (localStorage.getItem('customGames') !== null) {
		const localStorageJson = JSON.parse(localStorage.getItem('customGames'));
		return localStorageJson;
	}}

	function  switchCustomGames() {
		customGames == false ? setCustomGames(true) : setCustomGames(false);
	}

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
	function confirmClear() {
		renderDialogue === true ? setRenderDialogue(false) : setRenderDialogue(true);
	}

	return (
		<div className="App">
			<header className="App-header">Upcoming Games</header>
			<Genres populateFunction={populate} genreTags={genreTags}></Genres>
			<div className="Bottomheaderbar">
				<div className="HeaderLeft">
					<button onClick={switchCustomGames} className="BlueBtn" style={{background: customGames === true ? selectedColour : negativeColour}}>PERSONAL GAME LIST</button>
					<button onClick={confirmClear} id="clearStorage">RESET MY GAMES</button>
				</div>
				<SearchField
						updateSearch={updateSearch}
						searchField={searchField}
					></SearchField>
			</div>

			<div className="main">
				{renderDialogue === true ? <PopUpBox title="Confirm reset of your saved games?" text="WARNING: This will irreversibly reset any changes you have made!" confirmOption={clearData} declineOption={confirmClear}></PopUpBox> : null}
				<FillCards
					customGames={customGames}		
					genreTags={genreTags}
					dataJson={customGames === false ? dataJson : getJsonData()}
					searchField={searchField}
				></FillCards>
			</div>
		</div>
	);
}

export default App;
