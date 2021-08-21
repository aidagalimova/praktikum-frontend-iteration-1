import React from "react";
import { Layout } from "antd";
import Sidebar from "../../components/sidebar";
import "./index.scss";
import MainPageContent from "../../components/main-page-content";
import SliderElement from "../../components/slider-element";
import slider1 from "../../assets/image/sliderImg1.png";
import slider2 from "../../assets/image/sliderImg2.png";
import slider3 from "../../assets/image/sliderImg3.png";
import slider4 from "../../assets/image/sliderImg4.png";

const { Content } = Layout;

const sliderElements = [
  {
    id: 1,
    name: "Бесплатная парковка",
    discription: `Оставляйте машину на платных городских парковках и разрешенных местах, 
    не нарушая ПДД, а также в аэропортах`,
    img: slider1,
  },
  {
    id: 2,
    name: "Страховка",
    discription: `Полная страховка страховка автомобиля`,
    img: slider2,
  },
  {
    id: 3,
    name: "Бензин",
    discription: `Полный бак на любой заправке города за наш счёт`,
    img: slider3,
  },
  {
    id: 4,
    name: "Обслуживание",
    discription: `Автомобиль проходит еженедельное ТО`,
    img: slider4,
  },
];

function MainPage() {
  return (
    <div className="page">
      <Layout>
        <Sidebar />
        <Content className="content">
          <MainPageContent />
        </Content>
        <Content className="slider">
          <SliderElement el={sliderElements[0]} />
        </Content>
      </Layout>
    </div>
  );
}
export default MainPage;
