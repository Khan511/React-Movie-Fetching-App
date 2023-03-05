import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  // const [movie, setMovie] = useState("");
  const { loading, error, data: movie, NoPhotoUrl } = useFetch(`&i=${id}`);
  console.log(movie);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const { Title, Plot, Year, Poster } = movie;
  return (
    <section className="single-movie">
      <img src={Poster === "N/A" ? NoPhotoUrl : Poster} alt="Poster" />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};
export default SingleMovie;
