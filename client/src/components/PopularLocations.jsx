import { motion } from "framer-motion";

const PopularLocations = () => {
  const locations = [
    {
      id: 1,
      name: "Lahore",
      image:
        "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 185,
    },
    {
      id: 2,
      name: "Karachi",
      image:
        "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 160,
    },
    {
      id: 3,
      name: "Islamabad",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 110,
    },
    {
      id: 4,
      name: "Rawalpindi",
      image:
        "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 95,
    },
    {
      id: 5,
      name: "Multan",
      image:
        "https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 82,
    },
    {
      id: 6,
      name: "Faisalabad",
      image:
        "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      venueCount: 74,
    },
  ];
  

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Popular Locations</h2>
          <p className="section-subtitle mx-auto">
            Discover banquet halls and event spaces in these popular cities
            across the country
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <a
                href={`#location-${location.id}`}
                className="block relative group overflow-hidden rounded-lg shadow-card"
              >
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-navy-900/20 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {location.name}
                  </h3>
                  <p className="text-gold-500 font-medium">
                    {location.venueCount} Venues
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;
