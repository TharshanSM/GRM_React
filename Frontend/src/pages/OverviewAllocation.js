import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import "../Main.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const regionOptions = [
    {
        value: 1,
        label: "Asia Pacific & Middle East",
    },
    {
        value: 2,
        label: "Nordics",
    },
];

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/allocations/getEmployeeAllocationByEmp"
                );

                setData(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

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

                <div>
                    <div className="d-flex">
                        <div className="pt-3 ps-1">
                            <Select
                                placeholder={
                                    <span className="bi bi-compass-fill">
                                        {"  "}Filter by Region.....
                                    </span>
                                }
                                options={regionOptions}
                                isMulti
                            ></Select>
                        </div>
                    </div>
                </div>

                <div className="card card-body mt-3 pt-3 col">
                    <div className="table-responsive ">
                        <table className="table caption-top table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th
                                        colSpan={2}
                                        className="text-center table-light exception"
                                    >
                                        Employee
                                    </th>
                                    {Array.from({ length: 52 }, (_, index) => (
                                        <th>
                                            {`W${(index + 1)
                                                .toString()
                                                .padStart(2, "0")}`}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            {data.map((emp, index) => (
                                <tbody>
                                    <tr>
                                        <th
                                            scope="row"
                                            rowSpan={4}
                                            className="table-light align-middle exception"
                                        >
                                            {emp.emp_name}
                                            <p className="text-muted">
                                                <em>LK / {index + 1}</em>
                                            </p>
                                        </th>
                                        <th
                                            scope="row"
                                            className="text-muted second table-light"
                                        >
                                            Sum %
                                        </th>
                                        {Array.from(
                                            { length: 52 },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            index + 1
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span className="badge bg-success ">
                                                                {weekData.sum}
                                                            </span>
                                                        ) : (
                                                            <span></span>
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                    <tr>
                                        <th className="text-muted second table-light">
                                            Leave / Vacation
                                        </th>
                                        {Array.from(
                                            { length: 52 },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            index + 1
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span className="badge bg-danger ">
                                                                {weekData.leave}
                                                            </span>
                                                        ) : (
                                                            <span></span>
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                    <tr>
                                        <th className="text-muted second table-light">
                                            Public Holiday
                                        </th>
                                        {Array.from(
                                            { length: 52 },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            index + 1
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span className="badge bg-warning ">
                                                                {
                                                                    weekData.public_holiday
                                                                }
                                                            </span>
                                                        ) : (
                                                            <span></span>
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>

                                    <tr>
                                        <th className="text-muted second table-light">
                                            Available %
                                        </th>
                                        {Array.from(
                                            { length: 52 },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            index + 1
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span className="badge bg-primary ">
                                                                {
                                                                    weekData.available
                                                                }
                                                            </span>
                                                        ) : (
                                                            <span></span>
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}

export default HomePage;
