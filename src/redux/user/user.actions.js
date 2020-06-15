import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  /* it has to be the same as in user.reducer.jsx in
   * case: "SET_USER_USER"*/
  payload: user,
  /* set user as the payload*/
});
