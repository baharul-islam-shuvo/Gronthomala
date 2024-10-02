import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto lg:px-[96px]">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;