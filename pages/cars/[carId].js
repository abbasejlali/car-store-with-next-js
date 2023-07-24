import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import CarDetails from "@/Components/template/CarDetails";

const CarDetailsMain = () => {
  const router = useRouter();
  const carId = router.query.carId;
  const DataDetails = carsData[carId - 1];
  return <CarDetails {...DataDetails} />;
};

export default CarDetailsMain;
