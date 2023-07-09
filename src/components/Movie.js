import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  id,
  coverImg,
  title,
  runtime,
  rating,
  year,
  genres,
  summary,
}) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        <li>runtime: {runtime}</li>
        <li>rating: {rating}</li>
        <li>release year: {year}</li>
      </ul>
      <h3>Genres</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>Summary</h3>
      <p>{summary}</p>
      <hr></hr>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  runtime: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
