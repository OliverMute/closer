export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  /* it has to be the same as in user.reducer.jsx in
   * case: "SET_USER_USER"*/
  payload: user,
  /* set user as the payload*/
});
