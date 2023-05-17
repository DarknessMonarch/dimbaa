import { ref } from "vue";
import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", () => {
  const showPre = ref(false);
  const showPost = ref(false);
  const popDrawer = ref(false);
  const showSecond = ref(false);
  const IsDrawerOpen = ref(false);
  const showFeedback = ref(false);

  const toggleDrawer = () => {
    IsDrawerOpen.value = !IsDrawerOpen.value;
  };

  const toggleSecond = () => {
    showSecond.value = !showSecond.value;
  };

  const togglePre = () => {
    showPre.value = !showPre.value;
  };

  const togglePost = () => {
    showPost.value = !showPost.value;
  };

  const togglePop = () => {
    popDrawer.value = !popDrawer.value;
  };

  const toggleFeedback = () => {
    showFeedback.value = !showFeedback.value;
    popDrawer.value = !popDrawer.value;
  };

  return {
    IsDrawerOpen,
    toggleDrawer,
    popDrawer,
    togglePop,
    toggleFeedback,
    showFeedback,
    showSecond,
    toggleSecond,
    showPre,
    showPost,
    togglePre,
    togglePost,
  };
});
