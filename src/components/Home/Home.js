import styles from "./Home.module.scss";
import Section from "../Section/Section";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=de5f2b734a1c59b6368bcfbd25be3e35&language=en-US";

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const d = await fetch(url);
      const json = await d.json();
      setData(json.genres);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.HomeWrapper}>
      <Banner />
      {data?.map((item, index) => (
        <Section key={item.id} index={index} id={item.id} title={item.name} />
      ))}
    </div>
  );
};

export default Home;
