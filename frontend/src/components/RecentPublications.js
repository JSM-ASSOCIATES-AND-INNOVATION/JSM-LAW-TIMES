import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/publications.css";


export default function RecentPublications() {
const [papers, setPapers] = useState([]);
const navigate = useNavigate();


useEffect(() => {
fetch("http://localhost:5000/api/publications")
.then(res => res.json())
.then(data => setPapers(data));
}, []);


const openDetails = (paper) => {
navigate(`/publication/${paper._id}`, { state: paper });
};


return (
<section className="publications">
<h2>Recent Publications</h2>
{papers.map(p => (
<div key={p._id} className="publication-card">
<span>{p.category}</span>
<h3>{p.title}</h3>
<p className="author">{p.author}</p>
<p>{p.abstract}</p>
<button onClick={() => openDetails(p)}>Read More →</button>
</div>
))}
</section>
);
}