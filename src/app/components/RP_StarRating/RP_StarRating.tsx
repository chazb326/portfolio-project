import { useEffect, useState, useCallback } from "react";
import styles from "./RP_StarRating.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FaStar } from "react-icons/fa";

interface RP_StarRatingProps {
  noOfStars: number;
}

const RP_StarRating = ({ noOfStars }: RP_StarRatingProps) => {
  const isDesktop = useMediaQuery("(min-width: 1048px)");
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <h2 className={styles.header}>Star Rating</h2>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          //increment index by 1 to get the star #
          index += 1;

          return (
            <FaStar
              key={index}
              className={
                index <= (hover || rating) ? styles.active : styles.inactive
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={isDesktop ? 40 : 30}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
    </>
  );
};

export { RP_StarRating };
