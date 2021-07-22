import { useEffect } from "react";
import { connect } from "react-redux";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getMoviesWithGenres } from "../../redux/themoviedb/themoviedb.actions";
import styles from "./Section.module.scss";
import Card from "../Card/Card";
import "./swiper.css";

SwiperCore.use([Pagination, Navigation]);

const Section = ({ id, title, getMoviesWithGenres, movieList, index }) => {
  useEffect(() => {
    const fetchData = async () => {
      getMoviesWithGenres(id);
    };
    fetchData();
  }, [id, title, getMoviesWithGenres]);
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <Swiper
        slidesPerView={7}
        slidesPerGroup={7}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: "auto",
            spaceBetween: 5,
            slidesPerGroup: 1,
            loop: false,
          },
        }}
        lazy={true}
        mousewheel={{
          forceToAxis: true,
          invert: true,
        }}
      >
        {movieList?.moviesList[index]?.content.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card
              movieTitle={item.original_title}
              imageUrl={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.reducer,
});
const mapDispatchToProps = (dispatch) => ({
  getMoviesWithGenres: (id) => dispatch(getMoviesWithGenres(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
