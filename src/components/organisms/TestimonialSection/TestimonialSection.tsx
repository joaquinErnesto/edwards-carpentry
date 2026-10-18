import { Container } from "../../layout/Container/Container";
import { TestimonialCard } from "../../molecules/TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonials";
import styles from "./TestimonialSection.module.css";

export function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Palabra de cliente
          </h2>

          <p className={styles.subtitle}>
            La mejor publicidad es un trabajo bien hecho
            que pasa de boca en boca.
          </p>
        </div>

        <div className={styles.list}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}