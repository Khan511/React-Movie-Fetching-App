import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, loading, NoPhotoUrl } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { Poster, imdbID: id, Title, Year } = movie;
        return (
          <Link to={`/movies/${id}`} className="movie" key={id}>
            <article>
              <img src={Poster === "N/A" ? NoPhotoUrl : Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
