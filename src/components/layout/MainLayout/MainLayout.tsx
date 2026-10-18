import type { ReactNode } from "react";
import { Navbar } from "../../organisms/Navbar/Navbar";
import { Footer } from "../../organisms/Footer/Footer";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({
  children,
}: MainLayoutProps) {
  useDocumentTitle();

  return (
    <div className={styles.layout}>
      <div
        className={styles.grainOverlay}
        aria-hidden="true"
      />

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}