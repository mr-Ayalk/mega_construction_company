import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      label: "Completed Projects",
      value: 2000,
      prefix: "",
      suffix: "+",
      description:
        "Projects that have been successfully delivered and completed.",
    },
    {
      label: "Ongoing Projects",
      value: 200,
      prefix: "",
      suffix: "+",
      description: "Projects currently under development or management.",
    },
    {
      label: "Workers",
      value: 700,
      prefix: "",
      suffix: "+",
      description: "Dedicated professionals working under our company.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white shadow-lg rounded-2xl"
      >
        {stats.map((stat, index) => (
          <div key={index} className="p-6">
            <h2 className="text-4xl font-bold text-orange-600 mb-2">
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  delay={0.2}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              )}
            </h2>
            <h3 className="text-lg font-semibold text-gray-800">
              {stat.label}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
