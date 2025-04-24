import Footer from "../components/FooterNew";
import Hero from "../components/Hero";
import VenueListing from "../components/VenueLising";
import VenueGrid from "../components/VenueGrid";

const venues = [
  {
    id: 1,
    name: "The Grand Ballroom",
    location: "Manhattan, New York",
    image:
      "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$5,000",
    capacity: "300-500 guests",
    rating: 4.9,
    reviewCount: 124,
    featured: true,
  },
  {
    id: 2,
    name: "Royal Gardens",
    location: "Beverly Hills, CA",
    image:
      "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$4,500",
    capacity: "200-350 guests",
    rating: 4.8,
    reviewCount: 98,
    featured: true,
  },
  {
    id: 3,
    name: "Oceanview Terrace",
    location: "Miami Beach, FL",
    image:
      "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$6,200",
    capacity: "100-250 guests",
    rating: 4.7,
    reviewCount: 86,
    featured: true,
  },
  {
    id: 4,
    name: "The Majestic",
    location: "Chicago, IL",
    image:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$3,800",
    capacity: "150-300 guests",
    rating: 4.6,
    reviewCount: 74,
    featured: true,
  },
  {
    id: 5,
    name: "Crystal Palace",
    location: "Las Vegas, NV",
    image:
      "https://images.pexels.com/photos/3038424/pexels-photo-3038424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$7,500",
    capacity: "400-800 guests",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
  },
  {
    id: 2,
    name: "Royal Gardens",
    location: "Beverly Hills, CA",
    image:
      "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$4,500",
    capacity: "200-350 guests",
    rating: 4.8,
    reviewCount: 98,
    featured: true,
  },
  {
    id: 3,
    name: "Oceanview Terrace",
    location: "Miami Beach, FL",
    image:
      "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$6,200",
    capacity: "100-250 guests",
    rating: 4.7,
    reviewCount: 86,
    featured: true,
  },
  {
    id: 4,
    name: "The Majestic",
    location: "Chicago, IL",
    image:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$3,800",
    capacity: "150-300 guests",
    rating: 4.6,
    reviewCount: 74,
    featured: true,
  },
  {
    id: 5,
    name: "Crystal Palace",
    location: "Las Vegas, NV",
    image:
      "https://images.pexels.com/photos/3038424/pexels-photo-3038424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$7,500",
    capacity: "400-800 guests",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
  },
];
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <VenueGrid venues={venues} />
      <Footer></Footer>
    </div>
  );
}
