// import { LazyPage, LazyPage2, LazyPage3 } from "../01-Layout/pages";
import { LazyExoticComponent, lazy } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/Shopping";

type JSXComponent = () => JSX.Element;

interface Route {
  // interface router
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunckName: "lazypage1" */ "../01-Layout/pages/LazyPage")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunckName: "lazypage2" */ "../01-Layout/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunckName: "lazypage3" */ "../01-Layout/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "lazy-3",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "shopping",
  },
];
