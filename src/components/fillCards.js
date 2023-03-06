export default function FillCards(props) {
	return (
		<div>
			{props.dataJson.map((item, index) => {
        console.log(item);
				return (
					<div key={index}>
            <h1>{item.name}</h1>
						<p>wee</p>
					</div>
				);
			})}
		</div>
	);
}
