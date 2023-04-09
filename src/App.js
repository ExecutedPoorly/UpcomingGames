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
	const [renderForm, setRenderForm] = useState(false);
	const [updateLocalStorage, setUpdateLocalStorage] = useState(true);
	const negativeColour = '#0a0a0a';
  const selectedColour = '#00ced1';
	function fnUpdateLocalStorage() {
		updateLocalStorage === true ? setUpdateLocalStorage(false) : setUpdateLocalStorage(true);
	}

	function editIndividualCard(params, ...args) {
		console.log(params, "Wee", args);
		if (args.length < 1) {
			let jsonToChange = getJsonData();
			console.log(jsonToChange[params].edit === false, "test")
			jsonToChange[params].edit === false ? jsonToChange[params].edit = true : jsonToChange[params].edit = false;
			localStorage.setItem("customGames", JSON.stringify(jsonToChange));
			fnUpdateLocalStorage();

	}
		else {
			let jsonToChange = getJsonData();
			jsonToChange[params] = {...jsonToChange[params], ...(args[0])};
			localStorage.setItem("customGames", JSON.stringify(jsonToChange));
			jsonToChange[params].edit === false ? jsonToChange[params].edit = true : jsonToChange[params].edit = false;
			fnUpdateLocalStorage();
		}

	}
	
	if (localStorage.getItem('customGames') === null) {
		localStorage.setItem("customGames", JSON.stringify(dataJson));
	}

	function switchRenderForm() {
		renderForm === false ? setRenderForm(true) : setRenderForm(false);
	}

	function clearData() {
		localStorage.setItem("backupCustomGames", JSON.stringify(getJsonData()));
		localStorage.setItem("customGames", JSON.stringify(dataJson));
		confirmClear();
	}

	function getJsonData(forceGrab) {
	if (localStorage.getItem('customGames') !== null) {
		const localStorageJson = JSON.parse(localStorage.getItem('customGames'));
		return localStorageJson;
	}}

	function switchCustomGames() {
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
	
					renderFormStatus={renderForm}
					setRenderForm={switchRenderForm}
					customGames={customGames}		
					genreTags={genreTags}
					dataJson={customGames === false ? dataJson : getJsonData()}
					searchField={searchField}
					changeData={editIndividualCard}
				></FillCards>
			</div>
		</div>
	);
}

export default App;
