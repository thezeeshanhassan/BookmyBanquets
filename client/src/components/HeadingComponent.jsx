import { motion } from "framer-motion";

const HeadingComponent = () => {
    const text1 = "Welcome to".split("");
    const text2 = " BookMy".split("");
    const text3 = "Banquets".split("");

    return (
        <h2 className="mb-6 text-center text-lg font-medium text-gray-700">
            {/* Animate "Welcome to" */}
            {text1.map((text, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                >
                    {text}
                </motion.span>
            ))}

            {/* Animate "BookMy" */}
            <span className="font-bold">
                {text2.map((text, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: (text1.length + i) / 10,
                        }}
                        key={i}
                    >
                        {text}
                    </motion.span>
                ))}
            </span>

            {/* Animate "Banquets" */}
            <span className="text-pink-500">
                {text3.map((text, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: (text1.length + text2.length + i) / 10,
                        }}
                        key={i}
                    >
                        {text}
                    </motion.span>
                ))}
            </span>
        </h2>
    );
};

export default HeadingComponent;