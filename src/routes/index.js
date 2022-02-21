import { createWebHistory, createRouter } from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import SimpleForm from "../views/SimpleForm.vue";

const routes = [
  {
    path: "/login",
    name: "Auth",
    component: LoginForm,
  },
  {
    path: "/form",
    name: "Form",
    component: SimpleForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
