import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Calendar, Building, DollarSign } from "lucide-react";

const HallManagerDashboard = () => {
  const [stats, setStats] = useState({ bookings: 0, revenue: 0, halls: 0 });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/manager/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setStats(res.data.stats);
        setRecentBookings(res.data.recentBookings);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-700">Hall Manager Dashboard</h1>
        <Link
          to="/manager/create-hall"
          className="rounded-full bg-pink-500 px-6 py-2 text-white hover:bg-pink-600"
        >
          + Create New Hall
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Bookings */}
        <div className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Bookings</h3>
              <p className="text-2xl font-semibold text-gray-700">{stats.bookings}</p>
            </div>
            <Calendar className="h-10 w-10 text-pink-500" />
          </div>
        </div>

        {/* Total Revenue */}
        <div className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-semibold text-gray-700">Rs {stats.revenue}</p>
            </div>
            <DollarSign className="h-10 w-10 text-pink-500" />
          </div>
        </div>

        {/* Total Halls */}
        <div className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Halls Owned</h3>
              <p className="text-2xl font-semibold text-gray-700">{stats.halls}</p>
            </div>
            <Building className="h-10 w-10 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-12 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Recent Bookings</h2>

        {recentBookings.length === 0 ? (
          <p className="text-gray-500">No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-gray-600">Customer</th>
                  <th className="px-4 py-2 text-gray-600">Hall</th>
                  <th className="px-4 py-2 text-gray-600">Event Date</th>
                  <th className="px-4 py-2 text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.bookingId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{booking.customerName}</td>
                    <td className="px-4 py-2">{booking.hallName}</td>
                    <td className="px-4 py-2">{new Date(booking.startDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2 capitalize">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default HallManagerDashboard;
