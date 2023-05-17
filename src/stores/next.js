import { ref} from "vue";
import { defineStore } from "pinia";


export const useNextStore = defineStore("nextRoute", () => {
    const nextRouteState = ref(false);
    const previousRouteState = ref(false);

    const updateNextState = () => {
        nextRouteState.value = true;
    }

    
    const updatePreviousState = () => {
        previousRouteState.value = true;
    }


    return { updateNextState, nextRouteState, updatePreviousState, previousRouteState  };
});
