import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <div className="my-10"> 

            <h2 className="text-5xl font-bold flex mx-auto justify-center">Opps...!!!</h2>
            <NavLink to="/"><button className="btn btn-neutral my-5 flex mx-auto justify-center">GoBack</button></NavLink>
            </div>

            
        </div>
    );
};

export default ErrorPage;