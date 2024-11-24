import Helmet from "../Helmet/Helmet";
import NavBar from "../../Components/NavBar/NavBar";
// import { useEffect, useRef } from "react";
const Header = () => {
  // const videoRef = useRef(null);
  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.addEventListener("ended", () => {
  //       video.currentTime = 0;
  //       video.play();
  //     });
  //   }
  //   return () => {
  //     if (video) {
  //       video.removeEventListener("ended", () => {});
  //     }
  //   };
  // }, []);
  return (
    <div className="min-h-screen relative sm:bg-center  bg-[url('/bg.jpg')] bg-cover">
      <NavBar />
      {/* <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full z-10  h-full object-cover"
        controlsList="nodownload"
        autoPlay
        muted
        loop
        type="video/mp4"
        playsInline
        preload="auto"
      >
        <source src="./Video/hero.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute bg-opacity-50 bg-black top-0 left-0 w-full z-10  h-full">
        {/* <img
          src="/bg.jpg"
          className="absolute top-0 left-0 w-full  h-full object-cover"
          alt=""
        /> */}
      </div>
      <div className="  pt-32 pb-40 relative z-30">
        <Helmet className="flex flex-col items-center text-center">
          <h1 className="relative-font-bold text-transparent text-white font-medium text-8xl md:text-7xl sm:text-6xl">
            Synthropic
          </h1>
          <p className="relative-font-medium text-white  mt-8 text-2xl md:text-xl max-w-3xl sm:text-lg">
            Evolving the landscape of threat detection and response through
            adaptive, cutting-edge systems.
          </p>
        </Helmet>
      </div>
    </div>
  );
};

export default Header;
