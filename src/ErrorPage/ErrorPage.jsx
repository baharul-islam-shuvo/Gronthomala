import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-8 justify-center items-center">

            <div>
                <h1 className="text-2xl lg:text-5xl font-semibold text-gray-500">Page not found!!</h1>
            </div>

            <div>
                <Link to="/">
                    <button className="btn btn-outline">Go Home</button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;