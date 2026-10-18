import { Icon } from "../../atoms/Icon/Icon";
import { StarRating } from "../StarRating/StarRating";
import type { Testimonial } from "../../../data/testimonials";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <Icon
        name="format_quote"
        size={48}
        className={styles.quoteIcon}
      />

      <StarRating
        rating={testimonial.rating}
      />

      <p className={styles.quote}>
        "{testimonial.quote}"
      </p>

      <div className={styles.author}>
        <div className={styles.customer}>
          {testimonial.customer}
        </div>

        <div className={styles.location}>
          {testimonial.location}
        </div>
      </div>
    </article>
  );
}