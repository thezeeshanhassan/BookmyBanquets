
"use client"

import { useState } from "react"
import {
  Calendar,
  DollarSign,
  XCircle,
  AlertCircle,
  ChevronDown,
  Filter,
  Search,
  BarChart2,
  TrendingUp,
  CalendarIcon,
  Upload,
  X,
} from "lucide-react"

// Update the bookingsData array with Pakistani names, numbers, and prices
const bookingsData = [
  {
    id: "BK1001",
    customerName: "Ahmed Khan",
    eventType: "Wedding Reception",
    date: "2025-06-15",
    time: "Evening (7:30 PM - 11:30 PM)",
    guestCount: "300-400",
    package: "Premium Package",
    status: "pending",
    amount: "PKR 225,000",
    createdAt: "2025-05-20",
    contactInfo: {
      email: "ahmed.khan@gmail.com",
      phone: "+92 301 2345678",
    },
  },
  {
    id: "BK1002",
    customerName: "Fatima Malik",
    eventType: "Corporate Event",
    date: "2025-06-22",
    time: "Morning (10:00 AM - 2:00 PM)",
    guestCount: "100-200",
    package: "Essential Package",
    status: "approved",
    amount: "PKR 125,000",
    createdAt: "2025-05-18",
    contactInfo: {
      email: "fatima.malik@gmail.com",
      phone: "+92 333 8765432",
    },
  },
  {
    id: "BK1003",
    customerName: "Usman Ali",
    eventType: "Birthday Celebration",
    date: "2025-07-05",
    time: "Afternoon (3:00 PM - 7:00 PM)",
    guestCount: "50-100",
    package: "Essential Package",
    status: "rejected",
    amount: "PKR 125,000",
    createdAt: "2025-05-15",
    contactInfo: {
      email: "usman.ali@gmail.com",
      phone: "+92 321 7654321",
    },
    rejectionReason: "Double booking conflict",
  },
  {
    id: "BK1004",
    customerName: "Ayesha Imran",
    eventType: "Engagement",
    date: "2025-07-12",
    time: "Evening (7:30 PM - 11:30 PM)",
    guestCount: "200-300",
    package: "Royal Package",
    status: "pending",
    amount: "PKR 350,000",
    createdAt: "2025-05-22",
    contactInfo: {
      email: "ayesha.imran@gmail.com",
      phone: "+92 345 6543210",
    },
  },
  {
    id: "BK1005",
    customerName: "Zain Mahmood",
    eventType: "Wedding",
    date: "2025-07-18",
    time: "Morning (10:00 AM - 2:00 PM)",
    guestCount: "400-500",
    package: "Royal Package",
    status: "approved",
    amount: "PKR 350,000",
    createdAt: "2025-05-10",
    contactInfo: {
      email: "zain.mahmood@gmail.com",
      phone: "+92 300 5432109",
    },
  },
  {
    id: "BK1006",
    customerName: "Sana Riaz",
    eventType: "Corporate Event",
    date: "2025-07-25",
    time: "Afternoon (3:00 PM - 7:00 PM)",
    guestCount: "100-200",
    package: "Essential Package",
    status: "pending",
    amount: "PKR 125,000",
    createdAt: "2025-05-25",
    contactInfo: {
      email: "sana.riaz@gmail.com",
      phone: "+92 311 4321098",
    },
  },
]

// Update analytics data with Pakistani currency
const analyticsData = {
  totalBookings: 45,
  approvedBookings: 28,
  pendingBookings: 12,
  rejectedBookings: 5,
  totalRevenue: "PKR 8,750,000",
  averageBookingValue: "PKR 194,444",
  popularPackage: "Premium Package",
  popularEventType: "Wedding Reception",
  bookingsByMonth: [
    { month: "Jan", count: 2 },
    { month: "Feb", count: 3 },
    { month: "Mar", count: 5 },
    { month: "Apr", count: 7 },
    { month: "May", count: 10 },
    { month: "Jun", count: 8 },
    { month: "Jul", count: 6 },
    { month: "Aug", count: 4 },
    { month: "Sep", count: 0 },
    { month: "Oct", count: 0 },
    { month: "Nov", count: 0 },
    { month: "Dec", count: 0 },
  ],
  revenueByMonth: [
    { month: "Jan", amount: 250000 },
    { month: "Feb", amount: 375000 },
    { month: "Mar", amount: 625000 },
    { month: "Apr", amount: 1050000 },
    { month: "May", amount: 1750000 },
    { month: "Jun", amount: 1400000 },
    { month: "Jul", amount: 900000 },
    { month: "Aug", amount: 600000 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ],
}

// Update package options with Pakistani currency
const packageOptions = [
  {
    id: "PKG001",
    name: "Essential Package",
    price: "PKR 125,000",
    features: ["Basic Hall Decoration", "Standard Lighting", "Buffet Service for 100 Guests"],
  },
  {
    id: "PKG002",
    name: "Premium Package",
    price: "PKR 225,000",
    features: ["Enhanced Hall Decoration", "Premium Lighting", "Buffet Service for 200 Guests", "DJ and Sound System"],
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
  },
]

// List of amenities
const amenitiesList = [
  { id: 1, name: "Air Conditioning", description: "Central air conditioning system" },
  { id: 2, name: "Parking", description: "Dedicated parking space for guests" },
  { id: 3, name: "WiFi", description: "High-speed internet access" },
  { id: 4, name: "Sound System", description: "Professional audio equipment" },
  { id: 5, name: "Stage", description: "Elevated platform for performances" },
  { id: 6, name: "Catering", description: "In-house food service" },
  { id: 7, name: "Decoration", description: "Event decoration services" },
  { id: 8, name: "Valet Parking", description: "Attendants to park guest vehicles" },
  { id: 9, name: "Bridal Room", description: "Private room for bride preparation" },
  { id: 10, name: "Projector", description: "Video projection equipment" },
  { id: 11, name: "Backup Generator", description: "Power backup during outages" },
  { id: 12, name: "Wheelchair Access", description: "Facilities for disabled guests" },
  { id: 13, name: "Prayer Room", description: "Dedicated space for prayers" },
  { id: 14, name: "Smoking Area", description: "Designated smoking zone" },
  { id: 15, name: "Security", description: "24/7 security personnel" },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [bookings, setBookings] = useState(bookingsData)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAmenities, setSelectedAmenities] = useState([1, 2, 3, 4, 6, 7, 11, 13, 15])
  const [hallImages, setHallImages] = useState([
    "/placeholder.svg?height=300&width=500",
    "/placeholder.svg?height=300&width=500",
  ])

  // Filter bookings based on status and search query
  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const pendingBookings = bookings.filter((booking) => booking.status === "pending")
  const approvedBookings = bookings.filter((booking) => booking.status === "approved")
  const rejectedBookings = bookings.filter((booking) => booking.status === "rejected")

  const handleApproveBooking = (id) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: "approved" } : booking)))
    setIsModalOpen(false)
  }

  const handleRejectBooking = (id) => {
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejection")
      return
    }

    setBookings(
      bookings.map((booking) => (booking.id === id ? { ...booking, status: "rejected", rejectionReason } : booking)),
    )
    setIsModalOpen(false)
    setRejectionReason("")
  }

  const openBookingModal = (booking) => {
    setSelectedBooking(booking)
    setIsModalOpen(true)
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-IN", options)
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (hallImages.length + files.length > 5) {
      alert("You can only upload a maximum of 5 images")
      return
    }

    const newImages = files.map((file) => URL.createObjectURL(file))
    setHallImages([...hallImages, ...newImages])
  }

  const removeImage = (index) => {
    const updatedImages = [...hallImages]
    updatedImages.splice(index, 1)
    setHallImages(updatedImages)
  }

  const toggleAmenity = (id) => {
    if (selectedAmenities.includes(id)) {
      setSelectedAmenities(selectedAmenities.filter((amenityId) => amenityId !== id))
    } else {
      setSelectedAmenities([...selectedAmenities, id])
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#FF477E]">Lahore Royal Palace</h1>
            <span className="ml-2 text-gray-500">Hall Manager</span>
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
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Admin"
                className="h-10 w-10 rounded-full border-2 border-[#FF477E]"
              />
              <div>
                <p className="font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Hall Manager</p>
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
            Dashboard
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "bookings" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("bookings")}
          >
            Bookings
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "calendar" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("calendar")}
          >
            Calendar
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "analytics" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "settings" ? "text-[#FF477E] border-b-2 border-[#FF477E]" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.totalBookings}</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>12% increase this month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{pendingBookings.length}</p>
                  </div>
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-yellow-600">
                  <button
                    className="underline"
                    onClick={() => {
                      setActiveTab("bookings")
                      setFilterStatus("pending")
                    }}
                  >
                    Review pending bookings
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.totalRevenue}</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>8% increase this month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Avg. Booking Value</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.averageBookingValue}</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart2 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-purple-600">Most popular: {analyticsData.popularPackage}</div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Recent Bookings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Booking ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
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
                    {bookings.slice(0, 5).map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customerName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eventType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(booking.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              booking.status === "approved"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="text-[#FF477E] hover:text-[#9D2235] font-medium"
                            onClick={() => openBookingModal(booking)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <button
                  className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
                  onClick={() => setActiveTab("bookings")}
                >
                  View All Bookings
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Booking Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">Approved</span>
                      <span className="text-sm font-medium text-gray-900">{approvedBookings.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(approvedBookings.length / bookings.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">Pending</span>
                      <span className="text-sm font-medium text-gray-900">{pendingBookings.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${(pendingBookings.length / bookings.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">Rejected</span>
                      <span className="text-sm font-medium text-gray-900">{rejectedBookings.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${(rejectedBookings.length / bookings.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Event Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF477E] mr-2"></div>
                    <span className="text-sm text-gray-600">Wedding Reception</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">45%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#9D2235] mr-2"></div>
                    <span className="text-sm text-gray-600">Corporate Event</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">25%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Birthday Celebration</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Engagement</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">10%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Other</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {approvedBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-start">
                      <div className="flex-shrink-0 bg-[#FF477E]/10 p-2 rounded-lg mr-3">
                        <CalendarIcon className="h-5 w-5 text-[#FF477E]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{booking.eventType}</p>
                        <p className="text-xs text-gray-500">{formatDate(booking.date)}</p>
                        <p className="text-xs text-gray-500 mt-1">{booking.customerName}</p>
                      </div>
                    </div>
                  ))}

                  <button
                    className="text-[#FF477E] hover:text-[#9D2235] font-medium text-sm"
                    onClick={() => setActiveTab("calendar")}
                  >
                    View Full Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Bookings</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Bookings</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">More Filters</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Booking ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Type
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customerName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eventType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(booking.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.package}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              booking.status === "approved"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
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
                          {booking.status === "pending" && (
                            <>
                              <button
                                className="text-green-600 hover:text-green-800 font-medium mr-3"
                                onClick={() => handleApproveBooking(booking.id)}
                              >
                                Approve
                              </button>
                              <button
                                className="text-red-600 hover:text-red-800 font-medium"
                                onClick={() => {
                                  setSelectedBooking(booking)
                                  setIsModalOpen(true)
                                }}
                              >
                                Reject
                              </button>
                            </>
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

        {activeTab === "calendar" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Calendar</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">June 2025</h3>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }, (_, i) => {
                  const day = i + 1
                  const hasEvent = bookings.some((booking) => {
                    const bookingDate = new Date(booking.date)
                    return bookingDate.getDate() === day && bookingDate.getMonth() === 5 // June is month 5 (0-indexed)
                  })

                  const events = bookings.filter((booking) => {
                    const bookingDate = new Date(booking.date)
                    return bookingDate.getDate() === day && bookingDate.getMonth() === 5
                  })

                  return (
                    <div
                      key={day}
                      className={`p-2 border rounded-lg min-h-[80px] ${hasEvent ? "border-[#FF477E]/30" : "border-gray-200"}`}
                    >
                      <div className="text-right text-sm font-medium text-gray-700 mb-1">{day}</div>
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs p-1 rounded mb-1 truncate cursor-pointer
                            ${
                              event.status === "approved"
                                ? "bg-green-100 text-green-800"
                                : event.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          onClick={() => openBookingModal(event)}
                        >
                          {event.eventType}
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics & Reports</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Bookings by Month</h3>
                <div className="h-64">
                  <div className="flex h-full items-end">
                    {analyticsData.bookingsByMonth.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-[#FF477E] rounded-t"
                          style={{ height: `${(item.count / 10) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Revenue by Month (PKR)</h3>
                <div className="h-64">
                  <div className="flex h-full items-end">
                    {analyticsData.revenueByMonth.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-[#9D2235] rounded-t"
                          style={{ height: `${(item.amount / 1750000) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Booking Status Distribution</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                        Approved
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-600">
                        {Math.round((approvedBookings.length / bookings.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div
                      style={{ width: `${(approvedBookings.length / bookings.length) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    ></div>
                  </div>

                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                        Pending
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-yellow-600">
                        {Math.round((pendingBookings.length / bookings.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                    <div
                      style={{ width: `${(pendingBookings.length / bookings.length) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    ></div>
                  </div>

                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                        Rejected
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-red-600">
                        {Math.round((rejectedBookings.length / bookings.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                    <div
                      style={{ width: `${(rejectedBookings.length / bookings.length) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Packages</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF477E] mr-2"></div>
                    <span className="text-sm text-gray-600">Royal Package</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">40%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#9D2235] mr-2"></div>
                    <span className="text-sm text-gray-600">Premium Package</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">35%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Essential Package</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">25%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Time Slot Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Morning (10:00 AM - 2:00 PM)</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">30%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Afternoon (3:00 PM - 7:00 PM)</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">25%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Evening (7:30 PM - 11:30 PM)</span>
                    <span className="ml-auto text-sm font-medium text-gray-900">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hall Settings</h2>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Hall Information</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hall Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                      defaultValue="Lahore Royal Palace Banquet Hall"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                      defaultValue="contact@royalpalace.pk"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                      defaultValue="+92 300 1234567"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                      rows={4}
                      defaultValue="Lahore Royal Palace Banquet Hall has been creating memorable celebrations for over a decade. Established in 2010, our venue has hosted more than 3,000 successful events including glamorous weddings, corporate galas, and milestone celebrations. Located in the heart of Lahore, we pride ourselves on exceptional service and attention to detail."
                    ></textarea>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs text-gray-500 mb-1">Address Line</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          defaultValue="123 Main Street, Model Town"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">City</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          defaultValue="Lahore"
                        >
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Rawalpindi">Rawalpindi</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Multan">Multan</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="Quetta">Quetta</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">State/Province</label>
                        <select
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          defaultValue="Punjab"
                        >
                          <option value="Punjab">Punjab</option>
                          <option value="Sindh">Sindh</option>
                          <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                          <option value="Balochistan">Balochistan</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Postal Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          defaultValue="54000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Country</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                          value="Pakistan"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Hall Amenities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {amenitiesList.map((amenity) => (
                      <div key={amenity.id} className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id={`amenity-${amenity.id}`}
                          checked={selectedAmenities.includes(amenity.id)}
                          onChange={() => toggleAmenity(amenity.id)}
                          className="mt-1"
                        />
                        <label htmlFor={`amenity-${amenity.id}`} className="text-sm">
                          <div className="font-medium text-gray-800">{amenity.name}</div>
                          <div className="text-xs text-gray-500">{amenity.description}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Hall Images</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {hallImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Hall image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}

                    {hallImages.length < 5 && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-48 bg-gray-50">
                        <label className="cursor-pointer flex flex-col items-center p-4">
                          <Upload className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">Upload Image</span>
                          <span className="text-xs text-gray-400 mt-1">({5 - hallImages.length} remaining)</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                            multiple={5 - hallImages.length > 1}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload up to 5 images of your hall. Recommended size: 1200x800 pixels.
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="px-6 py-2 bg-[#FF477E] text-white rounded-lg hover:bg-[#9D2235]">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Package Settings</h3>
              </div>
              <div className="p-6">
                {packageOptions.map((pkg, index) => (
                  <div key={pkg.id} className="mb-8 border rounded-lg p-4">
                    <h4 className="text-xl font-medium text-gray-800 mb-3">{pkg.name}</h4>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                        defaultValue={pkg.price}
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Features:</h5>
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm mb-2">
                          <input
                            type="text"
                            className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF477E] focus:border-transparent"
                            defaultValue={feature}
                            onChange={(e) => {
                              const updatedFeatures = [...pkg.features]
                              updatedFeatures[featureIndex] = e.target.value
                              const updatedPackages = [...packageOptions]
                              updatedPackages[index].features = updatedFeatures
                              // Force re-render
                              setBookings([...bookings])
                            }}
                          />
                          <button
                            className="ml-2 text-red-500 hover:text-red-700"
                            onClick={(e) => {
                              e.preventDefault()
                              const updatedPackages = [...packageOptions]
                              updatedPackages[index].features = pkg.features.filter((_, i) => i !== featureIndex)
                              // Force re-render
                              setBookings([...bookings])
                            }}
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        className="mt-3 text-sm text-[#FF477E] hover:text-[#9D2235] font-medium"
                        onClick={(e) => {
                          e.preventDefault()
                          const updatedPackages = [...packageOptions]
                          updatedPackages[index].features.push("New feature")
                          // Force re-render
                          setBookings([...bookings])
                        }}
                      >
                        + Add Feature
                      </button>
                    </div>
                  </div>
                ))}
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
                  <p className="text-sm font-medium text-gray-500">Customer Name</p>
                  <p className="text-gray-800">{selectedBooking.customerName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Event Type</p>
                  <p className="text-gray-800">{selectedBooking.eventType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date & Time</p>
                  <p className="text-gray-800">
                    {formatDate(selectedBooking.date)}, {selectedBooking.time}
                  </p>
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
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-gray-800">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        selectedBooking.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : selectedBooking.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-gray-800">{selectedBooking.contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-gray-800">{selectedBooking.contactInfo.phone}</p>
                </div>
                {selectedBooking.rejectionReason && (
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-gray-500">Rejection Reason</p>
                    <p className="text-gray-800">{selectedBooking.rejectionReason}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                onClick={() => {
                  setIsModalOpen(false)
                  setRejectionReason("")
                }}
              >
                Close
              </button>
              {selectedBooking.status === "pending" && (
                <>
                  <button
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    onClick={() => handleApproveBooking(selectedBooking.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                    onClick={() => {
                      if (selectedBooking) {
                        setSelectedBooking(selectedBooking)
                        setIsModalOpen(true)
                      }
                    }}
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
            {selectedBooking.status === "pending" && (
              <div className="px-6 py-4">
                <label htmlFor="rejectionReason" className="block text-sm font-medium text-gray-700">
                  Rejection Reason:
                </label>
                <textarea
                  id="rejectionReason"
                  rows="3"
                  className="shadow-sm focus:ring-[#FF477E] focus:border-[#FF477E] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Provide a reason for rejecting this booking."
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                    onClick={() => handleRejectBooking(selectedBooking.id)}
                  >
                    Reject Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard


