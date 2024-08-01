const routes = [
  {
    path: "/",
    component: () => import("src/pages/LoginPage/LoginPage.vue"),
  },
  {
    path: "/main",
    component: () => import("src/layouts/MainLayout/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
