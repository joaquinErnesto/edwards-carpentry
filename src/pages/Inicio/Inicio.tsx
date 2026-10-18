import { Hero } from "../../components/organisms/Hero/Hero";
import { TeamSection } from "../../components/organisms/TeamSection/TeamSection";
import { MaterialsSection } from "../../components/organisms/MaterialsSection/MaterialsSection";
import { PromoVideoSection } from "../../components/organisms/PromoVideoSection/PromoVideoSection";
import { AmbienceBand } from "../../components/organisms/AmbienceBand/AmbienceBand";
import { TestimonialsSection } from "../../components/organisms/TestimonialSection/TestimonialSection";
import { CTASection } from "../../components/organisms/CTASection/CTASection";

export function Inicio() {
  return (
    <>
      <Hero />

      <TeamSection />

      <MaterialsSection />

      <PromoVideoSection />

      <AmbienceBand />

      <TestimonialsSection />

      <CTASection />
    </>
  );
}