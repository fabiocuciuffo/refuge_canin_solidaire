import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("adoption", "routes/adoption.tsx"),
    route("refuge", "routes/refuge.tsx"),
    route("devenir-benevole", "routes/devenir-benevole.tsx"),
    route("evenements", "routes/evenements.tsx"),
    route("articles", "routes/articles.tsx"),
    route("articles/:slug", "routes/articles.$slug.tsx"),
    route("a-propos", "routes/a-propos.tsx"),
    route("contact", "routes/contact.tsx"),
    route("ressources", "routes/ressources.tsx"),
    route("dons", "routes/dons.tsx"),

    // API Routes
    route("api/subscribe-newsletter", "routes/api/subscribe-newsletter.ts"),
    route("api/submit-benevolat", "routes/api/submit-benevolat.ts"),
    route("api/submit-contact", "routes/api/submit-contact.ts"),
    route("*", "routes/error.tsx"),
  ]),
] satisfies RouteConfig;
