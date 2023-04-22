import './css/popUpBox.css'
export function PopUpBox(props) {
  return (
    <div className="PopUpBox">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <div className="PopUpBoxBtns">
        <button id="confirm" onClick={props.confirmOption}>
          CLEAR DATA
        </button>
        <button id="deny" onClick={props.declineOption}>
          CANCEL
        </button>
      </div>
    </div>
  )
}
