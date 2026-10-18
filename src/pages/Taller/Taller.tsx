import { WorkshopHero } from "../../components/organisms/WorkshopHero/WorkshopHero";
import { WorkshopOriginsSection } from "../../components/organisms/WorkshopOriginsSection/WorkshopOriginsSection";
import { WorkshopCarouselSection } from "../../components/organisms/WorkshopCarouselSection/WorkshopCarouselSection";

import { WorkshopValuesSection } from "../../components/organisms/WorkshopValuesSection/WorkshopValuesSection";
import { WorkshopResilienceSection } from "../../components/organisms/WorkshopResilienceSection/WorkshopResilienceSection";
import { WorkshopTeamSection } from "../../components/organisms/WorkshopTeamSection/WorkshopTeamSection";
import { WorkshopCTASection } from "../../components/organisms/WorkshopCTASection/WorkshopCTASection";

import styles from "./Taller.module.css";

export function Taller() {
  return (
    <div className={styles.page}>
      <WorkshopHero />

      <WorkshopOriginsSection />

      <WorkshopCarouselSection />

      <WorkshopValuesSection />

      <WorkshopResilienceSection />

      <WorkshopTeamSection />

      <WorkshopCTASection />
    </div>
  );
}