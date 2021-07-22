import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ imageUrl, movieTitle }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className={styles.cardWrapper}
    >
      <img src={imageUrl} alt="" />
      {show && <p>{movieTitle}</p>}
    </div>
  );
};

export default Card;
