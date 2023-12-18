import { useContext } from "react";
import { LoginContext } from "../App";

const Home = () => {
    const value = useContext(LoginContext);
    return (
        <div>

            <h1>Home Page</h1>
            {value.login.isLogin &&
                <div>
                    <h1>{value.login.email}</h1>
                    <h1>{value.login.role}</h1>
                </div>
            }


        </div>
    );
}

export default Home;