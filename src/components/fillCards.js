import './css/fillcards.css';
import steamImage from '../images/Steam_icon.svg';
import twitterImage from '../images/TwitterSvg.svg';

const FillCardsFunc = (props) => {
  let item = props.currentItem;
  let index = props.currentIndex;
  let dataJson = props.dataJson;
  console.log(props.propsList.customGames,"aaash");
  return (
    <div id="card">
      {props.propsList.customGames === true? <p>edit btn goes here weee</p> : null}
    <h1>{item.name}</h1>
    <h2>Release date: {item.releaseDate}</h2>
    <a href={item.website}>Website</a>
    <img src={item.imageLink} id="cardimg"></img>
    <div className='socials'>
    {item.websiteSteam !== "" ? <a href={item.websiteSteam}><img src={steamImage}></img></a> : <p> </p>}
    {item.twitter !== "" ? <a href={item.twitter}><img src={twitterImage}></img></a> : <p> </p>}
    </div>
    {(item.releaseDate === "TBA" || item.releaseDate === "") ? <p> Invalid date </p> : <p>Countdown Placeholder</p>}
    {/* <p>Genres</p> */}
    <p id="genreTags">{item.tags}</p>
  </div>

  )
}

const editCardInfo = (index) => {
  
}

export default function FillCards(props) {
  if (props.searchField !== "") {
    return (
      <>
        {props.dataJson.map((item, index) => {
          // console.log(props)          
            if (item.name.toLowerCase().includes(props.searchField.toLowerCase())) {
              return (<FillCardsFunc key={index} propsList={props} currentItem={item} currentIndex={index} dataJson={props.dataJson}></FillCardsFunc>)
            }  
        })}
      </>
  )}
  else {
	return (
		<>
			{props.dataJson.map((item, index) => {
        // console.log(props)
        const genreArray = item.tags.split(' ');
        for (let i=0; i < genreArray.length; i++){
          if (props.genreTags.includes(genreArray[i])) {
            return (<FillCardsFunc key = {index} propsList={props} currentItem={item} currentIndex={index}></FillCardsFunc>);
          }
        }
			})}
		</>
)}}//;style={{backgroundImage : `url(${item.imageLink})`

