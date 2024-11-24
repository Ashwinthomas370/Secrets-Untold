import { useFetch } from "../hooks/useFetch";
import styles from "./style.module.scss";
import { FaHeart, FaUser, FaTag, FaClock } from "react-icons/fa";

interface type {
  id: number;
  title: string;
  content: string;
  category: string;
  gender: string;
  likes: number;
  age: number;
  createdAt?: Date;
}

const Content = () => {
  const { data, loading, errors } = useFetch(
    "http://localhost:1337/api/secerts"
  );

  if (loading) return <p>Loading...</p>;
  if (errors) return <p>Error loading content!</p>;

  const sortedData = data?.slice().sort((a: type, b: type) => {
    const dateA = new Date(a.createdAt || "").getTime();
    const dateB = new Date(b.createdAt || "").getTime();
    return dateB - dateA;
  });

  return (
    <div className={styles.wrapper}>
      {sortedData?.map((item: type) => (
        <div className={styles.container} key={item.id}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.content}>{item.content}</p>
          <div className={styles.meta}>
            <span>
              <FaUser /> {item.gender}
            </span>
            <span>
              <FaTag /> {item.category}
            </span>
            <span>
              <FaClock /> {new Date(item.createdAt || "").toLocaleDateString()}
            </span>
          </div>
          <div className={styles.footer}>
            <span>
              <FaHeart className={styles.icon} /> {item.likes} Likes
            </span>
            <span>Age: {item.age}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
