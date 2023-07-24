import Categories from "@/Components/module/Categories";
import SearchBar from "@/Components/module/SearchBar";
import CarCards from "@/Components/template/CarCards";

const Cars = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarCards />
    </>
  );
};

export default Cars;
