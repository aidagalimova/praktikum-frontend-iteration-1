import api from "../axios/api";

async function getOrderStatusId() {
    const apiUrl = "/db/orderStatus";
    const resp = await api.get(apiUrl);
    return resp.data.data[0].id;
}
export default async function sendOrder(order) {
    const apiUrl = "/db/order";
    const orderInfo = {
        orderStatusId: {
            id: await getOrderStatusId()
        },
        cityId: {
            id: JSON.parse(order.city).id
        },
        pointId: {
            id: JSON.parse(order.point).id
        },
        carId: order.selectedCar.id,
        color: order.color,
        dateFrom: order.date.start.format("DD.MM.YYYY HH:mm"),
        dateTo: order.date.end.format("DD.MM.YYYY HH:mm"),
        rateId: JSON.parse(order.tariff).id,
        price: order.totalPrice,
        isFullTank: order.services.includes("Полный бак, 500р"),
        isNeedChildChair: order.services.includes("Детское кресло, 200р"),
        isRightWheel: order.services.includes("Правый руль, 1600р")
    };
    api.post(apiUrl, orderInfo).then((resp) => {
        console.log(resp);
    });
}