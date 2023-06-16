function Header() {
    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="/logo.png" alt="" />
                    <span className="d-none d-lg-block">GRM</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn" />
            </div>
            {/* End Logo */}
            <div className="search-bar">
                <form
                    className="search-form d-flex align-items-center"
                    method="POST"
                    action="#"
                >
                    <input
                        type="text"
                        name="query"
                        placeholder="Search"
                        title="Enter search keyword"
                    />
                    <button type="submit" title="Search">
                        <i className="bi bi-search" />
                    </button>
                </form>
            </div>
            {/* End Search Bar */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a
                            className="nav-link nav-icon search-bar-toggle"
                            href="http://localhost:3000/index.html"
                        >
                            <i className="bi bi-search" />
                        </a>
                    </li>
                    {/* End Search Icon*/}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="http://localhost:3000/index.html"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-bell" />
                            <span className="badge bg-primary badge-number">
                                4
                            </span>{" "}
                        </a>
                        {/* End Notification Icon */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have 4 new notifications
                                <a href="http://localhost:3000/index.html">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning" />
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="notification-item">
                                <i className="bi bi-x-circle text-danger" />
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="notification-item">
                                <i className="bi bi-check-circle text-success" />
                                <div>
                                    <h4>Sit rerum fuga</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>2 hrs. ago</p>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="notification-item">
                                <i className="bi bi-info-circle text-primary" />
                                <div>
                                    <h4>Dicta reprehenderit</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="dropdown-footer">
                                <a href="http://localhost:3000/index.html">
                                    Show all notifications
                                </a>
                            </li>
                        </ul>
                        {/* End Notification Dropdown Items */}
                    </li>
                    {/* End Notification Nav */}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="http://localhost:3000/index.html#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-chat-left-text" />
                            <span className="badge bg-success badge-number">
                                3
                            </span>{" "}
                        </a>
                        {/* End Messages Icon */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                You have 3 new messages
                                <a href="http://localhost:3000/index.html">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="message-item">
                                <a href="http://localhost:3000/index.html">
                                    <img
                                        src="assets/img/messages-1.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Maria Hudson</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="message-item">
                                <a href="http://localhost:3000/index.html">
                                    <img
                                        src="assets/img/messages-2.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Anna Nelson</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>6 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="message-item">
                                <a href="http://localhost:3000/index.html">
                                    <img
                                        src="assets/img/messages-3.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>8 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="dropdown-footer">
                                <a href="http://localhost:3000/index.html">
                                    Show all messages
                                </a>
                            </li>
                        </ul>
                        {/* End Messages Dropdown Items */}
                    </li>
                    {/* End Messages Nav */}
                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="http://localhost:3000/index.html"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="/profile-img.jpg"
                                alt="Profile"
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                Admin
                            </span>{" "}
                        </a>
                        {/* End Profile Iamge Icon */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Admin Admin</h6>
                                <span>Consulting Manager - Novacura LK</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="pages-profile.html"
                                >
                                    <i className="bi bi-person" />
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="pages-profile.html"
                                >
                                    <i className="bi bi-gear" />
                                    <span>Account Settings</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="pages-faq.html"
                                >
                                    <i className="bi bi-question-circle" />
                                    <span>Need Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="http://localhost:3000/index.html"
                                >
                                    <i className="bi bi-box-arrow-right" />
                                    <span>Sign Out</span>
                                </a>
                            </li>
                        </ul>
                        {/* End Profile Dropdown Items */}
                    </li>
                    {/* End Profile Nav */}
                </ul>
            </nav>
            {/* End Icons Navigation */}
        </header>
    );
}

export default Header;
