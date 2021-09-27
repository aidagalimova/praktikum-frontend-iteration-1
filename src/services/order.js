import moment from "moment";
import api from "../axios/api";
import {
    orderSet
} from "../store/actions/order-info";

async function getOrderStatusId(num) {
    const apiUrl = "/db/orderStatus";
    const resp = await api.get(apiUrl);
    return resp.data.data[num].id;
}
export default async function sendOrder(order) {
    const apiUrl = "/db/order";
    const orderInfo = {
        orderStatusId: {
            id: await getOrderStatusId(0)
        },
        cityId: {
            id: JSON.parse(order.city).id
        },
        pointId: {
            id: JSON.parse(order.point).id
        },
        carId: order.selectedCar.id,
        color: order.color,
        dateFrom: moment(order.date.start).format("DD.MM.YYYY HH:mm"),
        dateTo: moment(order.date.end).format("DD.MM.YYYY HH:mm"),
        rateId: JSON.parse(order.tariff).id,
        price: order.totalPrice,
        isFullTank: order.services.includes("Полный бак, 500р"),
        isNeedChildChair: order.services.includes("Детское кресло, 200р"),
        isRightWheel: order.services.includes("Правый руль, 1600р")
    };
    api.post(apiUrl, orderInfo).then((resp) => {
        window.location.replace(`/${resp.data.data.id}`);
    });
}

export function getOrder(id) {
    const apiUrl = `/db/order/${id}`;
    return (dispatch) => {
        api.get(apiUrl)
            .then((resp) => {
                const order = resp.data.data;
                const serv = order.isFullTank ? ["Полный бак, 500р"] : [];
                if (order.isNeedChildChair)
                    serv.push("Детское кресло, 200р");
                if (order.isRightWheel)
                    serv.push("Правый руль, 1600р");
                dispatch(orderSet({
                    city: JSON.stringify(order.cityId),
                    point: JSON.stringify(order.pointId),
                    selectedCar: order.carId,
                    color: order.color,
                    rateId: JSON.stringify(order.rateId),
                    date: {
                        start: order.dateFrom,
                        end: order.dateTo,
                    },
                    duration: [order.dateFrom - order.dateTo],
                    services: serv,
                    maxPrice: null,
                    minPrice: null,
                    totalPrice: order.price,
                    number: order.updatedAt,
                    orderStatusId: order.orderStatusId,
                    id: order.id
                }
                ))
            })
    }
}

export async function cancelOrder(order) {
    const apiUrl = `/db/order/${order.id}`;
    const orderInfo = {
        orderStatusId: {
            id: await getOrderStatusId(2)
        },
        cityId: {
            id: JSON.parse(order.city).id
        },
        pointId: {
            id: JSON.parse(order.point).id
        },
        carId: order.selectedCar.id,
        color: order.color,
        dateFrom: moment(order.date.start).format("DD.MM.YYYY HH:mm"),
        dateTo: moment(order.date.end).format("DD.MM.YYYY HH:mm"),
        rateId: JSON.parse(order.tariff).id,
        price: order.totalPrice,
        isFullTank: order.services.includes("Полный бак, 500р"),
        isNeedChildChair: order.services.includes("Детское кресло, 200р"),
        isRightWheel: order.services.includes("Правый руль, 1600р")
    };
    api.put(apiUrl, orderInfo).then(() => {
        window.location.reload();
    });
}