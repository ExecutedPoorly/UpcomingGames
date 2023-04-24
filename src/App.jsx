import './App.css'
import Genres from './components/genres'
import FillCards from './components/fillCards'
import SearchField from './components/searchField'
import { PopUpBox } from './components/popUpBox'
import { useState, useEffect } from 'react'
import { AddNewGame } from './components/addNewCard'
import { useShowAddGameState } from './stateTest/StateTest.jsx'

function App() {
  const dataJson = require('./components/jsonData/Games.json')
  const [genreTags, setGenreTags] = useState([])
  const [searchField, setSearchField] = useState('')
  const [customGames, setCustomGames] = useState(false)
  const [renderDialogue, setRenderDialogue] = useState(false)
  const [renderForm, setRenderForm] = useState(false)
  const [updateLocalStorage, setUpdateLocalStorage] = useState(true)
  const negativeColour = '#0a0a0a'
  const selectedColour = '#00ced1'
  const [showAddGame, switchAddGameShown] = useShowAddGameState()

  function fnUpdateLocalStorage() {
    setUpdateLocalStorage((updateLocalStorage) => !updateLocalStorage)
  }

  function editIndividualCard(params, ...args) {
    if (args.length < 1) {
      //toggles edit
      let jsonToChange = getJsonData()
      jsonToChange[params].edit === false
        ? (jsonToChange[params].edit = true)
        : (jsonToChange[params].edit = false)
      localStorage.setItem('customGames', JSON.stringify(jsonToChange))
      fnUpdateLocalStorage()
    } else {
      //edits entry
      let jsonToChange = getJsonData()
      jsonToChange[params] = { ...jsonToChange[params], ...args[0] }
      jsonToChange[params].edit === false
        ? (jsonToChange[params].edit = true)
        : (jsonToChange[params].edit = false)
      localStorage.setItem('customGames', JSON.stringify(jsonToChange))
      fnUpdateLocalStorage() //
    }
  }
  function addNewCard(e) {
    e.preventDefault()
    console.log(e.target)
    let jsonToChange = getJsonData()
    console.log(jsonToChange.length)
  }
  if (localStorage.getItem('customGames') === null) {
    localStorage.setItem('customGames', JSON.stringify(dataJson))
  }

  function switchRenderForm() {
    setRenderForm((renderForm) => !renderForm)
  }

  function clearData() {
    localStorage.setItem('backupCustomGames', JSON.stringify(getJsonData()))
    localStorage.setItem('customGames', JSON.stringify(dataJson))
    setRenderDialogue((renderDialogue) => !renderDialogue)
  }

  function getJsonData(forceGrab) {
    if (localStorage.getItem('customGames') !== null) {
      const localStorageJson = JSON.parse(localStorage.getItem('customGames'))
      return localStorageJson
    }
  }

  function updateSearch(searchFieldParam) {
    setSearchField(searchFieldParam.target.value)
  }

  function populate(genreTagParam) {
    if (genreTags.includes(genreTagParam)) {
      const copyGenreTags = genreTags
      copyGenreTags.splice(copyGenreTags.indexOf(genreTagParam), 1)
      // console.log(copyGenreTags);
      setGenreTags([...copyGenreTags])
    } else {
      setGenreTags([...genreTags, genreTagParam])
    }
  }

  return (
    <div className="App">
      <header className="App-header">Upcoming Games</header>
      <Genres populateFunction={populate} genreTags={genreTags}></Genres>
      <div className="Bottomheaderbar">
        <div className="HeaderLeft">
          <button
            onClick={() => {
              setCustomGames((customGames) => !customGames)
            }}
            className="BlueBtn"
            style={{
              background:
                customGames === true ? selectedColour : negativeColour,
            }}
          >
            PERSONAL GAME LIST
          </button>
          <button
            onClick={() => {
              setRenderDialogue((renderDialogue) => !renderDialogue)
            }}
            id="clearStorage"
          >
            RESET MY GAMES
          </button>
          <button onClick={switchAddGameShown} id="addNewGame">
            ADD NEW GAME +
          </button>
        </div>
        <SearchField
          updateSearch={updateSearch}
          searchField={searchField}
        ></SearchField>
      </div>

      <div className="main">
        <AddNewGame
          addNewCard={addNewCard}
          showAddGame={showAddGame}
          switchAddGameShown={switchAddGameShown}
        />
        {renderDialogue === true ? (
          <PopUpBox
            title="Confirm reset of your saved games?"
            text="WARNING: This will irreversibly reset any changes you have made!"
            confirmOption={clearData}
            declineOption={() => {
              setRenderDialogue((renderDialogue) => !renderDialogue)
            }}
          ></PopUpBox>
        ) : null}

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
  )
}

export default App
