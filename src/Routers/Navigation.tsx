import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { NavBar } from "./styleNavigation";
import { LazyPage, LazyPage2, LazyPage3 } from "../01-Layout/pages";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <FaReact size="1.9rem" />
        <li>
          <NavLink
            to="/lazy1"
            className={(active) => (active.isActive ? "active" : "")}
          >
            LAZY 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lazy2"
            className={(active) => (active.isActive ? "active" : "")}
          >
            LAZY 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lazy3"
            className={(active) => (active.isActive ? "active" : "")}
          >
            LAZY 3
          </NavLink>
        </li>
      </NavBar>
      <Routes>
        <Route path="/lazy1" element={<LazyPage />} />
        <Route path="/lazy2" element={<LazyPage2 />} />
        <Route path="/lazy3" element={<LazyPage3 />} />
        <Route path="/*" element={<Navigate to="/lazy1" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
