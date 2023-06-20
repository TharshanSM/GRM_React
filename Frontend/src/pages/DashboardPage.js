import React from "react";
//import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DashboardPage = () => {
    //const location = useLocation();
    //const { role } = location.state;
    //const [userrole, setUserrole] = useState(role);

    return (
        <>
            <Header></Header>
            <Sidebar active="dashboard"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Dashboard
                            </li>
                        </ol>
                    </nav>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default DashboardPage;
