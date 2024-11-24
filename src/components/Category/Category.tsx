import { FC, useState } from "react";
import styles from "./style.module.scss";

interface Props {
  onCategoryChange: (category: string) => void;
}

const categoryOptions = [
  "Relationships",
  "Life",
  "Love",
  "Confessions",
  "Insecurities",
];

const Category: FC<Props> = ({ onCategoryChange }) => {
  const handleCategoryClick = (item: string) => {
    onCategoryChange(item);
  };

  return (
    <div className={styles.categoryWrapper}>
      {categoryOptions.map((el: string) => (
        <p
          onClick={() => handleCategoryClick(el)}
          key={el}
          className={styles.categoryList}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default Category;
