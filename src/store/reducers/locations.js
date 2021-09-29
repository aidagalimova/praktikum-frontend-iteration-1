const initState = {
    cities: [],
    points: []
}
export default function locationsReducer(state = initState, action) {
    switch (action.type) {
        case "SET_CITIES":
            return {
                ...state,
                cities: action.payload.cities
            }

        case "SET_POINTS":
            return {
                ...state,
                points: action.payload.points
            }
        default:
            return state;
    }
}
