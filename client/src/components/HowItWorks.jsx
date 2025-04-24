import { FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiSearch className="h-8 w-8" />,
      title: "Search",
      description:
        "Browse through our extensive collection of banquet halls and event spaces.",
      delay: 0.1,
    },
    {
      id: 2,
      icon: <FiCalendar className="h-8 w-8" />,
      title: "Book",
      description:
        "Reserve your desired date and time with our instant booking system.",
      delay: 0.3,
    },
    {
      id: 3,
      icon: <FiCheckCircle className="h-8 w-8" />,
      title: "Celebrate",
      description:
        "Enjoy your event in a stunning venue with all your requirements met.",
      delay: 0.5,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto">
            Finding and booking your perfect banquet hall has never been easier
            with our simple process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-8 mx-auto">
                <div className="absolute -inset-3 rounded-full bg-gold-100 opacity-30 animate-pulse-slow"></div>
                <div className="relative flex items-center justify-center w-20 h-20 mx-auto bg-gold-50 text-gold-500 rounded-full border-2 border-gold-100">
                  {step.icon}
                </div>

                {step.id < steps.length && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gold-100">
                    <div className="absolute right-0 -top-1 h-3 w-3 rounded-full bg-gold-300"></div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-navy-800">
                {step.title}
              </h3>
              <p className="text-navy-500">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#venues" className="btn-primary">
            Find Your Venue Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
