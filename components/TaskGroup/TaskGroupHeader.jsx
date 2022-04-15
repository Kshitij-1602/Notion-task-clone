import styles from "./style.module.css";
import { useState } from "react";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";

export default function TaskGroupHeader({ groupTitle, totalCards, addCard }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={styles.groupHeader}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.left}>
        <div className={styles.groupTitle}
        style={{backgroundColor:"rgba(230, 105, 101, 0.616)",borderRadius:"5px"}}>{groupTitle}</div>
        <div>{totalCards}</div>
      </div>
      {isHovered && (
        <div className={styles.right}>
          <div>
            <BsThreeDots />
          </div>
          <div className={styles.headerPlusIcon} onClick={addCard}>
            <BsPlusLg />
          </div>
        </div>
      )}
    </div>
  );
}
