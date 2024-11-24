import Helmet from "../../Layout/Helmet/Helmet";

const NavBar = () => {
  return (
    <>
      <nav>
        <Helmet className="py-10 relative z-20 flex justify-between items-center gap-3">
          <img
            src="./Logo1.png"
            className="size-16 cursor-pointer"
            alt="Logo"
          />
          <button className="relative-font-medium group bg-white   duration-300 rounded-full h-12 w-36 outline-none ">
            <a
              className="relative z-30 duration-300 group-hover:text-black"
              href="mailto:info@synthropic.com"
            >
              Contact Us
            </a>
          </button>
        </Helmet>
      </nav>
    </>
  );
};

export default NavBar;
