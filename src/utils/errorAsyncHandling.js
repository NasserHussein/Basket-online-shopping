export const errorAsyncHandling = (state, payload) => { 
  state.loading = "failed";
	state.error = { message: payload, title: "SOMETHING WENT WRONG!" };
}