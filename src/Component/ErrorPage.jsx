import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-8xl font-bold text-[#e4c9b5]">404</h1>
            <h2 className="text-3xl font-semibold mt-4"> Page Not Found </h2>
            <p className="text-gray-500 mt-2"> Oops! The page you're looking for doesn't exist. </p>
            <a href="/" className="btn mt-6 bg-[#8B5E3C] text-white border-none hover:bg-[#6F472D]" > Back to Home </a>
        </div>
    );
};

export default ErrorPage;