import './css/genres.css';



export default function Genres(props){


  function buttonPressed(button){
    if (button.target.textContent === "MMO" ) {
      props.populateFunction(button.target.textContent);
    }
    else if (button.target.textContent === "FPS" ) {
      
    }
    else if (button.target.textContent === "RPG" ) {
      
    }
    else if (button.target.textContent === "YES" ) {
      
    }
  }

  return (<div className="genreSelectors">
    <button id="btns" onClick={buttonPressed}>MMO</button>
    <button id="btns" onClick={buttonPressed}>FPS</button>
    <button id="btns" onClick={buttonPressed}>RPG</button>
    <button id="btns" onClick={buttonPressed}>YES</button>
  </div>)
}