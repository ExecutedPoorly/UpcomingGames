import './css/genres.css';



export default function Genres(props){
  const negativeColour = '#5E5E5E';
  const selectedColour = '#6B9E94';

  function buttonPressed(button){
    props.populateFunction(button.target.textContent);
  }

  return (<div className="genreSelectors">
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("MMO") ? selectedColour : negativeColour}}>MMO</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("FPS") ? selectedColour : negativeColour}}>FPS</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("RPG") ? selectedColour : negativeColour}}>RPG</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("YES") ? selectedColour : negativeColour}}>YES</button>
  </div>)
}