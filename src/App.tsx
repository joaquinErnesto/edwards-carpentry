import {
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";

import { Inicio } from "./pages/Inicio/Inicio";

const Catalog = lazy(() =>
  import("./pages/Catalogo/Catalogo").then((m) => ({
    default: m.Catalog,
  })),
);

const NuestrosTrabajos = lazy(() =>
  import("./pages/NuestrosTrabajos/NuestrosTrabajos").then(
    (m) => ({ default: m.NuestrosTrabajos }),
  ),
);

const Servicios = lazy(() =>
  import("./pages/Servicios/Servicios").then((m) => ({
    default: m.Servicios,
  })),
);

const Taller = lazy(() =>
  import("./pages/Taller/Taller").then((m) => ({
    default: m.Taller,
  })),
);

const Reservas = lazy(() =>
  import("./pages/Reservas/Reservas").then((m) => ({
    default: m.Reservas,
  })),
);

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
      }}
      aria-busy="true"
      aria-live="polite"
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route
              path="/"
              element={<Inicio />}
            />

            <Route
              path="/catalog"
              element={<Catalog />}
            />

            <Route
              path="/trabajos"
              element={<NuestrosTrabajos />}
            />

            <Route
              path="/servicios"
              element={<Servicios />}
            />

            <Route
              path="/taller"
              element={<Taller />}
            />

            <Route
              path="/reservas"
              element={<Reservas />}
            />

            <Route
              path="/presupuesto"
              element={<Navigate to="/reservas" replace />}
            />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;