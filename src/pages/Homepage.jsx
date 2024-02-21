import Explore from "../components/Explore/explore";
import Head from "../components/Head/Head";
import Hit from "../components/Hit/Hit";
import Hp from "../components/Hp/Hp";
import Pics from "../components/Pics/pics";
import Secure from "../components/Secure/Secure";
import What from "../components/What/What";

const Home = () => {
  return (
    <>
       {/* <Navbar /> */}
      <Secure />
      <Explore/>
      <Hp />
      <Head/>
      <Pics/>
      <What/>
      <Hit/>

      
      </>
  );
};

export default Home;
