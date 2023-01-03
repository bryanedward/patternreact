import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { NavBar } from "./styleNavigation";
import { routes } from "./routes";
import { Suspense } from "react";
export const Navigation = () => {
  return (
    <Suspense fallback={<span>cargando</span>}>
      <BrowserRouter>
        <NavBar>
          <FaReact size="1.9rem" />
          {routes.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={(active) => (active.isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </NavBar>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
