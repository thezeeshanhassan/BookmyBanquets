import { useLocation, Link } from 'react-router-dom';


const CombinedButtons = () => {
    const location = useLocation();

    return (
        <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1">
                <Link
                    to="/login"
                    className={`rounded-full px-8 py-2 text-center transition-colors ${location.pathname === '/login' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className={`rounded-full px-8 py-2 text-center transition-colors ${location.pathname === '/register' || location.pathname === '/' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default CombinedButtons;