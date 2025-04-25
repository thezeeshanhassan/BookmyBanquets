import { useState } from "react";
import axios from "axios";
import LogoComponent from "../components/LogoComponent";
import InputField from "../components/InputField";
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
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Forgot Password
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center">
            ✅ A reset link has been sent to your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <InputField
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required={true}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg py-2 text-white focus:outline-none ${loading ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
                }`}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <div className="mt-4 text-center">
              <a href="/login" className="text-sm text-blue-600 hover:underline">
                Back to Login
              </a>
            </div>
          </form>


        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
