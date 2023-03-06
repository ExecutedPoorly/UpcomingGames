import './css/genres.css';



export default function Genres(props){
  const negativeColour = '#5E5E5E';
  const selectedColour = '#6B9E94';

  function buttonPressed(button){
    props.populateFunction(button.target.textContent);
  }

  return (<div className="genreSelectors">
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("MMO") ? negativeColour : selectedColour}}>MMO</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("FPS") ? negativeColour : selectedColour}}>FPS</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("RPG") ? negativeColour : selectedColour}}>RPG</button>
    <button id="btns" onClick={buttonPressed} style={{background: props.genreTags.includes("YES") ? negativeColour : selectedColour}}>YES</button>
  </div>)
}