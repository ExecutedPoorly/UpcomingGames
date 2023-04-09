import steamImage from "../images/Steam_icon.svg";
import twitterImage from "../images/TwitterSvg.svg";



function EditCards(props) {
  const handleFormEdit = (e) => {
    e.preventDefault();
    console.log(e.target.button);
    let index = e.target.getAttribute("data-id");
    console.log(e.target.date.value);

    // let passMe = {"name" : e.target.name.value,
    // "releaseDate"  : e.target.date.value,
    // "website" : e.target.website.value,
    // "websiteSteam" : "https://store.steampowered.com/app/1995520/Pax_Dei/",
    // "twitter" : "https://twitter.com/PlayPaxDei/",
    // "tags" : "MMO RPG",
    // "imageLink" : ""}
    props.propsList.propsList.changeData(props.currentIndex, )
  };
	let item = props.currentItem;
  // console.log(props)
	if (item.edit === true) { //edit cards form
		return (
			<div id="card" key={props.currentIndex}>
				<form
					className="formSection"
					onSubmit={handleFormEdit}
					data-id={props.currentIndex}>					
					<input id="name" defaultValue={item.name}></input>
					<h2>Release date: <input type="date" id="date" defaultValue={item.releaseDate}></input></h2>
					<input type="text" id="website" defaultValue={item.website}></input>
					<p>Image:<input defaultValue={item.imageLink} id="cardimg"></input></p>
					<div className="socials">
						{item.websiteSteam !== "" ? (
							<a href={item.websiteSteam}>
								<img src={steamImage}></img>
							</a>
						) : (
							<p> </p>
						)}
						{item.twitter !== "" ? (<a href={item.twitter}>	<img src={twitterImage}></img></a>) : (<p> </p>)}
					</div>
					{item.releaseDate === "TBA" || item.releaseDate === "" ? (
						<p> Invalid date </p>
					) : (
						<p>Countdown Placeholder</p>
					)}
					<button type="submit">Save</button>
				</form>
			</div>
		);
	} else {
		return (
			<div id="card" key={props.currentIndex}>
				{props.propsList.customGames !== true ? (
					<button onClick={() => {props.propsList.propsList.changeData(props.currentIndex)}}>
						Edit?
					</button>
				) : null}
				<h1>{item.name}</h1>
				<h2>Release date: {item.releaseDate}</h2>
				<a href={item.website}>Website</a>
				<img src={item.imageLink} id="cardimg"></img>
				<div className="socials">
					{item.websiteSteam !== "" ? (
						<a href={item.websiteSteam}>
							<img src={steamImage}></img>
						</a>
					) : (
						<p> </p>
					)}
					{item.twitter !== "" ? (
						<a href={item.twitter}>
							<img src={twitterImage}></img>
						</a>
					) : (
						<p> </p>
					)}
				</div>
				{item.releaseDate === "TBA" || item.releaseDate === "" ? (
					<p> Invalid date </p>
				) : (
					<p>Countdown Placeholder</p>
				)}
				{/* <p>Genres</p> */}
				<p id="genreTags">{item.tags}</p>
			</div>
		);
	}
}

export { EditCards };
