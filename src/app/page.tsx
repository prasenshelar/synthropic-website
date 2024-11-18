"use client";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Synthropic
        </h1>
        <p className="text-2xl mt-4 text-gray-400">
          Transforming the Future of Threat Intelligence and Cyber Resilience
        </p>
      </header>

      {/* Core Message */}
      <section className="text-center">
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          We are building something groundbreaking in the space of threat detection and response.  
          <br />
          <span className="text-gray-400 italic">
            Stay curious. More information will be revealed soon.
          </span>
        </p>
        <div className="mt-6">
          <a
            href="mailto:info@synthropic.com"
            className="px-6 py-3 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Subtle Background Animation */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        For inquiries, reach us at:{" "}
        <a href="mailto:info@synthropic.com" className="text-blue-400 hover:underline">
          info@synthropic.com
        </a>
        <br />
        © {new Date().getFullYear()} Synthropic. All rights reserved.
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(2); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
      `}</style>
    </main>
  );
}
