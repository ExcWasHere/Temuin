import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about-us", "routes/about-us.tsx"),
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
    route("dashboard-user", "routes/dashboard-user.tsx"),
    route("dashboard-umkm", "routes/dashboard-umkm.tsx"),
] satisfies RouteConfig;

