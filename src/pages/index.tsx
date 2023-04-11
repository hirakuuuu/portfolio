import Header from "@/components/organisms/Header";
import Keyboard from "@/components/organisms/Keyboard";

const Home = () => {
  return (
    <>
      <div className="justify-center text-center">
        <div className="my-10 text-[#4c5870] md:text-4xl">
          Morimoto Hiraku's Portfolio
        </div>
        <div className="my-10 text-[#4c5870] md:text-3xl">
          名古屋大学情報学部自然情報学科数理情報系　森元拓
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Home;
