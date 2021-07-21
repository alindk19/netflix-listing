import styles from "./Banner.module.scss";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./banner.css";

const Banner = ({ movieList }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie(
      movieList?.moviesList[0]?.content[
        Math.floor(Math.random() * movieList?.moviesList[0]?.content?.length)
      ]
    );
    // eslint-disable-next-line
  }, [movieList?.moviesList[0]?.content]);
  return (
    <div
      className={styles.bannerWrapper}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>
      <div className={styles.cta}>
        <button>Play</button>
        <button>More info</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.reducer,
});

export default connect(mapStateToProps)(Banner);
