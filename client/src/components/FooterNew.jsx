import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img
                src={ "https://via.placeholder.com/150x50"}
                alt="BookMyBanquets"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 mb-6">
              BookMyBanquets is the premier platform for finding and booking
              banquet halls and event spaces for all your special occasions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#youtube"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#venues"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Venues
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Locations</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#new-york"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  New York
                </a>
              </li>
              <li>
                <a
                  href="#los-angeles"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Los Angeles
                </a>
              </li>
              <li>
                <a
                  href="#chicago"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Chicago
                </a>
              </li>
              <li>
                <a
                  href="#miami"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Miami
                </a>
              </li>
              <li>
                <a
                  href="#las-vegas"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  Las Vegas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  1234 Broadway, New York, NY 10001, United States
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 text-gold-500 mr-3" />
                <a
                  href="tel:+18001234567"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 text-gold-500 mr-3" />
                <a
                  href="mailto:info@bookmybanquets.com"
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  info@bookmybanquets.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BookMyBanquets. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#terms"
              className="text-gray-500 hover:text-gold-500 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-gray-500 hover:text-gold-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#cookies"
              className="text-gray-500 hover:text-gold-500 text-sm transition-colors"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
