import { Header } from "../../components/Header";
import { Search } from "./Search";
import Man from "../../assets/man.png";
import { Footer } from "../../components/Footer";

export const MainPage = () => {
  return (
    <div className="bg-main w-full h-[100vh] flex flex-col justify-start items-center">
      <Header />
      <div className="flex sm:flex-col lg:flex-row justify-center items-center lg:space-x-[9rem] h-[900px]">
        <Search />
        <img
          src={Man}
          alt="a man with laptop"
          className="h-auto sm:w-[20rem] sm:mt-4 lg:w-[30rem]"
        />
      </div>
      <Footer />
    </div>
  );
};
