import api from "../axios/api";
import setTariffs from "../store/actions/tariffs";

export default function getTariffs() {
    const apiUrl = "/db/rate";
    return (dispatch) => {
        api.get(apiUrl)
            .then((resp) => {
                dispatch(setTariffs(resp.data.data));
            });
    }
}