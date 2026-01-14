import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "./index";
import { set, useForm } from "react-hook-form";


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signup = async (data) => {
        setError("");
        try {
            const user = await authService.createAccount(data); // jab user create ho jaye
            if (user) {
                const userData = await authService.getCurrentUser();  //toh current user ko fetch kr lo
                if (userData) dispatch(login(userData)); //redux store me user data ko store kr do means update kr do
                navigate('/'); //homepage pr navigate kr do
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25"><Logo width="100%" /></span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Sign in
                    </Link>
                </p>
                {error && <p className='mt-8 text-center  text-red-600'>{error}</p>} //display error if any
                <form onSubmit={handleSubmit(signup)}> {/* react-hook-form ka handleSubmit function jo form submission ko handle krta hai */}
                    <div className="space-y-5">
                        <Input //input field for name
                            label="Name"
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })} //register input field with react-hook-form it does validation as well
                        />
                        <Input //input field for email
                            label="Email address"
                            type="email"
                            placeholder="Enter email to get started"
                            {...register("email", { //spread operator to register input field with react-hook-form
                                required: true,
                                validate: { //options for custom validation
                                    matchPattern: (value) => { return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email address" }
                                }
                            })}
                        />
                        <Input //input field for password
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password",
                                {
                                    required: true,
                                }
                            )}

                        />
                        <Button type="submit" className="w-full">Create Account</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup