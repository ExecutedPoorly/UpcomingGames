export default function FillCards(props) {
	return (
		<div>
			{props.dataJson.map((item, index) => {
				return (
					<div key={index} id="card">
            <h1>{item.name}</h1>
						<p>wee</p>
					</div>
				);
			})}
		</div>
	);
}
