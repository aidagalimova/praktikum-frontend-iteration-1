import api from "../axios/api";
import { setCities, setPoints } from "../store/actions/locations";

export default function getCities() {
    const apiUrl = "/db/city";
    return (dispatch) => {
        api.get(apiUrl)
            .then((resp) => {
                dispatch(setCities(resp.data.data));
            });
    }
}

export function getPoints(cityId) {
    const apiUrl = "/db/point";
    return (dispatch) => {
        api.get(apiUrl)
            .then((resp) => {
                const points = resp.data.data.filter((point) => point.cityId.id === cityId);
                dispatch(setPoints(points));
            })
    }
}