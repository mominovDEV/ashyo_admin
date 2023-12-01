export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/AdminLayout.vue"),
  children: [
    {
      path: "/dashboard",
      name: "admin_dashboard",
      component: () => import("@/views/CategoryView.vue"),
    },
    {
      path: "/orders",
      name: "admin_orders",
      component: () => import("@/views/OrderView.vue"),
    },
  ],
};
