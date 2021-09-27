import api from "../axios/api";
import setAllCars from "../store/actions/cars";

export default function getAllCars() {
    const apiUrl = "/db/car";
    const params = {
        "limit": 20
    }
    return (dispatch) => {
        api.get(apiUrl, { params })
            .then((resp) => {
                const cars = resp.data.data.map((data) => ({
                    id: data.id,
                    name: data.name,
                    type: data.categoryId,
                    priceMax: data.priceMax,
                    priceMin: data.priceMin,
                    number: data.number,
                    colors: data.colors,
                    thumbnail: data.thumbnail,
                    tank: data.tank
                }));
                dispatch(setAllCars(cars));
            });
    }
}
