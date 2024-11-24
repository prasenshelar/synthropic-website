import Footer from "../Components/Footer/Footer";
// import { ComingSoon } from "../Layout/ComingSoon/ComingSoon";
import Header from "../Layout/Header/Header";
import StayConnected from "../Layout/StayConnected/StayConnected";
import WhyUs from "../Layout/WhyUs/WhyUs";
const Home = () => {
  return (
    <>
      <Header />
      <WhyUs />
      {/* <ComingSoon /> */}
      <StayConnected />
      <Footer />
    </>
  );
};

export default Home;
