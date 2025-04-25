// "use client"

// import { useState } from "react"
// import {
//   Calendar,
//   Clock,
//   Users,
//   Package,
//   ChevronDown,
//   Search,
//   CalendarIcon,
//   User,
//   Home,
//   BookOpen,
//   Settings,
//   Phone,
//   Check,
//   X,
//   Info,
//   MapPin,
//   FileText,
//   MessageSquare,
// } from "lucide-react"

// // Sample customer data
// const customerData = {
//   id: "CUST1001",
//   name: "Imran Ahmed",
//   email: "imran.ahmed@gmail.com",
//   phone: "+92 333 1234567",
//   address: "45 Garden Town, Lahore",
//   memberSince: "January 2023",
// }

// // Sample bookings data
// const bookingsData = [
//   {
//     id: "BK2001",
//     eventType: "Wedding Reception",
//     date: "2025-08-15",
//     time: "Evening (7:30 PM - 11:30 PM)",
//     guestCount: 250,
//     package: "Premium Package",
//     status: "confirmed",
//     amount: "PKR 225,000",
//     paymentStatus: "paid",
//     createdAt: "2025-05-20",
//     notes: "Need special flower arrangements",
//   },
//   {
//     id: "BK2002",
//     eventType: "Engagement Ceremony",
//     date: "2025-09-10",
//     time: "Afternoon (3:00 PM - 7:00 PM)",
//     guestCount: 150,
//     package: "Essential Package",
//     status: "pending",
//     amount: "PKR 125,000",
//     paymentStatus: "partial",
//     createdAt: "2025-05-25",
//     notes: "Will confirm final guest count 2 weeks before event",
//   },
//   {
//     id: "BK2003",
//     eventType: "Birthday Celebration",
//     date: "2025-07-05",
//     time: "Afternoon (3:00 PM - 7:00 PM)",
//     guestCount: 80,
//     package: "Essential Package",
//     status: "completed",
//     amount: "PKR 125,000",
//     paymentStatus: "paid",
//     createdAt: "2025-04-15",
//     notes: "Birthday cake was arranged by the venue",
//   },
// ]

// // Package options
// const packageOptions = [
//   {
//     id: "PKG001",
//     name: "Essential Package",
//     price: "PKR 125,000",
//     features: ["Basic Hall Decoration", "Standard Lighting", "Buffet Service for 100 Guests"],
//     description: "Perfect for smaller gatherings and simple celebrations.",
//   },
//   {
//     id: "PKG002",
//     name: "Premium Package",
//     price: "PKR 225,000",
//     features: ["Enhanced Hall Decoration", "Premium Lighting", "Buffet Service for 200 Guests", "DJ and Sound System"],
//     description: "Our most popular package for medium-sized events with enhanced services.",
//   },
//   {
//     id: "PKG003",
//     name: "Royal Package",
//     price: "PKR 350,000",
//     features: [
//       "Luxury Hall Decoration",
//       "Customizable Lighting",
//       "Buffet Service for 300 Guests",
//       "Live Band",
//       "Photography and Videography",
//     ],
//     description: "The ultimate luxury experience for your special day with all premium services included.",
//   },
// ]

// // Add hallOptions data after packageOptions
// const hallOptions = [
//   {
//     id: "hall1",
//     name: "Royal Grand Hall",
//     capacity: 500,
//     description: "Our largest and most luxurious hall with elegant décor and state-of-the-art facilities.",
//     images: ["/placeholder.svg?height=300&width=500"],
//     basePrice: "PKR 150,000",
//   },
//   {
//     id: "hall2",
//     name: "Crystal Palace Hall",
//     capacity: 350,
//     description: "A medium-sized hall with beautiful crystal chandeliers and modern amenities.",
//     images: ["/placeholder.svg?height=300&width=500"],
//     basePrice: "PKR 120,000",
//   },
//   {
//     id: "hall3",
//     name: "Emerald Garden Hall",
//     capacity: 200,
//     description: "An intimate hall with garden-themed décor, perfect for smaller gatherings.",
//     images: ["/placeholder.svg?height=300&width=500"],
//     basePrice: "PKR 90,000",
//   },
// ]

// // Hall amenities
// const hallAmenities = [
//   { name: "Air Conditioning", available: true },
//   { name: "Parking Space", available: true },
//   { name: "WiFi", available: true },
//   { name: "Sound System", available: true },
//   { name: "Stage", available: true },
//   { name: "Catering", available: true },
//   { name: "Decoration", available: true },
//   { name: "Valet Parking", available: true },
//   { name: "Bridal Room", available: true },
//   { name: "Projector", available: true },
//   { name: "Backup Generator", available: true },
//   { name: "Prayer Room", available: true },
// ]

// // Hall images
// const hallImages = [
//   "/placeholder.svg?height=300&width=500",
//   "/placeholder.svg?height=300&width=500",
//   "/placeholder.svg?height=300&width=500",
//   "/placeholder.svg?height=300&width=500",
// ]

// // Available dates (just for demo)
// const availableDates = [
//   "2025-07-01",
//   "2025-07-02",
//   "2025-07-03",
//   "2025-07-05",
//   "2025-07-06",
//   "2025-07-08",
//   "2025-07-09",
//   "2025-07-10",
//   "2025-07-12",
//   "2025-07-15",
//   "2025-07-18",
//   "2025-07-20",
//   "2025-07-22",
//   "2025-07-25",
//   "2025-07-28",
//   "2025-07-30",
//   "2025-08-01",
//   "2025-08-03",
//   "2025-08-05",
//   "2025-08-08",
//   "2025-08-10",
//   "2025-08-12",
//   "2025-08-15",
//   "2025-08-18",
//   "2025-08-20",
//   "2025-08-22",
//   "2025-08-25",
//   "2025-08-28",
//   "2025-08-30",
// ]

// // Time slots
// const timeSlots = [
//   { id: "morning", label: "Morning (10:00 AM - 2:00 PM)" },
//   { id: "afternoon", label: "Afternoon (3:00 PM - 7:00 PM)" },
//   { id: "evening", label: "Evening (7:30 PM - 11:30 PM)" },
// ]

// const CustomerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard")
//   const [selectedBooking, setSelectedBooking] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [bookings, setBookings] = useState(bookingsData)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedPackage, setSelectedPackage] = useState(null)
//   // Add selectedHall state after selectedPackage
//   const [selectedHall, setSelectedHall] = useState(null)
//   // In the bookingForm state, add a hallId field
//   const [bookingForm, setBookingForm] = useState({
//     eventType: "",
//     date: "",
//     time: "",
//     guestCount: "",
//     package: "",
//     hallId: "",
//     notes: "",
//   })

//   // Filter bookings based on search query
//   const filteredBookings = bookings.filter((booking) => {
//     return (
//       booking.eventType.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       booking.id.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   })

//   const upcomingBookings = bookings.filter((booking) => booking.status === "confirmed" || booking.status === "pending")

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" }
//     return new Date(dateString).toLocaleDateString("en-IN", options)
//   }

//   const openBookingModal = (booking) => {
//     setSelectedBooking(booking)
//     setIsModalOpen(true)
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setBookingForm({
//       ...bookingForm,
//       [name]: value,
//     })
//   }

//   const handlePackageSelect = (pkg) => {
//     setSelectedPackage(pkg)
//     setBookingForm({
//       ...bookingForm,
//       package: pkg.name,
//     })
//   }

//   // Add handleHallSelect function after handlePackageSelect
//   const handleHallSelect = (hall) => {
//     setSelectedHall(hall)
//     setBookingForm({
//       ...bookingForm,
//       hallId: hall.id,
//     })
//   }

//   const handleBookingSubmit = (e) => {
//     e.preventDefault()
//     // In a real app, this would send the booking request to the server
//     alert("Booking request submitted! Our team will review and confirm your booking soon.")
//     setBookingForm({
//       eventType: "",
//       date: "",
//       time: "",
//       guestCount: "",
//       package: "",
//       hallId: "",
//       notes: "",
//     })
//     setSelectedPackage(null)
//     setSelectedHall(null)
//   }

//   const cancelBooking = (id) => {
//     if (window.confirm("Are you sure you want to cancel this booking?")) {
//       // In a real app, this would send a cancellation request to the server
//       setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "cancelled" } : booking)))
//     }
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 shadow-sm">
//         <div className="flex items-center justify-between px-6 py-4">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold text-[#FF477E]">Lahore Royal Palace</h1>
//             <span className="ml-2 text-gray-500">Customer Portal</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </span>
//               <input
//                 type="text"
//                 placeholder="Search bookings..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="h-10 w-10 rounded-full bg-[#FF477E] text-white flex items-center justify-center font-medium">
//                 {customerData.name.charAt(0)}
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800">{customerData.name}</p>
//                 <p className="text-xs text-gray-500">Customer</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex px-6 border-t border-gray-100">
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "dashboard" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("dashboard")}
//           >
//             <div className="flex items-center">
//               <Home className="h-4 w-4 mr-2" />
//               Dashboard
//             </div>
//           </button>
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "book" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("book")}
//           >
//             <div className="flex items-center">
//               <Calendar className="h-4 w-4 mr-2" />
//               Book Hall
//             </div>
//           </button>
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "mybookings" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("mybookings")}
//           >
//             <div className="flex items-center">
//               <BookOpen className="h-4 w-4 mr-2" />
//               My Bookings
//             </div>
//           </button>
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "hallinfo" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("hallinfo")}
//           >
//             <div className="flex items-center">
//               <Info className="h-4 w-4 mr-2" />
//               Hall Information
//             </div>
//           </button>
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "account" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("account")}
//           >
//             <div className="flex items-center">
//               <User className="h-4 w-4 mr-2" />
//               My Account
//             </div>
//           </button>
//           <button
//             className={`px-4 py-3 font-medium text-sm ${activeTab === "support" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
//             onClick={() => setActiveTab("support")}
//           >
//             <div className="flex items-center">
//               <MessageSquare className="h-4 w-4 mr-2" />
//               Support
//             </div>
//           </button>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Replace the entire "Dashboard Overview" section in the activeTab === "dashboard" condition
//         to remove the customer reviews section */}
//         {activeTab === "dashboard" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome, {customerData.name}</h2>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-medium text-gray-800">Upcoming Events</h3>
//                   <Calendar className="h-5 w-5 text-[#FF477E]" />
//                 </div>
//                 {upcomingBookings.length > 0 ? (
//                   <div className="space-y-4">
//                     {upcomingBookings.slice(0, 3).map((booking) => (
//                       <div key={booking.id} className="flex items-start">
//                         <div className="flex-shrink-0 bg-[#FF477E]/10 p-2 rounded-lg mr-3">
//                           <CalendarIcon className="h-5 w-5 text-[#FF477E]" />
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">{booking.eventType}</p>
//                           <p className="text-xs text-gray-500">{formatDate(booking.date)}</p>
//                           <p className="text-xs text-gray-500 mt-1">{booking.time}</p>
//                           <div className="mt-1">
//                             <span
//                               className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full 
//                               ${
//                                 booking.status === "confirmed"
//                                   ? "bg-green-100 text-green-800"
//                                   : "bg-yellow-100 text-yellow-800"
//                               }`}
//                             >
//                               {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     <button
//                       className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
//                       onClick={() => setActiveTab("mybookings")}
//                     >
//                       View All Bookings
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="text-center py-4">
//                     <p className="text-gray-500">No upcoming events</p>
//                     <button
//                       className="mt-2 text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
//                       onClick={() => setActiveTab("book")}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
//                   <Settings className="h-5 w-5 text-[#FF477E]" />
//                 </div>
//                 <div className="space-y-3">
//                   <button
//                     onClick={() => setActiveTab("book")}
//                     className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <div className="flex items-center">
//                       <Calendar className="h-5 w-5 text-[#FF477E] mr-3" />
//                       <span className="text-sm font-medium">Book New Event</span>
//                     </div>
//                     <ChevronDown className="h-4 w-4 text-gray-400" />
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("mybookings")}
//                     className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <div className="flex items-center">
//                       <BookOpen className="h-5 w-5 text-[#FF477E] mr-3" />
//                       <span className="text-sm font-medium">View My Bookings</span>
//                     </div>
//                     <ChevronDown className="h-4 w-4 text-gray-400" />
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("hallinfo")}
//                     className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <div className="flex items-center">
//                       <Info className="h-5 w-5 text-[#FF477E] mr-3" />
//                       <span className="text-sm font-medium">Hall Information</span>
//                     </div>
//                     <ChevronDown className="h-4 w-4 text-gray-400" />
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("support")}
//                     className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <div className="flex items-center">
//                       <Phone className="h-5 w-5 text-[#FF477E] mr-3" />
//                       <span className="text-sm font-medium">Contact Support</span>
//                     </div>
//                     <ChevronDown className="h-4 w-4 text-gray-400" />
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-medium text-gray-800">Package Highlights</h3>
//                   <Package className="h-5 w-5 text-[#FF477E]" />
//                 </div>
//                 <div className="space-y-4">
//                   {packageOptions.map((pkg) => (
//                     <div key={pkg.id} className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-[#FF477E] mr-2"></div>
//                       <span className="text-sm text-gray-600">{pkg.name}</span>
//                       <span className="ml-auto text-sm font-medium text-gray-900">{pkg.price}</span>
//                     </div>
//                   ))}
//                   <button
//                     className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
//                     onClick={() => setActiveTab("book")}
//                   >
//                     View Package Details
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Hall Gallery Preview */}
//             <div className="bg-white rounded-lg shadow overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h3 className="text-lg font-medium text-gray-800">Our Halls</h3>
//               </div>
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {hallOptions.map((hall) => (
//                     <div key={hall.id} className="border rounded-lg overflow-hidden">
//                       <img
//                         src={hall.images[0] || "/placeholder.svg"}
//                         alt={hall.name}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <h4 className="font-medium text-gray-800">{hall.name}</h4>
//                         <p className="text-sm text-gray-500 mt-1">Capacity: Up to {hall.capacity} guests</p>
//                         <p className="text-sm text-gray-500 mt-1">Starting from {hall.basePrice}</p>
//                         <button
//                           onClick={() => {
//                             setActiveTab("book")
//                             setSelectedHall(hall)
//                             setBookingForm({
//                               ...bookingForm,
//                               hallId: hall.id,
//                             })
//                           }}
//                           className="mt-3 text-sm text-[#FF477E] hover:text-[#9D2235] font-medium"
//                         >
//                           Book This Hall
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "book" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Hall</h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Replace the booking form section in the activeTab === "book" condition
//               to include hall selection before package selection */}
//               <div className="lg:col-span-2">
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Booking Form</h3>
//                   </div>
//                   <div className="p-6">
//                     <form onSubmit={handleBookingSubmit}>
//                       <div className="mb-6">
//                         <h4 className="text-md font-medium text-gray-800 mb-4">1. Select a Hall</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                           {hallOptions.map((hall) => (
//                             <div
//                               key={hall.id}
//                               className={`border rounded-lg overflow-hidden cursor-pointer transition-colors ${
//                                 selectedHall && selectedHall.id === hall.id
//                                   ? "border-[#FF477E] bg-[#FF477E]/5"
//                                   : "border-gray-200 hover:border-[#FF477E]/50"
//                               }`}
//                               onClick={() => handleHallSelect(hall)}
//                             >
//                               <img
//                                 src={hall.images[0] || "/placeholder.svg"}
//                                 alt={hall.name}
//                                 className="w-full h-36 object-cover"
//                               />
//                               <div className="p-3">
//                                 <h5 className="font-medium text-gray-800">{hall.name}</h5>
//                                 <p className="text-xs text-gray-500 mt-1">Capacity: Up to {hall.capacity} guests</p>
//                                 <p className="text-xs font-medium text-gray-700 mt-1">From {hall.basePrice}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {selectedHall && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                           <div>
//                             <h4 className="text-md font-medium text-gray-800 mb-4">2. Event Details</h4>
//                             <div className="space-y-4">
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
//                                 <select
//                                   name="eventType"
//                                   value={bookingForm.eventType}
//                                   onChange={handleInputChange}
//                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                                   required
//                                 >
//                                   <option value="">Select Event Type</option>
//                                   <option value="Wedding Reception">Wedding Reception</option>
//                                   <option value="Engagement Ceremony">Engagement Ceremony</option>
//                                   <option value="Birthday Celebration">Birthday Celebration</option>
//                                   <option value="Corporate Event">Corporate Event</option>
//                                   <option value="Conference">Conference</option>
//                                   <option value="Other">Other</option>
//                                 </select>
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                                 <select
//                                   name="date"
//                                   value={bookingForm.date}
//                                   onChange={handleInputChange}
//                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                                   required
//                                 >
//                                   <option value="">Select Available Date</option>
//                                   {availableDates.map((date) => (
//                                     <option key={date} value={date}>
//                                       {formatDate(date)}
//                                     </option>
//                                   ))}
//                                 </select>
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
//                                 <select
//                                   name="time"
//                                   value={bookingForm.time}
//                                   onChange={handleInputChange}
//                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                                   required
//                                 >
//                                   <option value="">Select Time Slot</option>
//                                   {timeSlots.map((slot) => (
//                                     <option key={slot.id} value={slot.label}>
//                                       {slot.label}
//                                     </option>
//                                   ))}
//                                 </select>
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
//                                 <input
//                                   type="number"
//                                   name="guestCount"
//                                   value={bookingForm.guestCount}
//                                   onChange={handleInputChange}
//                                   placeholder="Enter number of guests"
//                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                                   required
//                                   min="10"
//                                   max={selectedHall.capacity}
//                                 />
//                                 <p className="text-xs text-gray-500 mt-1">
//                                   Maximum capacity: {selectedHall.capacity} guests
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div>
//                             <h4 className="text-md font-medium text-gray-800 mb-4">3. Select a Package</h4>
//                             <div className="space-y-4">
//                               {packageOptions.map((pkg) => (
//                                 <div
//                                   key={pkg.id}
//                                   className={`border rounded-lg p-4 cursor-pointer transition-colors ${
//                                     selectedPackage && selectedPackage.id === pkg.id
//                                       ? "border-[#FF477E] bg-[#FF477E]/5"
//                                       : "border-gray-200 hover:border-[#FF477E]/50"
//                                   }`}
//                                   onClick={() => handlePackageSelect(pkg)}
//                                 >
//                                   <div className="flex justify-between items-start">
//                                     <h4 className="text-sm font-medium text-gray-800">{pkg.name}</h4>
//                                     {selectedPackage && selectedPackage.id === pkg.id && (
//                                       <Check className="h-4 w-4 text-[#FF477E]" />
//                                     )}
//                                   </div>
//                                   <p className="text-sm font-bold text-gray-900 mt-1">{pkg.price}</p>
//                                   <p className="text-xs text-gray-500 mt-2">{pkg.description}</p>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                           <div className="md:col-span-2">
//                             <h4 className="text-md font-medium text-gray-800 mb-4">4. Additional Information</h4>
//                             <div>
//                               <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Special Requests/Notes
//                               </label>
//                               <textarea
//                                 name="notes"
//                                 value={bookingForm.notes}
//                                 onChange={handleInputChange}
//                                 placeholder="Any special requests or notes for your event"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                                 rows="3"
//                               ></textarea>
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       <div className="flex justify-end">
//                         <button
//                           type="submit"
//                           disabled={
//                             !selectedHall ||
//                             !selectedPackage ||
//                             !bookingForm.date ||
//                             !bookingForm.time ||
//                             !bookingForm.eventType ||
//                             !bookingForm.guestCount
//                           }
//                           className={`px-6 py-2 rounded-lg ${
//                             !selectedHall ||
//                             !selectedPackage ||
//                             !bookingForm.date ||
//                             !bookingForm.time ||
//                             !bookingForm.eventType ||
//                             !bookingForm.guestCount
//                               ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                               : "bg-[#FF477E] text-white hover:bg-[#9D2235]"
//                           }`}
//                         >
//                           Submit Booking Request
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Booking Information</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-700 mb-2">How Booking Works</h4>
//                         <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
//                           <li>Fill out the booking form with your event details</li>
//                           <li>Submit your booking request</li>
//                           <li>Our team will review your request within 24 hours</li>
//                           <li>Once approved, you'll receive a confirmation email</li>
//                           <li>Pay the booking deposit to secure your date</li>
//                         </ol>
//                       </div>

//                       <div className="border-t border-gray-200 pt-4">
//                         <h4 className="text-sm font-medium text-gray-700 mb-2">Booking Policies</h4>
//                         <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
//                           <li>50% advance payment required to confirm booking</li>
//                           <li>Remaining payment due 7 days before event</li>
//                           <li>Cancellation policy: Full refund if cancelled 30+ days before event</li>
//                           <li>50% refund if cancelled 15-29 days before event</li>
//                           <li>No refund for cancellations less than 15 days before event</li>
//                         </ul>
//                       </div>

//                       <div className="border-t border-gray-200 pt-4">
//                         <h4 className="text-sm font-medium text-gray-700 mb-2">Need Help?</h4>
//                         <p className="text-sm text-gray-600 mb-2">Contact our booking team for assistance:</p>
//                         <div className="flex items-center text-sm text-gray-600 mb-1">
//                           <Phone className="h-4 w-4 mr-2 text-[#FF477E]" />
//                           <span>+92 300 1234567</span>
//                         </div>
//                         <div className="flex items-center text-sm text-gray-600">
//                           <MessageSquare className="h-4 w-4 mr-2 text-[#FF477E]" />
//                           <span>bookings@royalpalace.pk</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "mybookings" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>

//             <div className="bg-white rounded-lg shadow overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h3 className="text-lg font-medium text-gray-800">All Bookings</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Booking ID
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Event Type
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Date
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Package
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Amount
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredBookings.map((booking) => (
//                       <tr key={booking.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eventType}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {formatDate(booking.date)}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.package}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                             ${
//                               booking.status === "confirmed"
//                                 ? "bg-green-100 text-green-800"
//                                 : booking.status === "pending"
//                                   ? "bg-yellow-100 text-yellow-800"
//                                   : booking.status === "completed"
//                                     ? "bg-blue-100 text-blue-800"
//                                     : "bg-red-100 text-red-800"
//                             }`}
//                           >
//                             {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <button
//                             className="text-[#FF477E] hover:text-[#9D2235] font-medium mr-3"
//                             onClick={() => openBookingModal(booking)}
//                           >
//                             View
//                           </button>
//                           {(booking.status === "confirmed" || booking.status === "pending") && (
//                             <button
//                               className="text-red-600 hover:text-red-800 font-medium"
//                               onClick={() => cancelBooking(booking.id)}
//                             >
//                               Cancel
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               {filteredBookings.length === 0 && (
//                 <div className="py-8 text-center">
//                   <p className="text-gray-500">No bookings found matching your criteria.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === "hallinfo" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Hall Information</h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2">
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">About Lahore Royal Palace</h3>
//                   </div>
//                   <div className="p-6">
//                     <p className="text-gray-600 mb-4">
//                       Lahore Royal Palace Banquet Hall has been creating memorable celebrations for over a decade.
//                       Established in 2010, our venue has hosted more than 3,000 successful events including glamorous
//                       weddings, corporate galas, and milestone celebrations. Located in the heart of Lahore, we pride
//                       ourselves on exceptional service and attention to detail.
//                     </p>
//                     <p className="text-gray-600 mb-4">
//                       Our elegant hall can accommodate up to 500 guests and features state-of-the-art sound and lighting
//                       systems, luxurious décor, and a professional staff dedicated to making your event perfect. We
//                       offer customizable packages to suit your specific needs and budget.
//                     </p>
//                     <div className="mt-6">
//                       <h4 className="text-md font-medium text-gray-800 mb-3">Hall Specifications</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex items-center">
//                           <Users className="h-5 w-5 text-[#FF477E] mr-2" />
//                           <span className="text-sm text-gray-600">Capacity: Up to 500 guests</span>
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="h-5 w-5 text-[#FF477E] mr-2" />
//                           <span className="text-sm text-gray-600">Location: Model Town, Lahore</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="h-5 w-5 text-[#FF477E] mr-2" />
//                           <span className="text-sm text-gray-600">Operating Hours: 10:00 AM - 11:30 PM</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Package className="h-5 w-5 text-[#FF477E] mr-2" />
//                           <span className="text-sm text-gray-600">Packages: 3 customizable options</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Hall Gallery</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {hallImages.map((image, index) => (
//                         <div key={index} className="relative group">
//                           <img
//                             src={image || "/placeholder.svg"}
//                             alt={`Hall image ${index + 1}`}
//                             className="w-full h-64 object-cover rounded-lg"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Amenities</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="grid grid-cols-1 gap-3">
//                       {hallAmenities.map((amenity, index) => (
//                         <div key={index} className="flex items-center">
//                           {amenity.available ? (
//                             <Check className="h-5 w-5 text-green-500 mr-2" />
//                           ) : (
//                             <X className="h-5 w-5 text-red-500 mr-2" />
//                           )}
//                           <span className="text-sm text-gray-600">{amenity.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-3">
//                       <div className="flex items-start">
//                         <Phone className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Phone</p>
//                           <p className="text-sm text-gray-600">+92 300 1234567</p>
//                           <p className="text-sm text-gray-600">+92 42 35678901</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start">
//                         <MessageSquare className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Email</p>
//                           <p className="text-sm text-gray-600">info@royalpalace.pk</p>
//                           <p className="text-sm text-gray-600">bookings@royalpalace.pk</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start">
//                         <MapPin className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Address</p>
//                           <p className="text-sm text-gray-600">123 Main Street, Model Town</p>
//                           <p className="text-sm text-gray-600">Lahore, Punjab 54000</p>
//                           <p className="text-sm text-gray-600">Pakistan</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "account" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">My Account</h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2">
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
//                   </div>
//                   <div className="p-6">
//                     <form>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.name}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                           <input
//                             type="email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.email}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                           <input
//                             type="tel"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.phone}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.address}
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-end">
//                         <button
//                           type="submit"
//                           className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
//                         >
//                           Update Information
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Change Password</h3>
//                   </div>
//                   <div className="p-6">
//                     <form>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
//                           <input
//                             type="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             placeholder="Enter current password"
//                           />
//                         </div>
//                         <div className="md:col-span-2"></div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//                           <input
//                             type="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             placeholder="Enter new password"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//                           <input
//                             type="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             placeholder="Confirm new password"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-end">
//                         <button
//                           type="submit"
//                           className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
//                         >
//                           Change Password
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Account Summary</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center mb-6">
//                       <div className="h-16 w-16 rounded-full bg-[#FF477E] text-white flex items-center justify-center text-xl font-medium">
//                         {customerData.name.charAt(0)}
//                       </div>
//                       <div className="ml-4">
//                         <h4 className="text-lg font-medium text-gray-800">{customerData.name}</h4>
//                         <p className="text-sm text-gray-500">Member since {customerData.memberSince}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//                         <span className="text-sm text-gray-600">Total Bookings</span>
//                         <span className="text-sm font-medium text-gray-900">{bookings.length}</span>
//                       </div>
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//                         <span className="text-sm text-gray-600">Upcoming Events</span>
//                         <span className="text-sm font-medium text-gray-900">{upcomingBookings.length}</span>
//                       </div>
//                       <div className="flex justify-between items-center pb-3 border-b border-gray-200">
//                         <span className="text-sm text-gray-600">Completed Events</span>
//                         <span className="text-sm font-medium text-gray-900">
//                           {bookings.filter((b) => b.status === "completed").length}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Notifications</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <input
//                             id="email-notifications"
//                             type="checkbox"
//                             className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
//                             defaultChecked
//                           />
//                           <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
//                             Email Notifications
//                           </label>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <input
//                             id="sms-notifications"
//                             type="checkbox"
//                             className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
//                             defaultChecked
//                           />
//                           <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-700">
//                             SMS Notifications
//                           </label>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <input
//                             id="promotional-emails"
//                             type="checkbox"
//                             className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
//                           />
//                           <label htmlFor="promotional-emails" className="ml-2 block text-sm text-gray-700">
//                             Promotional Emails
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-6">
//                       <button className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235] w-full">
//                         Save Preferences
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "support" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Support & Help</h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2">
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Contact Us</h3>
//                   </div>
//                   <div className="p-6">
//                     <form>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.name}
//                             readOnly
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                           <input
//                             type="email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             defaultValue={customerData.email}
//                             readOnly
//                           />
//                         </div>
//                         <div className="md:col-span-2">
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             placeholder="Enter subject"
//                           />
//                         </div>
//                         <div className="md:col-span-2">
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                           <textarea
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
//                             rows="6"
//                             placeholder="How can we help you?"
//                           ></textarea>
//                         </div>
//                       </div>
//                       <div className="flex justify-end">
//                         <button
//                           type="submit"
//                           className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
//                         >
//                           Send Message
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="bg-white rounded-lg shadow overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <Phone className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Phone</p>
//                           <p className="text-sm text-gray-600">+92 300 1234567</p>
//                           <p className="text-sm text-gray-600">+92 42 35678901</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start">
//                         <MessageSquare className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Email</p>
//                           <p className="text-sm text-gray-600">support@royalpalace.pk</p>
//                           <p className="text-sm text-gray-600">info@royalpalace.pk</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start">
//                         <Clock className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-800">Support Hours</p>
//                           <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                           <p className="text-sm text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
//                           <p className="text-sm text-gray-600">Sunday: Closed</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-800">FAQs</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-800 mb-1">How do I book the hall?</h4>
//                         <p className="text-sm text-gray-600">
//                           You can book the hall by filling out the booking form in the "Book Hall" section. Our team
//                           will review your request and confirm availability.
//                         </p>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-800 mb-1">What is the cancellation policy?</h4>
//                         <p className="text-sm text-gray-600">
//                           Full refund if cancelled 30+ days before event, 50% refund if cancelled 15-29 days before
//                           event, and no refund for cancellations less than 15 days before event.
//                         </p>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-800 mb-1">Can I customize the packages?</h4>
//                         <p className="text-sm text-gray-600">
//                           Yes, all our packages can be customized to suit your specific requirements. Please contact our
//                           team for personalized options.
//                         </p>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-800 mb-1">
//                           Is catering included in the packages?
//                         </h4>
//                         <p className="text-sm text-gray-600">
//                           Yes, all packages include catering services with various menu options. You can discuss
//                           specific dietary requirements with our team.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <a href="#" className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm">
//                         View All FAQs
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Booking Details Modal */}
//       {isModalOpen && selectedBooking && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-medium text-gray-800">Booking Details</h3>
//             </div>
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Booking ID</p>
//                   <p className="text-gray-800">{selectedBooking.id}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Event Type</p>
//                   <p className="text-gray-800">{selectedBooking.eventType}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Date</p>
//                   <p className="text-gray-800">{formatDate(selectedBooking.date)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Time</p>
//                   <p className="text-gray-800">{selectedBooking.time}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Guest Count</p>
//                   <p className="text-gray-800">{selectedBooking.guestCount}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Package</p>
//                   <p className="text-gray-800">{selectedBooking.package}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Amount</p>
//                   <p className="text-gray-800">{selectedBooking.amount}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Payment Status</p>
//                   <p className="text-gray-800">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                       ${
//                         selectedBooking.paymentStatus === "paid"
//                           ? "bg-green-100 text-green-800"
//                           : selectedBooking.paymentStatus === "partial"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {selectedBooking.paymentStatus.charAt(0).toUpperCase() + selectedBooking.paymentStatus.slice(1)}
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Status</p>
//                   <p className="text-gray-800">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                       ${
//                         selectedBooking.status === "confirmed"
//                           ? "bg-green-100 text-green-800"
//                           : selectedBooking.status === "pending"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : selectedBooking.status === "completed"
//                               ? "bg-blue-100 text-blue-800"
//                               : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
//                     </span>
//                   </p>
//                 </div>
//                 <div className="md:col-span-2">
//                   <p className="text-sm font-medium text-gray-500">Notes</p>
//                   <p className="text-gray-800">{selectedBooking.notes || "No special notes"}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
//               <div>
//                 {(selectedBooking.status === "confirmed" || selectedBooking.status === "pending") && (
//                   <button
//                     className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
//                     onClick={() => {
//                       cancelBooking(selectedBooking.id)
//                       setIsModalOpen(false)
//                     }}
//                   >
//                     Cancel Booking
//                   </button>
//                 )}
//               </div>
//               <div className="flex space-x-4">
//                 <button
//                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center"
//                   onClick={() => {
//                     // In a real app, this would generate and download an invoice
//                     alert("Invoice download functionality would be implemented here")
//                   }}
//                 >
//                   <FileText className="h-4 w-4 mr-2" />
//                   Invoice
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CustomerDashboard


"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  Users,
  Package,
  ChevronDown,
  Search,
  CalendarIcon,
  User,
  Home,
  BookOpen,
  Settings,
  Phone,
  Check,
  X,
  Info,
  MapPin,
  FileText,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
// import "./fonts.css"

// Sample customer data
const customerData = {
  id: "CUST1001",
  name: "Imran Ahmed",
  email: "imran.ahmed@gmail.com",
  phone: "+92 333 1234567",
  address: "45 Garden Town, Lahore",
  memberSince: "January 2023",
}

// Sample bookings data
const bookingsData = [
  {
    id: "BK2001",
    eventType: "Wedding Reception",
    date: "2025-08-15",
    time: "Evening (7:30 PM - 11:30 PM)",
    guestCount: 250,
    package: "Premium Package",
    status: "confirmed",
    amount: "PKR 225,000",
    paymentStatus: "paid",
    createdAt: "2025-05-20",
    notes: "Need special flower arrangements",
    hallId: "hall1",
  },
  {
    id: "BK2002",
    eventType: "Engagement Ceremony",
    date: "2025-09-10",
    time: "Afternoon (3:00 PM - 7:00 PM)",
    guestCount: 150,
    package: "Essential Package",
    status: "pending",
    amount: "PKR 125,000",
    paymentStatus: "partial",
    createdAt: "2025-05-25",
    notes: "Will confirm final guest count 2 weeks before event",
    hallId: "hall2",
  },
  {
    id: "BK2003",
    eventType: "Birthday Celebration",
    date: "2025-07-05",
    time: "Afternoon (3:00 PM - 7:00 PM)",
    guestCount: 80,
    package: "Essential Package",
    status: "completed",
    amount: "PKR 125,000",
    paymentStatus: "paid",
    createdAt: "2025-04-15",
    notes: "Birthday cake was arranged by the venue",
    hallId: "hall3",
  },
]

// Package options
const packageOptions = [
  {
    id: "PKG001",
    name: "Essential Package",
    price: "PKR 125,000",
    features: ["Basic Hall Decoration", "Standard Lighting", "Buffet Service for 100 Guests"],
    description: "Perfect for smaller gatherings and simple celebrations.",
  },
  {
    id: "PKG002",
    name: "Premium Package",
    price: "PKR 225,000",
    features: ["Enhanced Hall Decoration", "Premium Lighting", "Buffet Service for 200 Guests", "DJ and Sound System"],
    description: "Our most popular package for medium-sized events with enhanced services.",
  },
  {
    id: "PKG003",
    name: "Royal Package",
    price: "PKR 350,000",
    features: [
      "Luxury Hall Decoration",
      "Customizable Lighting",
      "Buffet Service for 300 Guests",
      "Live Band",
      "Photography and Videography",
    ],
    description: "The ultimate luxury experience for your special day with all premium services included.",
  },
]

// Hall options with better images
const hallOptions = [
  {
    id: "hall1",
    name: "Royal Grand Hall",
    capacity: 500,
    description:
      "Our largest and most luxurious hall with elegant décor and state-of-the-art facilities. Perfect for grand weddings and large corporate events.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Royal+Grand+Hall",
      "/placeholder.svg?height=600&width=800&text=Royal+Grand+Hall+2",
      "/placeholder.svg?height=600&width=800&text=Royal+Grand+Hall+3",
    ],
    basePrice: "PKR 150,000",
    features: [
      "500 Guest Capacity",
      "Grand Stage",
      "Premium Sound System",
      "Bridal Room",
      "VIP Lounge",
      "Valet Parking",
    ],
    size: "10,000 sq. ft.",
  },
  {
    id: "hall2",
    name: "Crystal Palace Hall",
    capacity: 350,
    description:
      "A medium-sized hall with beautiful crystal chandeliers and modern amenities. Ideal for medium-sized weddings and corporate functions.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Crystal+Palace+Hall",
      "/placeholder.svg?height=600&width=800&text=Crystal+Palace+Hall+2",
      "/placeholder.svg?height=600&width=800&text=Crystal+Palace+Hall+3",
    ],
    basePrice: "PKR 120,000",
    features: ["350 Guest Capacity", "Crystal Chandeliers", "Modern Sound System", "Bridal Room", "Ample Parking"],
    size: "7,500 sq. ft.",
  },
  {
    id: "hall3",
    name: "Emerald Garden Hall",
    capacity: 200,
    description:
      "An intimate hall with garden-themed décor, perfect for smaller gatherings. Features a beautiful outdoor area for ceremonies and photography.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Emerald+Garden+Hall",
      "/placeholder.svg?height=600&width=800&text=Emerald+Garden+Hall+2",
      "/placeholder.svg?height=600&width=800&text=Emerald+Garden+Hall+3",
    ],
    basePrice: "PKR 90,000",
    features: ["200 Guest Capacity", "Garden Theme", "Outdoor Ceremony Area", "Intimate Setting", "Private Parking"],
    size: "5,000 sq. ft.",
  },
]

// Hall amenities
const hallAmenities = [
  { name: "Air Conditioning", available: true },
  { name: "Parking Space", available: true },
  { name: "WiFi", available: true },
  { name: "Sound System", available: true },
  { name: "Stage", available: true },
  { name: "Catering", available: true },
  { name: "Decoration", available: true },
  { name: "Valet Parking", available: true },
  { name: "Bridal Room", available: true },
  { name: "Projector", available: true },
  { name: "Backup Generator", available: true },
  { name: "Prayer Room", available: true },
]

// Available dates (just for demo)
const availableDates = [
  "2025-07-01",
  "2025-07-02",
  "2025-07-03",
  "2025-07-05",
  "2025-07-06",
  "2025-07-08",
  "2025-07-09",
  "2025-07-10",
  "2025-07-12",
  "2025-07-15",
  "2025-07-18",
  "2025-07-20",
  "2025-07-22",
  "2025-07-25",
  "2025-07-28",
  "2025-07-30",
  "2025-08-01",
  "2025-08-03",
  "2025-08-05",
  "2025-08-08",
  "2025-08-10",
  "2025-08-12",
  "2025-08-15",
  "2025-08-18",
  "2025-08-20",
  "2025-08-22",
  "2025-08-25",
  "2025-08-28",
  "2025-08-30",
]

// Time slots
const timeSlots = [
  { id: "morning", label: "Morning (10:00 AM - 2:00 PM)" },
  { id: "afternoon", label: "Afternoon (3:00 PM - 7:00 PM)" },
  { id: "evening", label: "Evening (7:30 PM - 11:30 PM)" },
]

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bookings, setBookings] = useState(bookingsData)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedHall, setSelectedHall] = useState(null)
  const [currentHallImageIndex, setCurrentHallImageIndex] = useState(0)
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingForm, setBookingForm] = useState({
    eventType: "",
    date: "",
    time: "",
    guestCount: "",
    package: "",
    hallId: "",
    notes: "",
  })

  // Filter bookings based on search query
  const filteredBookings = bookings.filter((booking) => {
    return (
      booking.eventType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const upcomingBookings = bookings.filter((booking) => booking.status === "confirmed" || booking.status === "pending")

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-IN", options)
  }

  const openBookingModal = (booking) => {
    setSelectedBooking(booking)
    setIsModalOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingForm({
      ...bookingForm,
      [name]: value,
    })
  }

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg)
    setBookingForm({
      ...bookingForm,
      package: pkg.name,
    })
  }

  const handleHallSelect = (hall) => {
    setSelectedHall(hall)
    setBookingForm({
      ...bookingForm,
      hallId: hall.id,
    })
    setCurrentHallImageIndex(0)
  }

  const nextHallImage = () => {
    if (selectedHall) {
      setCurrentHallImageIndex((prevIndex) => (prevIndex === selectedHall.images.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevHallImage = () => {
    if (selectedHall) {
      setCurrentHallImageIndex((prevIndex) => (prevIndex === 0 ? selectedHall.images.length - 1 : prevIndex - 1))
    }
  }

  const nextStep = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1)
    }
  }

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1)
    }
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the booking request to the server
    alert("Booking request submitted! Our team will review and confirm your booking soon.")
    setBookingForm({
      eventType: "",
      date: "",
      time: "",
      guestCount: "",
      package: "",
      hallId: "",
      notes: "",
    })
    setSelectedPackage(null)
    setSelectedHall(null)
    setBookingStep(1)
  }

  const cancelBooking = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      // In a real app, this would send a cancellation request to the server
      setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "cancelled" } : booking)))
    }
  }

  const getHallById = (id) => {
    return hallOptions.find((hall) => hall.id === id) || null
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#FF477E]">Lahore Royal Palace</h1>
            <span className="ml-2 text-gray-500">Customer Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-[#FF477E] text-white flex items-center justify-center font-medium">
                {customerData.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-800">{customerData.name}</p>
                <p className="text-xs text-gray-500">Customer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex px-6 border-t border-gray-100">
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "dashboard" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </div>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "book" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => {
              setActiveTab("book")
              setBookingStep(1)
              setSelectedHall(null)
              setSelectedPackage(null)
            }}
          >
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Book Hall
            </div>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "mybookings" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("mybookings")}
          >
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              My Bookings
            </div>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "hallinfo" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("hallinfo")}
          >
            <div className="flex items-center">
              <Info className="h-4 w-4 mr-2" />
              Hall Information
            </div>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "account" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("account")}
          >
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              My Account
            </div>
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "support" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("support")}
          >
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Support
            </div>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome, {customerData.name}</h2>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Upcoming Events</h3>
                  <Calendar className="h-5 w-5 text-[#FF477E]" />
                </div>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-start">
                        <div className="flex-shrink-0 bg-[#FF477E]/10 p-2 rounded-lg mr-3">
                          <CalendarIcon className="h-5 w-5 text-[#FF477E]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{booking.eventType}</p>
                          <p className="text-xs text-gray-500">{formatDate(booking.date)}</p>
                          <p className="text-xs text-gray-500 mt-1">{booking.time}</p>
                          <div className="mt-1">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full 
                              ${
                                booking.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
                      onClick={() => setActiveTab("mybookings")}
                    >
                      View All Bookings
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">No upcoming events</p>
                    <button
                      className="mt-2 text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
                      onClick={() => setActiveTab("book")}
                    >
                      Book Now
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
                  <Settings className="h-5 w-5 text-[#FF477E]" />
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab("book")}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-[#FF477E] mr-3" />
                      <span className="text-sm font-medium">Book New Event</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setActiveTab("mybookings")}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-[#FF477E] mr-3" />
                      <span className="text-sm font-medium">View My Bookings</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setActiveTab("hallinfo")}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Info className="h-5 w-5 text-[#FF477E] mr-3" />
                      <span className="text-sm font-medium">Hall Information</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setActiveTab("support")}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#FF477E] mr-3" />
                      <span className="text-sm font-medium">Contact Support</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Package Highlights</h3>
                  <Package className="h-5 w-5 text-[#FF477E]" />
                </div>
                <div className="space-y-4">
                  {packageOptions.map((pkg) => (
                    <div key={pkg.id} className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FF477E] mr-2"></div>
                      <span className="text-sm text-gray-600">{pkg.name}</span>
                      <span className="ml-auto text-sm font-medium text-gray-900">{pkg.price}</span>
                    </div>
                  ))}
                  <button
                    className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
                    onClick={() => setActiveTab("book")}
                  >
                    View Package Details
                  </button>
                </div>
              </div>
            </div>

            {/* Hall Gallery Preview */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Our Halls</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {hallOptions.map((hall) => (
                    <div key={hall.id} className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={hall.images[0] || "/placeholder.svg"}
                          alt={hall.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h4 className="font-semibold text-lg">{hall.name}</h4>
                            <p className="text-sm opacity-90">Up to {hall.capacity} guests</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-900">{hall.basePrice}</span>
                          <span className="text-xs text-gray-500">{hall.size}</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{hall.description}</p>
                        <button
                          onClick={() => {
                            setActiveTab("book")
                            setSelectedHall(hall)
                            setBookingForm({
                              ...bookingForm,
                              hallId: hall.id,
                            })
                          }}
                          className="w-full py-2 bg-[#FF477E] text-white rounded-md font-medium text-sm hover:bg-[#9D2235] transition-colors"
                        >
                          Book This Hall
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "book" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Hall</h2>

            {/* Booking Steps */}
            <div className="mb-8">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full ${
                    bookingStep >= 1 ? "bg-[#FF477E]" : "bg-gray-200"
                  } flex items-center justify-center text-white font-medium`}
                >
                  1
                </div>
                <div className={`h-1 flex-1 mx-2 ${bookingStep >= 2 ? "bg-[#FF477E]" : "bg-gray-200"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full ${
                    bookingStep >= 2 ? "bg-[#FF477E]" : "bg-gray-200"
                  } flex items-center justify-center text-white font-medium`}
                >
                  2
                </div>
                <div className={`h-1 flex-1 mx-2 ${bookingStep >= 3 ? "bg-[#FF477E]" : "bg-gray-200"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full ${
                    bookingStep >= 3 ? "bg-[#FF477E]" : "bg-gray-200"
                  } flex items-center justify-center text-white font-medium`}
                >
                  3
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Select Hall</span>
                <span>Event Details</span>
                <span>Review & Submit</span>
              </div>
            </div>

            {bookingStep === 1 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800">Step 1: Select a Hall</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-8">
                    {hallOptions.map((hall) => (
                      <div
                        key={hall.id}
                        className={`rounded-lg overflow-hidden transition-all ${
                          selectedHall && selectedHall.id === hall.id
                            ? "ring-2 ring-[#FF477E] bg-[#FF477E]/5"
                            : "border border-gray-200 hover:border-[#FF477E]/50"
                        }`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative cursor-pointer" onClick={() => handleHallSelect(hall)}>
                            <img
                              src={hall.images[0] || "/placeholder.svg"}
                              alt={hall.name}
                              className="w-full h-64 object-cover"
                            />
                            {selectedHall && selectedHall.id === hall.id && (
                              <div className="absolute top-4 right-4 bg-[#FF477E] text-white p-2 rounded-full">
                                <CheckCircle className="h-5 w-5" />
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="text-xl font-semibold text-gray-800">{hall.name}</h4>
                            <div className="flex items-center mt-1 mb-3">
                              <Users className="h-4 w-4 text-[#FF477E] mr-1" />
                              <span className="text-sm text-gray-600">Capacity: {hall.capacity} guests</span>
                              <span className="mx-2 text-gray-300">|</span>
                              <span className="text-sm font-medium text-[#FF477E]">{hall.basePrice}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{hall.description}</p>

                            <div className="mb-4">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Features:</h5>
                              <div className="grid grid-cols-2 gap-2">
                                {hall.features.map((feature, index) => (
                                  <div key={index} className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-xs text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => handleHallSelect(hall)}
                              className={`w-full py-2 rounded-md font-medium text-sm transition-colors ${
                                selectedHall && selectedHall.id === hall.id
                                  ? "bg-[#9D2235] text-white"
                                  : "bg-[#FF477E] text-white hover:bg-[#9D2235]"
                              }`}
                            >
                              {selectedHall && selectedHall.id === hall.id ? "Selected" : "Select This Hall"}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={nextStep}
                      disabled={!selectedHall}
                      className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                        !selectedHall
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-[#FF477E] text-white hover:bg-[#9D2235]"
                      }`}
                    >
                      Continue to Event Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {bookingStep === 2 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800">Step 2: Event Details</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="bg-[#9D2235]/5 p-4 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#FF477E] mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Selected Hall: {selectedHall.name}</p>
                        <p className="text-sm text-gray-600">Capacity: Up to {selectedHall.capacity} guests</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-4">Event Information</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                          <select
                            name="eventType"
                            value={bookingForm.eventType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            required
                          >
                            <option value="">Select Event Type</option>
                            <option value="Wedding Reception">Wedding Reception</option>
                            <option value="Engagement Ceremony">Engagement Ceremony</option>
                            <option value="Birthday Celebration">Birthday Celebration</option>
                            <option value="Corporate Event">Corporate Event</option>
                            <option value="Conference">Conference</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <select
                            name="date"
                            value={bookingForm.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            required
                          >
                            <option value="">Select Available Date</option>
                            {availableDates.map((date) => (
                              <option key={date} value={date}>
                                {formatDate(date)}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                          <select
                            name="time"
                            value={bookingForm.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            required
                          >
                            <option value="">Select Time Slot</option>
                            {timeSlots.map((slot) => (
                              <option key={slot.id} value={slot.label}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                          <input
                            type="number"
                            name="guestCount"
                            value={bookingForm.guestCount}
                            onChange={handleInputChange}
                            placeholder="Enter number of guests"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            required
                            min="10"
                            max={selectedHall.capacity}
                          />
                          <p className="text-xs text-gray-500 mt-1">Maximum capacity: {selectedHall.capacity} guests</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-4">Select a Package</h4>
                      <div className="space-y-4">
                        {packageOptions.map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                              selectedPackage && selectedPackage.id === pkg.id
                                ? "border-[#FF477E] bg-[#FF477E]/5"
                                : "border-gray-200 hover:border-[#FF477E]/50"
                            }`}
                            onClick={() => handlePackageSelect(pkg)}
                          >
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-medium text-gray-800">{pkg.name}</h4>
                              {selectedPackage && selectedPackage.id === pkg.id && (
                                <Check className="h-4 w-4 text-[#FF477E]" />
                              )}
                            </div>
                            <p className="text-sm font-bold text-gray-900 mt-1">{pkg.price}</p>
                            <p className="text-xs text-gray-500 mt-2">{pkg.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests/Notes</label>
                        <textarea
                          name="notes"
                          value={bookingForm.notes}
                          onChange={handleInputChange}
                          placeholder="Any special requests or notes for your event"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Hall Selection
                    </button>

                    <button
                      onClick={nextStep}
                      disabled={
                        !bookingForm.eventType ||
                        !bookingForm.date ||
                        !bookingForm.time ||
                        !bookingForm.guestCount ||
                        !selectedPackage
                      }
                      className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                        !bookingForm.eventType ||
                        !bookingForm.date ||
                        !bookingForm.time ||
                        !bookingForm.guestCount ||
                        !selectedPackage
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-[#FF477E] text-white hover:bg-[#9D2235]"
                      }`}
                    >
                      Review Booking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800">Step 3: Review & Submit</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-4">Selected Hall</h4>
                      <div className="relative rounded-lg overflow-hidden mb-4">
                        <img
                          src={selectedHall.images[currentHallImageIndex] || "/placeholder.svg"}
                          alt={selectedHall.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <button
                            onClick={prevHallImage}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={nextHallImage}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h5 className="text-white font-medium">{selectedHall.name}</h5>
                          <p className="text-white/80 text-sm">Capacity: {selectedHall.capacity} guests</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-2">Hall Details</h5>
                        <p className="text-sm text-gray-600 mb-3">{selectedHall.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedHall.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-4">Booking Summary</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Event Type:</span>
                            <span className="text-sm font-medium text-gray-800">{bookingForm.eventType}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Date:</span>
                            <span className="text-sm font-medium text-gray-800">
                              {bookingForm.date ? formatDate(bookingForm.date) : ""}
                            </span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Time:</span>
                            <span className="text-sm font-medium text-gray-800">{bookingForm.time}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Number of Guests:</span>
                            <span className="text-sm font-medium text-gray-800">{bookingForm.guestCount}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Selected Package:</span>
                            <span className="text-sm font-medium text-gray-800">{selectedPackage?.name}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Package Price:</span>
                            <span className="text-sm font-medium text-gray-800">{selectedPackage?.price}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">Hall Base Price:</span>
                            <span className="text-sm font-medium text-gray-800">{selectedHall.basePrice}</span>
                          </div>
                          <div className="flex justify-between pt-2">
                            <span className="text-sm font-medium text-gray-800">Estimated Total:</span>
                            <span className="text-sm font-bold text-[#FF477E]">
                              {/* This is a simplified calculation for demo purposes */}
                              PKR{" "}
                              {Number.parseInt(selectedPackage?.price.replace(/[^0-9]/g, "")) +
                                Number.parseInt(selectedHall.basePrice.replace(/[^0-9]/g, ""))}
                            </span>
                          </div>
                        </div>
                      </div>

                      {bookingForm.notes && (
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-800 mb-2">Special Requests/Notes</h5>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{bookingForm.notes}</p>
                        </div>
                      )}

                      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mt-4 flex">
                        <Info className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium">Booking is subject to confirmation</p>
                          <p className="mt-1">
                            This reservation request will be reviewed by our team. We'll contact you within 24 hours to
                            confirm availability and process your booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Event Details
                    </button>

                    <button
                      onClick={handleBookingSubmit}
                      className="px-6 py-3 bg-[#FF477E] text-white rounded-lg font-medium hover:bg-[#9D2235] flex items-center"
                    >
                      Submit Booking Request
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Booking Information</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">How Booking Works</h4>
                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                      <li>Fill out the booking form with your event details</li>
                      <li>Submit your booking request</li>
                      <li>Our team will review your request within 24 hours</li>
                      <li>Once approved, you'll receive a confirmation email</li>
                      <li>Pay the booking deposit to secure your date</li>
                    </ol>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Booking Policies</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                      <li>50% advance payment required to confirm booking</li>
                      <li>Remaining payment due 7 days before event</li>
                      <li>Cancellation policy: Full refund if cancelled 30+ days before event</li>
                      <li>50% refund if cancelled 15-29 days before event</li>
                      <li>No refund for cancellations less than 15 days before event</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-2">Contact our booking team for assistance:</p>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Phone className="h-4 w-4 mr-2 text-[#FF477E]" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageSquare className="h-4 w-4 mr-2 text-[#FF477E]" />
                      <span>bookings@royalpalace.pk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mybookings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">All Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Booking ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hall
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Package
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eventType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getHallById(booking.hallId)?.name || "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(booking.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.package}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : booking.status === "completed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="text-[#FF477E] hover:text-[#9D2235] font-medium mr-3"
                            onClick={() => openBookingModal(booking)}
                          >
                            View
                          </button>
                          {(booking.status === "confirmed" || booking.status === "pending") && (
                            <button
                              className="text-red-600 hover:text-red-800 font-medium"
                              onClick={() => cancelBooking(booking.id)}
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredBookings.length === 0 && (
                <div className="py-8 text-center">
                  <p className="text-gray-500">No bookings found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "hallinfo" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hall Information</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Our Halls</h3>
                  </div>
                  <div className="p-6">
                    {hallOptions.map((hall) => (
                      <div
                        key={hall.id}
                        className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={hall.images[0] || "/placeholder.svg"}
                              alt={hall.name}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800">{hall.name}</h4>
                            <div className="flex items-center mt-1 mb-3">
                              <Users className="h-4 w-4 text-[#FF477E] mr-1" />
                              <span className="text-sm text-gray-600">Capacity: {hall.capacity} guests</span>
                              <span className="mx-2 text-gray-300">|</span>
                              <span className="text-sm font-medium text-[#FF477E]">{hall.basePrice}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{hall.description}</p>

                            <div className="mb-4">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">Features:</h5>
                              <div className="grid grid-cols-2 gap-2">
                                {hall.features.map((feature, index) => (
                                  <div key={index} className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-sm text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setActiveTab("book")
                                setSelectedHall(hall)
                                setBookingForm({
                                  ...bookingForm,
                                  hallId: hall.id,
                                })
                              }}
                              className="px-4 py-2 bg-[#FF477E] text-white rounded-md font-medium text-sm hover:bg-[#9D2235] transition-colors"
                            >
                              Book This Hall
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Amenities</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {hallAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          {amenity.available ? (
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mr-2" />
                          )}
                          <span className="text-sm text-gray-600">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Phone</p>
                          <p className="text-sm text-gray-600">+92 300 1234567</p>
                          <p className="text-sm text-gray-600">+92 42 35678901</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Email</p>
                          <p className="text-sm text-gray-600">info@royalpalace.pk</p>
                          <p className="text-sm text-gray-600">bookings@royalpalace.pk</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Address</p>
                          <p className="text-sm text-gray-600">123 Main Street, Model Town</p>
                          <p className="text-sm text-gray-600">Lahore, Punjab 54000</p>
                          <p className="text-sm text-gray-600">Pakistan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "account" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Account</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                  </div>
                  <div className="p-6">
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.name}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.email}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.phone}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.address}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
                        >
                          Update Information
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Change Password</h3>
                  </div>
                  <div className="p-6">
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            placeholder="Enter current password"
                          />
                        </div>
                        <div className="md:col-span-2"></div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Account Summary</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="h-16 w-16 rounded-full bg-[#FF477E] text-white flex items-center justify-center text-xl font-medium">
                        {customerData.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800">{customerData.name}</h4>
                        <p className="text-sm text-gray-500">Member since {customerData.memberSince}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm text-gray-600">Total Bookings</span>
                        <span className="text-sm font-medium text-gray-900">{bookings.length}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm text-gray-600">Upcoming Events</span>
                        <span className="text-sm font-medium text-gray-900">{upcomingBookings.length}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm text-gray-600">Completed Events</span>
                        <span className="text-sm font-medium text-gray-900">
                          {bookings.filter((b) => b.status === "completed").length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Notifications</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="email-notifications"
                            type="checkbox"
                            className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                            Email Notifications
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="sms-notifications"
                            type="checkbox"
                            className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-700">
                            SMS Notifications
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="promotional-emails"
                            type="checkbox"
                            className="h-4 w-4 text-[#FF477E] focus:ring-[#FF477E] border-gray-300 rounded"
                          />
                          <label htmlFor="promotional-emails" className="ml-2 block text-sm text-gray-700">
                            Promotional Emails
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235] w-full">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Support & Help</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Contact Us</h3>
                  </div>
                  <div className="p-6">
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.name}
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={customerData.email}
                            readOnly
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            placeholder="Enter subject"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                          <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            rows="6"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Phone</p>
                          <p className="text-sm text-gray-600">+92 300 1234567</p>
                          <p className="text-sm text-gray-600">+92 42 35678901</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Email</p>
                          <p className="text-sm text-gray-600">support@royalpalace.pk</p>
                          <p className="text-sm text-gray-600">info@royalpalace.pk</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Support Hours</p>
                          <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-sm text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="text-sm text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800">FAQs</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">How do I book the hall?</h4>
                        <p className="text-sm text-gray-600">
                          You can book the hall by filling out the booking form in the "Book Hall" section. Our team
                          will review your request and confirm availability.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">What is the cancellation policy?</h4>
                        <p className="text-sm text-gray-600">
                          Full refund if cancelled 30+ days before event, 50% refund if cancelled 15-29 days before
                          event, and no refund for cancellations less than 15 days before event.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Can I customize the packages?</h4>
                        <p className="text-sm text-gray-600">
                          Yes, all our packages can be customized to suit your specific requirements. Please contact our
                          team for personalized options.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">
                          Is catering included in the packages?
                        </h4>
                        <p className="text-sm text-gray-600">
                          Yes, all packages include catering services with various menu options. You can discuss
                          specific dietary requirements with our team.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="#" className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm">
                        View All FAQs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Booking Details Modal */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">Booking Details</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Booking ID</p>
                  <p className="text-gray-800">{selectedBooking.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Event Type</p>
                  <p className="text-gray-800">{selectedBooking.eventType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Hall</p>
                  <p className="text-gray-800">{getHallById(selectedBooking.hallId)?.name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-gray-800">{formatDate(selectedBooking.date)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p className="text-gray-800">{selectedBooking.time}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Guest Count</p>
                  <p className="text-gray-800">{selectedBooking.guestCount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Package</p>
                  <p className="text-gray-800">{selectedBooking.package}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="text-gray-800">{selectedBooking.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Payment Status</p>
                  <p className="text-gray-800">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        selectedBooking.paymentStatus === "paid"
                          ? "bg-green-100 text-green-800"
                          : selectedBooking.paymentStatus === "partial"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedBooking.paymentStatus.charAt(0).toUpperCase() + selectedBooking.paymentStatus.slice(1)}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-gray-800">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        selectedBooking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : selectedBooking.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : selectedBooking.status === "completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                    </span>
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-gray-500">Notes</p>
                  <p className="text-gray-800">{selectedBooking.notes || "No special notes"}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
              <div>
                {(selectedBooking.status === "confirmed" || selectedBooking.status === "pending") && (
                  <button
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                    onClick={() => {
                      cancelBooking(selectedBooking.id)
                      setIsModalOpen(false)
                    }}
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center"
                  onClick={() => {
                    // In a real app, this would generate and download an invoice
                    alert("Invoice download functionality would be implemented here")
                  }}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Invoice
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomerDashboard
