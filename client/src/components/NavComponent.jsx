import { Link } from "react-router-dom";

function NavComponent() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavComponent;