import React, { useState, useEffect } from 'react'
import steamImage from '../images/Steam_icon.svg'
import twitterImage from '../images/TwitterSvg.svg'
import './css/addNewCards.css'
import { EditCards } from './EditCards'
import Select from 'react-select'
export function AddNewGame({ showAddGame, switchAddGameShown, addNewCard }) {
  const [selectedTags, setSelectedTags] = useState([])

  const options = [
    { value: 'MMO', label: 'MMO' },
    { value: 'RPG', label: 'RPG' },
    { value: 'YES', label: 'YES' },
    { value: 'FPS', label: 'FPS' },
  ]
  function handleTagsChange(selectedOptions) {
    setSelectedTags(selectedOptions)
  }

  function validateForm() {
    if (selectedTags.length === 0) {
      alert('Please select at least one tag')
      return false
    }
    return true
  }

  if (showAddGame === true) {
    return (
      <div className="AddGameScreen">
        <form
          className="formSection"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(selectedTags, 'test')
            addNewCard(e, selectedTags)
          }}
        >
          <button id="switchMe" onClick={switchAddGameShown}>
            X
          </button>
          <label htmlFor="name">name:</label>
          <input id="name" required></input>
          <label htmlFor="date">Release date: </label>
          <input type="date" id="date"></input>
          <label htmlFor="website">Website: </label>
          <input type="text" id="website"></input>
          <label htmlFor="cardImg">Image: </label>
          <input id="cardImg"></input>
          <label htmlFor="steam">Steam: </label>
          <input id="steam" type="url"></input>
          <label htmlFor="twitterInput">Twitter: </label>
          <input id="twitterInput"></input>
          <label htmlFor="tags">Tags: </label>
          <Select
            options={options}
            onChange={(selectedOptions) => {
              handleTagsChange(selectedOptions)
            }}
            isMulti
            id="tags"
            className="react-select-container"
            classNamePrefix="react-select"
            required
          ></Select>

          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
// create a new function named fish, that console.logs "wee"
457
