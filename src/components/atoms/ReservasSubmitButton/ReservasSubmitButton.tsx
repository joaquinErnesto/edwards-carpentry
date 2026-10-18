import { Icon } from "../../atoms/Icon/Icon";
import styles from "./ReservasSubmitButton.module.css";

interface ReservasSubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export function ReservasSubmitButton({
  isSubmitting,
  isSubmitted,
}: ReservasSubmitButtonProps) {
  let label = "RESERVAR EN EL TALLER";

  if (isSubmitting) {
    label = "ENVIANDO...";
  }

  if (isSubmitted) {
    label = "¡RESERVA ENVIADA!";
  }

  return (
    <button
      type="submit"
      className={`${styles.button} ${
        isSubmitted ? styles.success : ""
      }`}
      disabled={isSubmitting || isSubmitted}
    >
      {label}

      {!isSubmitting && !isSubmitted && (
        <Icon name="send" size={18} />
      )}
    </button>
  );
}