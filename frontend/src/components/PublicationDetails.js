import { useLocation, Link } from "react-router-dom";
import "../styles/details.css";


export default function PublicationDetails() {
const { state } = useLocation();


if (!state) {
return <p className="error">No data found</p>;
}


return (
<div className="details">
<span>{state.category}</span>
<h1>{state.title}</h1>
<p className="author">{state.author}</p>
<p className="content">{state.abstract}</p>
<Link to="/" className="back">← Back</Link>
</div>
);
}