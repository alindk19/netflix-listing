import styles from "./Card.module.scss";

const Card = ({ imageUrl, movieTitle }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={imageUrl} alt="" />
      {/* <h3>{movieTitle}</h3> */}
    </div>
  );
};

export default Card;
