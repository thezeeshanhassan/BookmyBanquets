import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 bg-navy-800 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gold-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold-500 rounded-full opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Book Your Perfect{" "}
            <span className="text-gold-500">Banquet Hall</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg opacity-90 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who found their dream venues
            through BookMyBanquets. Our platform offers a wide selection of
            banquet halls and event spaces for any occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/venues"
              className="btn-primary bg-gold-500 hover:bg-gold-600 text-navy-800"
            >
              Browse Venues
            </a>
            <a
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
