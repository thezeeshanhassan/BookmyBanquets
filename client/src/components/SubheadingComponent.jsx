const SubheadingComponent = ({ text1, text2, text3 }) => {
    return (
        <div className="mb-8 text-center text-sm text-gray-600">
            <p>
                {text1} {" "}
                <span className="font-bold">
                    Book<span className="text-pink-500 font-sans size-2xl">{text2}</span>
                </span>{" "}
            </p>
            <p>{text3}</p>
        </div>
    );
};

export default SubheadingComponent;