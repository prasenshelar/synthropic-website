const StayConnected = () => {
  return (
    <section className="bg-secondary/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl mb-7  relative-font-bold">Stay Connected</h2>
        <p className="mt-4 text-lg my-9 sm:text-base  relative-font-medium">
          Connect with us today to learn more about how Synthropic is reshaping
          security strategies.
        </p>
        <button className="relative-font-medium group btn-bg   duration-300 rounded-full h-12 w-36 outline-none ">
          <a
            className="relative z-30 duration-300 group-hover:text-black"
            href="mailto:info@synthropic.com"
          >
            Contact Us
          </a>
        </button>
      </div>
    </section>
  );
};

export default StayConnected;
