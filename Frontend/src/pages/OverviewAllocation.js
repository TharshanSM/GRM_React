import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import "../Main.css";
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

                {/* <div>
                    <div className="d-flex">
                        <div className="pt-3 ps-1">
                            <Select
                                placeholder={
                                    <span className="bi bi-person-check">
                                        {"  "}Filter by...
                                    </span>
                                }
                                options={employeeOptions}
                                isMulti
                            ></Select>
                        </div>
                        <div className="pt-3 ps-1">
                            <Select
                                placeholder={
                                    <span className="bi bi-person-check">
                                        {"  "}Filter by...
                                    </span>
                                }
                                options={employeeOptions}
                                isMulti
                            ></Select>
                        </div>
                        <div className="pt-3 ps-1">
                            <Select
                                placeholder={
                                    <span className="bi bi-person-check">
                                        {"  "}Filter by...
                                    </span>
                                }
                                options={employeeOptions}
                                isMulti
                            ></Select>
                        </div>
                        <div className="pt-3 ps-1">
                            <Select
                                placeholder={
                                    <span className="bi bi-person-check">
                                        {"  "}Filter by...
                                    </span>
                                }
                                options={employeeOptions}
                                isMulti
                            ></Select>
                        </div>
                    </div>
                </div> */}

                <div className="card card-body mt-3 pt-3 col">
                    <div className="table-responsive ">
                        <table className="table caption-top table table-hover table-bordered table-nowrap">
                            <colgroup>
                                <col />
                                <col />
                                {Array.from({ length: 52 }, (_, index) => (
                                    <col key={index} />
                                ))}
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th></th>

                                    {Array.from({ length: 52 }, (_, index) => (
                                        <th> {`W${index + 1}`}</th>
                                    ))}
                                </tr>
                            </thead>
                            {data.map((emp) => (
                                <tbody>
                                    <tr>
                                        <th scope="row">{emp.emp_name}</th>
                                        <th scope="row" className="text-muted ">
                                            Leave
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
                                                            <span className="badge bg-secondary ">
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
                                        <th scope="row" />
                                        <th scope="row" className="text-muted ">
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
                                                            <span className="badge bg-secondary ">
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
                                        <th scope="row" />
                                        <th scope="row" className="text-muted ">
                                            Vacation
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
                                                            <span className="badge bg-secondary ">
                                                                {
                                                                    weekData.vacation
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
                                        <th scope="row" />
                                        <th scope="row" className="text-muted">
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
                                                    <td class="table-secondary">
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
                                        <th scope="row" />
                                        <th scope="row" className="text-muted ">
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
                                                    <td class="table-primary">
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
