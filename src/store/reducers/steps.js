export default function stepReducer(state = 0, action) {
  switch (action.type) {
    case "CHANGE_STEP":
      return action.payload;
    default:
      return state;
  }
}
