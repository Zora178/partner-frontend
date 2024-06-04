import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Person from "../pages/person.vue";
import Search from "../pages/Search.vue";
import EditUser from "../pages/EditUser.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/team", component: Team },
  { path: "/user", component: Person },
  { path: "/search", component: Search },
  { path: "/user/edit", component: EditUser },
]

export default routes;