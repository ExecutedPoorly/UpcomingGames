export default function SearchField(props) {
  return (
    <div className="SearchField">
      <input
        placeholder="Search titles"
        value={props.SearchField}
        onKeyUp={props.updateSearch}
      ></input>
    </div>
  )
}
