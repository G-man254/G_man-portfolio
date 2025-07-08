import { index, route } from "@react-router/dev/routes";

export default [index("routes/home.jsx"),
    route("about", "routes/about.jsx"),
    route("projects", "routes/projects.jsx"),
    route("contact", "routes/contact.jsx"),
];
