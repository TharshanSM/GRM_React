import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/main" className="nav-link collapsed">
                        <i className="bi bi-calendar3" />
                        <span>Schedule</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/employee" className="nav-link collapsed">
                        <i className="bi bi-people-fill" />
                        <span>Employee Overview</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
