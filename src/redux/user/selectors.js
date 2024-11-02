export const selectUserName = (state) => state.user.user.username;
export const selectUserBalance = (state) => state.user.user.balance;
export const selectErrorUser = (state) => state.user.error;
export const selectIsUserLoading = (state) => state.user.isLoading;
