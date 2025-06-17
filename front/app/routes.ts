import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("adoptions", "routes/adoptions.tsx"),
    route("a-propos", "routes/a-propos.tsx"),
    route("contact", "routes/contact.tsx"),
    route("ressources", "routes/ressources.tsx"),
    route("*", "routes/error.tsx"),
  ]),
] satisfies RouteConfig;
