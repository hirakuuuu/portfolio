import Header from "@/components/organisms/Header";
import Keyboard from "@/components/organisms/Keyboard";

const Home = () => {
  return (
    <>
      <div className="text-center align-middle 2xl:mt-[15vh]">
        <div className="my-10 text-2xl text-[#4c5870] md:text-4xl">
          Hiraku Morimoto's Portfolio
        </div>
        <div className="my-10 text-lg text-[#4c5870] md:text-3xl">
          名古屋大学情報学部
          <span className="block md:hidden">
            <br />
          </span>
          <span className="md:mr-6">自然情報学科数理情報系</span>
          <span className="block md:hidden">
            <br />
          </span>
          森元拓
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Home;
