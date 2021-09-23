export default function tariffsReducer(state = null, action) {
    switch (action.type) {
        case "SET_TARIFFS":
            return action.payload;
        default:
            return state;
    }
}
