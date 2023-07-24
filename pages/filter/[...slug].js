import CarsList from "@/Components/template/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const FilterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const GetDataFilter = carsData.filter(
    (item) => item.price >= min && item.price <= max
  );

  if (!GetDataFilter.length) return <h3>Not Found</h3>;
  return <CarsList data={GetDataFilter} />;
};

export default FilterCars;
