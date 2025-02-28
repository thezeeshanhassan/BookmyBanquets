// InputField Component
import { Eye, EyeOff, Heart } from "lucide-react"
const InputField = ({ type, id, name, value, onChange, placeholder, required, showPassword, setShowPassword, isPassword }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="mb-1 block text-sm text-gray-600 text-left ml-2">
          {placeholder}
        </label>
        <div className={isPassword ? "relative" : ""}>
          <input
            type={isPassword && showPassword ? "text" : type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-pink-500 focus:outline-none"
            required={required}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>
    );
  };
  export default InputField;
  