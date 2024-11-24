import { useState, useEffect } from "react";

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-16 sm:py-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-4 bg-[#B03DFF]  relative-font-medium text-white rounded-full h-8 w-32 flex justify-center items-center mx-auto">
          Coming Soon
        </span>
        <h2 className="text-4xl relative-font-bold  mb-6">
          Advanced Threat Intelligence Platform
        </h2>
        <p className="text-lg sm:text-base  relative-font-medium mb-12 max-w-2xl mx-auto">
          Our next-generation platform is under development. Stay tuned for a
          revolutionary approach to security intelligence.
        </p>

        <div className="grid grid-cols-4  gap-4 max-w-xl mx-auto">
          <div className="p-4">
            <div className="text-4xl relative-font-medium">{timeLeft.days}</div>
            <div className="text-sm text-muted-foreground">Days</div>
          </div>
          <div className="p-4">
            <div className="text-4xl relative-font-medium">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="p-4">
            <div className="text-4xl relative-font-medium">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="p-4">
            <div className="text-4xl relative-font-medium">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
