import React, { useState, useEffect } from 'react'
import steamImage from '../images/Steam_icon.svg'
import twitterImage from '../images/TwitterSvg.svg'
import { EditCards } from './EditCards'
export function AddNewGame({ showAddGame, switchAddGameShown, addNewCard }) {
  if (showAddGame === true) {
    return (
      <div className="AddGameScreen">
        <form
          className="formSection"
          onSubmit={(e) => {
            addNewCard(e)
          }}
        >
          <label htmlFor="name">name:</label>
          <input id="name" required></input>
          <label htmlFor="date">Release date: </label>
          <input type="date" id="date"></input>
          <label htmlFor="website">Website: </label>
          <input type="text" id="website"></input>
          <label htmlFor="cardimg">Image: </label>
          <input id="cardimg"></input>
          <label htmlFor="steam">Steam: </label>
          <input id="steam"></input>
          <label htmlFor="twitterInput">Twitter: </label>
          <input id="twitterInput"></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
function emptyObject() {
  const objectEmpty = {
    name: '',
    releaseDate: '',
    website: '',
    websiteSteam: '',
    twitter: '',
    tags: '',
    imageLink: '',
    edit: true,
  }

  return objectEmpty
}
