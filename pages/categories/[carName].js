import { useRouter } from "next/router";
import CarsList from "@/Components/template/CarsList";
import carsData from "@/data/carsData";

const CarName = () => {
  const router = useRouter();

  const GetDataCustomize = carsData.filter(
    (item) => item.category === router.query.carName
  );
  return <CarsList data={GetDataCustomize} />;
};

export default CarName;

// import CarsList from "@/Components/template/CarsList";
// import carsData from "@/data/carsData";

// const hatchback = () => {
//   const GetDataCustomize = carsData.filter(
//     (item) => item.category === "hatchback"
//   );
//   return <CarsList data={GetDataCustomize} />;
// };

// export default hatchback;
