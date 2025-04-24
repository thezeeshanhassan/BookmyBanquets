// components/Loader.jsx
const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
