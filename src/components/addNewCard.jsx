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
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '2px solid blue' : '2px solid #ccc',
      boxShadow: state.isFocused ? '0 0 3px #aaa' : 'none',
      borderRadius: '10px',
      '&:hover': {
        border: state.isFocused ? '2px solid blue' : '2px solid #999',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#ddd' : 'white',
      '&:hover': {
        backgroundColor: '#ddd',
      },
    }),
  }
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
            addNewCard(e)
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
            styles={customStyles}
            options={options}
            isMulti
            id="tags"
            className="react-select-container"
            classNamePrefix="react-select"
          ></Select>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
