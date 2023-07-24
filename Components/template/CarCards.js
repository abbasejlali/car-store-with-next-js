import carsData from "@/data/carsData";
import Styles from "./CarCards.module.css";
import Card from "../module/Card";

const CarCards = () => {
  return (
    <div className={Styles.container}>
      {carsData.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarCards;
