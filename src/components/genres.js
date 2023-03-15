import './css/genres.css';



export default function Genres(props){
  const negativeColour = '#0a0a0a';
  const selectedColour = '#00ced1';

  function buttonPressed(button){
    props.populateFunction(button.target.textContent);
  }

  return (<div className="genreSelectors">
    <button id="btns" key={"MMO"} onClick={buttonPressed} style={{background: props.genreTags.includes("MMO") ? selectedColour : negativeColour}}>MMO</button>
    <button id="btns" key={"FPS"} onClick={buttonPressed} style={{background: props.genreTags.includes("FPS") ? selectedColour : negativeColour}}>FPS</button>
    <button id="btns" key={"RPG"} onClick={buttonPressed} style={{background: props.genreTags.includes("RPG") ? selectedColour : negativeColour}}>RPG</button>
    <button id="btns" key={"YES"} onClick={buttonPressed} style={{background: props.genreTags.includes("YES") ? selectedColour : negativeColour}}>YES</button>
  </div>)
}