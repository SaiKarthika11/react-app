import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <div>
            <h2> Home</h2>
            <Link to="/dashboard"> Dashboard</Link>
            <span> | </span>
            {/*<Link to="/login">Existing User</Link>
            <span> | </span>*/}
            <Link to="/chart">Charts</Link>
        </div>
    )
}