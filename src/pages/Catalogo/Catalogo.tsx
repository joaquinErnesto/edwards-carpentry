import {
  useEffect,
  useState,
} from "react";

import { useSearchParams } from "react-router-dom";

import { Container } from "../../components/layout/Container/Container";

import { CatalogHero } from "../../components/organisms/CatalogHero/CatalogHero";

import { CatalogFilterBar } from "../../components/molecules/CatalogFilterBar/CatalogFilterBar";

import { CatalogGrid } from "../../components/organisms/CatalogGrid/CatalogGrid";

import { WorkshopPledge } from "../../components/organisms/WorkshopPledge/WorkshopPledge";

import { CategoryModal } from "../../components/organisms/CategoryModal/CategoryModal";

import { DetailModal } from "../../components/organisms/DetailModal/DetailModal";

import {
  catalogCategories,
  type CatalogCategory,
  type CatalogTag,
} from "../../data/catalog";

import type { CatalogWork } from "../../data/catalog-works";

import styles from "./Catalogo.module.css";

export function Catalog() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const requestedCategory =
    searchParams.get("categoria");

  const [query, setQuery] =
    useState("");

  const [activeFilter, setActiveFilter] =
    useState<"all" | CatalogTag>("all");

  const [selectedCategory, setSelectedCategory] =
    useState<CatalogCategory | null>(null);

  const [selectedWork, setSelectedWork] =
    useState<CatalogWork | null>(null);

  const categoryFromUrl =
    catalogCategories.find(
      (category) => category.id === requestedCategory,
    ) ?? null;

  const activeCategory =
    selectedCategory ?? categoryFromUrl;

  const clearCategoryParam = () => {
    if (
      searchParams.has("categoria")
    ) {
      setSearchParams(
        (current) => {
          const next =
            new URLSearchParams(current);

          next.delete("categoria");

          return next;
        },
        { replace: true },
      );
    }
  };

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    const modalOpen =
      Boolean(selectedWork) ||
      Boolean(activeCategory);

    document.body.style.overflow =
      modalOpen
        ? "hidden"
        : previousOverflow;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedWork) {
        setSelectedWork(null);
      } else if (activeCategory) {
        setSelectedCategory(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    activeCategory,
    selectedWork,
  ]);

  const filteredCategories =
    catalogCategories.filter(
      (category) => {
        const matchesFilter =
          activeFilter === "all" ||
          category.tag === activeFilter;

        const normalizedQuery =
          query.trim().toLowerCase();

        const searchableText = [
          category.name,
          category.description,
          category.id,
        ]
          .join(" ")
          .toLowerCase();

        return (
          matchesFilter &&
          (
            normalizedQuery === "" ||
            searchableText.includes(
              normalizedQuery
            )
          )
        );
      }
    );

  const openCategory = (
    category: CatalogCategory
  ) => {
    setSelectedWork(null);
    setSelectedCategory(category);
  };

  const openWork = (work: CatalogWork) => {
    setSelectedWork(work);
  };

  const closeWork = () => {
    setSelectedWork(null);
  };

  const closeCategory = () => {
    setSelectedWork(null);
    setSelectedCategory(null);
    clearCategoryParam();
  };

  return (
    <div className={styles.page}>
      <CatalogHero />

      <Container>
        <CatalogFilterBar
          query={query}
          activeFilter={activeFilter}
          onQueryChange={setQuery}
          onFilterChange={setActiveFilter}
        />

        <CatalogGrid
          categories={filteredCategories}
          total={catalogCategories.length}
          onOpen={openCategory}
        />

        <WorkshopPledge />
      </Container>

      {activeCategory && (
        <CategoryModal
          category={activeCategory}
          onClose={closeCategory}
          onOpenWork={openWork}
        />
      )}

      {selectedWork && (
        <DetailModal
          work={selectedWork}
          onClose={closeWork}
        />
      )}
    </div>
  );
}