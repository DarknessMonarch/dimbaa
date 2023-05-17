import { ref , computed, watchEffect } from "vue";
import { defineStore } from "pinia";


export const usePostStore = defineStore("post", () => {
  const personality = ref(0)
  const position = ref(0)
  const accuracy = ref(0)
  const total = ref(0)
  const match = ref(0)
  const work = ref(0)


  return { personality, position, accuracy, match, work , total };
});
