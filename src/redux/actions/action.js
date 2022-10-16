import { ActionType } from "../constants/constant";

export const toggleAction = () => {
  return {
    type: ActionType.TOGGLE_MENU,
  };
};
