"use client";

export default function HomePage() {
  const highlights = [
    {
      title: "Revolutionizing Threat Detection",
      description:
        "We are pioneering adaptive systems that redefine how organizations approach evolving security challenges.",
    },
    {
      title: "Achieve Comprehensive Visibility",
      description:
        "Empowering organizations with unmatched insights to detect, respond, and adapt effectively.",
    },
    {
      title: "Innovation for Resilience",
      description:
        "Setting new benchmarks with transformative solutions that are built to evolve and endure.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-gray-100 via-white to-gray-200 py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Synthropic
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Evolving the landscape of threat detection and response through
          adaptive, cutting-edge systems.
        </p>
        <div className="mt-8">
          <a
            href="mailto:info@synthropic.com"
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Highlights Section */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
            Why Synthropic?
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with us today to learn more about how Synthropic is reshaping
          security strategies.
        </p>
        <a
          href="mailto:info@synthropic.com"
          className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-lg font-semibold"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Synthropic. All rights reserved. |{" "}
          <a
            href="mailto:info@synthropic.com"
            className="text-blue-400 hover:underline"
          >
            info@synthropic.com
          </a>
        </p>
      </footer>
    </main>
  );
}
