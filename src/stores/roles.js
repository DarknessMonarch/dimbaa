import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useRoleStore = defineStore("roles", () => {
  const roles = ref(null);
  const router = useRouter();
  const routeName = ref(null);
  // // set roles
  // function setRoles(userLogin) {
  //   switch(userLogin.value){
  //     case 'Kevin@admin.com':
  //       roles.value = "admin";
  //       break;
  //   }
  // }

  // set roles
  function setRoles(role) {
    roles.value = role;
  }

  //routes based on roles
  function route() {
    switch (roles.value) {
      case "super-admin":
        routeName.value = "AdminBoard";
        router.push({ name: "AdminBoard" });
        break;
      case "team-admin":
        routeName.value = "TeamBoard";
        router.push({ name: "TeamBoard" });
        break;
      case "data-manager":
        routeName.value = "DataBoard";
        router.push({ name: "DataBoard" });
        break;
      case "league-director":
        routeName.value = "LeagueBoard";
        router.push({ name: "LeagueBoard" });
        break;
      case "general-coordinator":
        routeName.value = "GeneralBoard";
        router.push({ name: "GeneralBoard" });
        break;
      case "match-commissioner":
        routeName.value = "MatchBoard";
        router.push({ name: "MatchBoard" });
        break;
      case "referee":
        routeName.value = "RefereeBoard";
        router.push({ name: "RefereeBoard" });
        break;
      case "referee-assessor":
        routeName.value = "AssessorBoard";
        router.push({ name: "AssessorBoard" });
        break;
      case "team-manager":
        routeName.value = "ManagerBoard";
        router.push({ name: "ManagerBoard" });
        break;
      default:
        routeName.value = "Login";
        router.push({ name: "Login" });
        break;
    }
  }

  return { roles, setRoles, route, routeName };
});
