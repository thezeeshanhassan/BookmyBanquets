import { useState } from "react";
import axios from "axios";
import LogoComponent from "../components/LogoComponent";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/v1/user/forgot-password", {
        email,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error sending reset email:", err);
      alert("Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <LogoComponent />
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Forgot Password
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center">
            ✅ A reset link has been sent to your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-600">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className="mb-4 w-full rounded border border-gray-300 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@email.com"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-pink-500 py-2 text-white hover:bg-pink-600"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
