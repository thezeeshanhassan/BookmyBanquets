import { useState } from "react"
import InputField from "../components/InputField"
import CombineButtons from "../components/CombineButtons"
import LogoComponent from "../components/LogoComponent"
import SliderComponent from "../components/SliderComponent"
import CheckboxComponent from "../components/Checkbox"
import SubheadingComponent from "../components/SubheadingComponent"
import HeadingComponent from "../components/HeadingComponent"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        userType: "customer",
    })

    const handleChange = (e) => {
        const { name, value, type } = e.target

        if (type === "radio") {
            setFormData((prev) => ({
                ...prev,
                userType: value,
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your registration logic here
    }

    return (
        <div className="flex h-screen w-full bg-gray-100 ">
            {/* Left side - Image Slider */}
            <div className="relative hidden w-2/5  bg-gray-100 md:block">
                <SliderComponent></SliderComponent>
            </div>


            {/* Right side - Registration Form */}
            <div className="flex w-full flex-col justify-center px-4 md:w-3/5 md:px-12 lg:px-20">
                <LogoComponent />

                <div className="mx-auto w-full max-w-md">
                    <HeadingComponent />
                    <CombineButtons />
                    <SubheadingComponent text1 = "Ready to Book Your Dream Venue?" text2 = "MyBanquets" text3 = "Makes It Easy and Hassle-Free!" />

                    <form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            id="name"
                            name="Name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required={true}
                        />
                        <InputField
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required={true}
                        />

                        <InputField
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required={true}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            isPassword={true}
                        />

                        <div className="mb-8 flex space-x-8">
                            <CheckboxComponent
                                name="role"
                                value="customer"
                                checked={formData.userType === "customer"}
                                onChange={handleChange}
                                label="Customer"
                            />
                            <CheckboxComponent
                                name="role"
                                value="hall manager"
                                checked={formData.userType === "hall manager"}
                                onChange={handleChange}
                                label="Hall Manager"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-pink-500 py-2 text-white hover:bg-pink-600 focus:outline-none"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;