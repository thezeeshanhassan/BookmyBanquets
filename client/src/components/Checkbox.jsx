const CheckboxComponent = ({ name, value, checked, onChange, label }) => {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 accent-pink-500"
            />
            <span className="ml-2 text-sm text-gray-600">{label}</span>
        </label>
    );
};

export default CheckboxComponent;