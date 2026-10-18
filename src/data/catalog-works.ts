import {
  catalogCategories,
  type CatalogCategory,
} from "./catalog";
import { catalogWorkImagesByFolder } from "./catalog-images";
import type { CatalogWorkImages } from "./catalog-images";

export interface CatalogWork extends CatalogWorkImages {
  title: string;
  alt: string;
  photoCount: number;
}

const ordinal = (index: number): string =>
  String(index + 1).padStart(2, "0");

const buildWorks = (
  category: CatalogCategory,
): CatalogWork[] => {
  const folder = category.folder ?? category.id;
  const works =
    catalogWorkImagesByFolder[folder] ?? [];

  return works.map((work, index) => {
    const photoCount = work.images.length;

    const title = `${category.name} · Obra ${ordinal(index)}`;

    const alt =
      photoCount === 1
        ? `${category.name} fabricado en el taller, una fotografía de la pieza terminada.`
        : `${category.name} fabricado en el taller, vista ${ordinal(index)} de ${photoCount} fotografías de la misma pieza.`;

    return {
      ...work,
      title,
      alt,
      photoCount,
    };
  });
};

export const catalogWorksByCategory: Record<
  string,
  CatalogWork[]
> = catalogCategories.reduce<Record<string, CatalogWork[]>>(
  (acc, category) => {
    acc[category.id] = buildWorks(category);

    return acc;
  },
  {},
);

export const getCategoryWorks = (
  category: CatalogCategory,
): CatalogWork[] =>
  catalogWorksByCategory[category.id] ?? [];

export const getCategoryWorkCount = (
  category: CatalogCategory,
): number => getCategoryWorks(category).length;