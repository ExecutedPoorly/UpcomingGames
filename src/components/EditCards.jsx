import steamImage from '../images/Steam_icon.svg'
import twitterImage from '../images/TwitterSvg.svg'
import './css/editCards.css'

function cardNew(item, props, handleFormEdit) {
  return (
    <div id="card" className="CardEdit" key={props.currentIndex}>
      <form
        className="formSection"
        onSubmit={handleFormEdit}
        data-id={props.currentIndex}
      >
        <p>name:</p>
        <input id="name" defaultValue={item.name}></input>
        <h2>Release date: </h2>
        <input type="date" id="date" defaultValue={item.releaseDate}></input>
        <p>Website:</p>
        <input type="text" id="website" defaultValue={item.website}></input>
        <p>Image:</p>
        <input defaultValue={item.imageLink} id="cardimg"></input>
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
              {' '}
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
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

function EditCards(props) {
  const handleFormEdit = (e) => {
    e.preventDefault()
    console.log(e.target, 'test')
    let index = e.target.getAttribute('data-id')
    console.log(e.target.date.value)

    let passMe = {
      name: e.target.name.value,
      releaseDate: e.target.date.value,
      website: e.target.website.value,
    }
    // let passMe = {"name" : e.target.name.value,
    // "releaseDate"  : e.target.date.value,
    // "website" : e.target.website.value,
    // "websiteSteam" : "https://store.steampowered.com/app/1995520/Pax_Dei/",
    // "twitter" : "https://twitter.com/PlayPaxDei/",
    // "tags" : "MMO RPG",
    // "imageLink" : ""}
    props.propsList.propsList.changeData(props.currentIndex, passMe)
  }
  let item = props.currentItem
  // console.log(props)
  if (item.edit === true) {
    //edit cards form
    return cardNew(item, props, handleFormEdit)
  } else {
    return (
      <div id="card" className="" key={props.currentIndex}>
        {props.propsList.customGames !== true ? (
          <button
            onClick={() => {
              props.propsList.propsList.changeData(props.currentIndex)
            }}
          >
            Edit?
          </button>
        ) : null}
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

export { EditCards }
