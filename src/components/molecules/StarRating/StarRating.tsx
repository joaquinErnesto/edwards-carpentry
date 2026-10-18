import { Icon } from "../../atoms/Icon/Icon";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export function StarRating({
  rating,
  maxRating = 5,
}: StarRatingProps) {
  return (
    <div
      className={styles.rating}
      aria-label={`${rating} de ${maxRating} estrellas`}
    >
      {Array.from({ length: maxRating }).map(
        (_, index) => (
          <Icon
            key={index}
            name="star"
            size={16}
            filled={index < rating}
            className={styles.star}
          />
        ),
      )}
    </div>
  );
}