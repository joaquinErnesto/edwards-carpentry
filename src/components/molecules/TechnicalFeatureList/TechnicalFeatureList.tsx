import { TechnicalFeature } from "../../atoms/TechnicalFeature/TechnicalFeature";
import styles from "./TechnicalFeatureList.module.css";

interface TechnicalFeatureListProps {
  features: {
    icon: string;
    label: string;
  }[];
}

export function TechnicalFeatureList({
  features,
}: TechnicalFeatureListProps) {
  return (
    <div className={styles.list}>
      {features.map((feature) => (
        <TechnicalFeature
          key={feature.label}
          icon={feature.icon}
        >
          {feature.label}
        </TechnicalFeature>
      ))}
    </div>
  );
}