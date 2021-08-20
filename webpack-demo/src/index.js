import store from "./store";
import { bugAdded, bugResolved } from "./actionsTypes";

// do this in the UI-Layer, when a state change
// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed", store.getState());
// });

// state = reduce(state, action)
// notify the subscribers
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// unsubscribe();
// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1,
//   },
// });
console.log(store.getState());
