import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const employeeOptions = [
    { value: 1, label: "John Smith" },
    { value: 2, label: "Donald OConnell" },
    { value: 3, label: "Jennifer Whalen" },
    { value: 4, label: "Michael Hartstein" },
    { value: 5, label: "Pat Fay" },
    { value: 6, label: "Susan Mavris" },
    { value: 7, label: "Hermann Baer" },
    { value: 8, label: "Shelley Higgins" },
    { value: 9, label: "William Gietz" },
    { value: 10, label: "Steven King" },
];

function HomePage() {
    return (
        <>
            <Header></Header>
            <Sidebar active="overview"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Overview</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Overview</li>
                        </ol>
                    </nav>
                </div>
                {employeeOptions.map((item) => (
                    <div className="card card-body mt-3 pt-3 col">
                        {/* <h5 className="card-title text-center fs-4">
                            {item.label}
                        </h5> */}
                        <table className="table caption-top">
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>WN-28</th>
                                    <th>WN-29</th>
                                    <th>WN-30</th>
                                    <th>WN-31</th>
                                    <th>WN-32</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-muted">
                                        Leave
                                    </th>
                                    <td>
                                        <span className="badge bg-info"></span>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">
                                            0 %
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-muted">
                                        Public Holiday
                                    </th>
                                    <td>
                                        <span className="badge bg-danger"></span>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">
                                            0 %
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-muted">
                                        Total Allocations
                                    </th>
                                    <td>
                                        <span className="badge bg-success"></span>
                                    </td>
                                    <td>
                                        <span className="badge bg-success">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-success">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-success">
                                            0 %
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-muted">
                                        Availble Allocations
                                    </th>
                                    <td>
                                        <span className="badge bg-success"></span>
                                    </td>
                                    <td>
                                        <span className="badge bg-warning text-dark">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-warning text-dark">
                                            0 %
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-warning text-dark">
                                            0 %
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </main>

            <Footer></Footer>
        </>
    );
}

export default HomePage;
