import { useState, type FormEvent } from "react";

import { ReservasInput } from "../../atoms/ReservasInput/ReservasInput";
import { ReservasSelect } from "../../atoms/ReservasSelect/ReservasSelect";
import { ReservasTextarea } from "../../atoms/ReservasTextarea/ReservasTextarea";
import { ReservasSubmitButton } from "../../atoms/ReservasSubmitButton/ReservasSubmitButton";

import { ReservasField } from "../../molecules/ReservasField/ReservasField";
import { ReservasFormNotice } from "../../molecules/ReservasFormNotice/ReservasFormNotice";

import { reservasProjectOptions } from "../../../data/reservas";

import styles from "./ReservasForm.module.css";

interface ReservasFormData {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialFormData: ReservasFormData = {
  name: "",
  phone: "",
  projectType: "furniture",
  message: "",
};

export function ReservasForm() {
  const [formData, setFormData] =
    useState<ReservasFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleChange = (
    field: keyof ReservasFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      window.setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.card}>
      <div className={styles.decorativeIcon}>
        <span className="material-symbols-outlined">
          architecture
        </span>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <ReservasField
          label="NOMBRE COMPLETO"
          htmlFor="name"
        >
          <ReservasInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(event) =>
              handleChange("name", event.target.value)
            }
            placeholder="Escribe tu nombre aquí"
            required
            disabled={isSubmitting || isSubmitted}
          />
        </ReservasField>

        <div className={styles.twoColumns}>
          <ReservasField
            label="TELÉFONO / WHATSAPP"
            htmlFor="phone"
          >
            <ReservasInput
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(event) =>
                handleChange("phone", event.target.value)
              }
              placeholder="+53 5..."
              required
              disabled={isSubmitting || isSubmitted}
            />
          </ReservasField>

          <ReservasField
            label="TIPO DE ENCARGO"
            htmlFor="project_type"
          >
            <ReservasSelect
              id="project_type"
              name="project_type"
              value={formData.projectType}
              onChange={(event) =>
                handleChange(
                  "projectType",
                  event.target.value,
                )
              }
              disabled={isSubmitting || isSubmitted}
            >
              {reservasProjectOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </ReservasSelect>
          </ReservasField>
        </div>

        <ReservasField
          label="DETALLES DE TU RESERVA"
          htmlFor="message"
        >
          <ReservasTextarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(event) =>
              handleChange("message", event.target.value)
            }
            placeholder="Describe tu encargo: detalles, dimensiones o el estilo que buscas..."
            required
            disabled={isSubmitting || isSubmitted}
          />
        </ReservasField>

        <div className={styles.submitArea}>
          <ReservasSubmitButton
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
          />

          <ReservasFormNotice />
        </div>
      </form>
    </div>
  );
}