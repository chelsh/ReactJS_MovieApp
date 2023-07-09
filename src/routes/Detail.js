import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img src={detail.medium_cover_image} alt={detail.title}></img>
      <h2>{detail.title}</h2>
      <ul>
        <li>runtime: {detail.runtime}</li>
        <li>rating: {detail.rating}</li>
        <li>release year: {detail.year}</li>
      </ul>
      <h3>Genres</h3>
      <ul>
        {detail.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>Summary</h3>
      <p>{detail.summary}</p>
    </div>
  );
}

export default Detail;
