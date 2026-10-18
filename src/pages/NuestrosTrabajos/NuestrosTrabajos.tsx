import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Container } from "../../components/layout/Container/Container";

import { WorksHero } from "../../components/organisms/WorksHero/WorksHero";
import { WorksShowcase } from "../../components/organisms/WorksShowcase/WorksShowcase";
import { WorkshopPledge } from "../../components/organisms/WorkshopPledge/WorkshopPledge";
import { HumidityGuarantee } from "../../components/organisms/HumidityGuarantee/HumidityGuarantee";
import { ImageLightbox } from "../../components/organisms/ImageLightbox/ImageLightbox";

import {
  showcaseWorks,
  type ShowcaseWork,
} from "../../data/works-showcase";

import styles from "./NuestrosTrabajos.module.css";

interface LightboxState {
  workId: string;
  index: number;
}

export function NuestrosTrabajos() {
  const [lightbox, setLightbox] =
    useState<LightboxState | null>(null);

  const openWork = useCallback(
    (
      work: ShowcaseWork,
      photoSrc: string,
    ) => {
      const index = work.allImages.indexOf(
        photoSrc,
      );

      setLightbox({
        workId: work.id,
        index: index >= 0 ? index : 0,
      });
    },
    [],
  );

  const activeWork = lightbox
    ? showcaseWorks.find(
        (work) => work.id === lightbox.workId,
      )
    : undefined;

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [lightbox]);

  return (
    <main className={styles.page}>
      <WorksHero />

      <Container>
        <WorksShowcase onOpenWork={openWork} />
      </Container>

      <Container>
        <HumidityGuarantee />

        <WorkshopPledge />
      </Container>

      {lightbox && activeWork && (
        <ImageLightbox
          images={activeWork.allImages}
          index={lightbox.index}
          title={activeWork.title}
          onIndexChange={(index) =>
            setLightbox({ ...lightbox, index })
          }
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}