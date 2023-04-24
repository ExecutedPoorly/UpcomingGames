import './css/fillcards.css'
import steamImage from '../images/Steam_icon.svg'
import twitterImage from '../images/TwitterSvg.svg'
import { EditCards } from './EditCards'

const FillCardsFunc = (props) => {
  let item = props.currentItem
  let index = props.currentIndex
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
          <p>Countdown Placeholder</p>
        )}
        {/* <p>Genres</p> */}
        <p id="genreTags">{item.tags}</p>
      </div>
    )
  }
}

// const editCardInfo = (index) => {

// }

export default function FillCards(props) {
  if (props.searchField !== '') {
    return (
      <>
        {props.dataJson.map((item, index) => {
          // console.log(props)
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
          // console.log(props)
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
