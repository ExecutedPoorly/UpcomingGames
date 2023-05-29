import { React, useEffect, useState } from 'react'
import './css/fillcards.css'
import steamImage from '../images/Steam_icon.svg'
import twitterImage from '../images/TwitterSvg.svg'
import { EditCards } from './EditCards'

const FillCardsFunc = (props) => {
  let item = props.currentItem
  let index = props.currentIndex
  const [countdown, setCountdown] = useState(0)
  const [isCountdownReady, setIsCountdownReady] = useState(false)

  useEffect(() => {
    let intervalId = null // Variable to store the interval ID

    const updateCountdown = () => {
      const currentTime = new Date().getTime()
      const releaseDateTime = new Date(item.releaseDate).getTime()
      const timeRemaining = releaseDateTime - currentTime

      // Check if the release date has passed
      if (timeRemaining <= 0) {
        clearInterval(intervalId)
        setCountdown(0)
        setIsCountdownReady(true)
      } else {
        setCountdown(timeRemaining)
        setIsCountdownReady(true)
      }
    }

    // Clear the previous interval if it exists
    if (intervalId) {
      clearInterval(intervalId)
    }

    // Set a new interval
    intervalId = setInterval(updateCountdown, 1000)

    // Call updateCountdown immediately to update the countdown on component mount
    updateCountdown()

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [item.releaseDate])

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

  if (props.propsList.customGames === true) {
    //renders edit form
    return (
      <EditCards
        key={index}
        propsList={props}
        currentItem={item}
        currentIndex={index}
        dataJson={props.dataJson}
        editStatusProp={item.edit}
        isCountdownReady={isCountdownReady}
        countdown={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
      ></EditCards>
    )
  } else {
    return (
      //renders cards from local storage or json.

      <div id="card" key={props.currentIndex}>
        <h1>{item.name}</h1>
        <h2>Release date: {item.releaseDate}</h2>
        <a href={item.website}>Website</a>
        <img src={item.imageLink} id="cardimg"></img>
        <div className="socials">
          {item.websiteSteam !== '' ? (
            <a href={item.websiteSteam}>
              <img src={steamImage}></img>
            </a>
          ) : (
            <p> </p>
          )}
          {item.twitter !== '' ? (
            <a href={item.twitter}>
              <img src={twitterImage}></img>
            </a>
          ) : (
            <p> </p>
          )}
        </div>
        {item.releaseDate === 'TBA' || item.releaseDate === '' ? (
          <p> Invalid date </p>
        ) : (
          <p>
            {isCountdownReady ? (
              <p>
                {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
              </p>
            ) : null}
          </p> //this should get the current date and subtract it from the release date then display a coutndown
        )}
        {/* <p>Genres</p> */}
        <p id="genreTags">{item.tags}</p>
      </div>
    )
  }
}

export default function FillCards(props) {
  //this function renders the cards based on the search bar or genre tags
  if (props.searchField !== '') {
    return (
      <>
        {props.dataJson.map((item, index) => {
          if (
            item.name.toLowerCase().includes(props.searchField.toLowerCase())
          ) {
            return (
              <FillCardsFunc
                key={index}
                propsList={props}
                currentItem={item}
                currentIndex={index}
                dataJson={props.dataJson}
                editStatusProp={item.edit}
              ></FillCardsFunc>
            )
          } else {
            return null
          }
        })}
      </>
    )
  } else {
    return (
      <>
        {props.dataJson.map((item, index) => {
          //this checks if the genre tags match the genre tags in the search bar
          const genreArray = item.tags.split(' ')
          for (let i = 0; i < genreArray.length; i++) {
            if (props.genreTags.includes(genreArray[i])) {
              return (
                <FillCardsFunc
                  key={index}
                  propsList={props}
                  currentItem={item}
                  currentIndex={index}
                  editStatusProp={item.edit}
                ></FillCardsFunc>
              )
            }
          }
          return null
        })}
      </>
    )
  }
} //;style={{backgroundImage : `url(${item.imageLink})`
