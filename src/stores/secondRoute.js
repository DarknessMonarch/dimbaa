import { shallowRef } from "vue";
import { defineStore } from "pinia";

export const useSecondRouteStore = defineStore("secondRoute", () => {
  const refereeRoute = shallowRef(null);
  const assessorRoute = shallowRef(null);


const setRefereeRoute = () => {
  RefereeRoute.value = window.location.pathname;
}


  return { RefereeRoute, AssessorRoute, setRefereeRoute };
});
