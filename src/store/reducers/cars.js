const initialState = null;

export default function carsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ALL_CARS":
            return action.payload
        default:
            return state;
    }
}
