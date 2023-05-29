function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* End Dashboard Nav */}
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="pages-schedule.html"
                    >
                        <i className="bi bi-book" />
                        <span>Schedule</span>
                    </a>
                </li>
                {/* End Schedule Nav */}
            </ul>
        </aside>
    );
}

export default Sidebar;
