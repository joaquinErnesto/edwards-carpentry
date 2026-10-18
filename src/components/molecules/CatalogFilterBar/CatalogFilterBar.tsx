import { Icon } from "../../atoms/Icon/Icon";
import type { CatalogTag } from "../../../data/catalog";
import styles from "./CatalogFilterBar.module.css";

interface CatalogFilterBarProps {
  query: string;
  activeFilter: "all" | CatalogTag;
  onQueryChange: (query: string) => void;
  onFilterChange: (
    filter: "all" | CatalogTag
  ) => void;
}

const filters: Array<{
  id: "all" | CatalogTag;
  label: string;
}> = [
  {
    id: "all",
    label: "Todos (23)",
  },
  {
    id: "asientos",
    label: "Asiento y Estancia",
  },
  {
    id: "almacenaje",
    label: "Almacenamiento",
  },
  {
    id: "arquitectura",
    label: "Carpintería Arquitectónica",
  },
];

export function CatalogFilterBar({
  query,
  activeFilter,
  onQueryChange,
  onFilterChange,
}: CatalogFilterBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.search}>
        <Icon
          name="search"
          size={24}
          className={styles.searchIcon}
        />

        <input
          value={query}
          onChange={(event) =>
            onQueryChange(event.target.value)
          }
          placeholder="Buscar por tipología (ej. Balances, Closets, Gaveteros, Ventanas)..."
          aria-label="Buscar en el catálogo"
        />
      </div>

      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`${styles.filter} ${
              activeFilter === filter.id
                ? styles.active
                : ""
            }`}
            onClick={() =>
              onFilterChange(filter.id)
            }
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}