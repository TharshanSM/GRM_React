import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import "../Main.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const projectOptions = [
    { value: 1, label: "Project A" },
    { value: 2, label: "Project B" },
    { value: 3, label: "Project C" },
    { value: 4, label: "Project D" },
    { value: 5, label: "Project E" },
    { value: 6, label: "Project F" },
    { value: 7, label: "Singer Sri Lanka" },
    { value: 8, label: "Woerly" },
    { value: 9, label: "VBG" },
    { value: 10, label: "Beyond Gravity" },
];

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

function OverviewAllocationPage() {
    const [data, setData] = useState([]);
    const [startWeek, SetStartWeek] = useState(50);
    const [buttonLabel, setButtonLabel] = useState("View History");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const totalWeeks = 52;
    const length = totalWeeks - startWeek + 1;

    useEffect(() => {
        fetchData();
    }, []);

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

    const handleButtonClick = () => {
        if (buttonLabel === "View History") {
            setButtonLabel("Current Week");
            SetStartWeek(1);
        } else {
            setButtonLabel("View History");
            SetStartWeek(50);
        }
    };

    const handleChangeProject = async (project) => {
        if (project && project.label) {
            try {
                const response = await axios.get(
                    "http://localhost:3000/allocations/getEmployeeAllocationByEmpProj",
                    {
                        params: {
                            proj: project.label,
                        },
                    }
                );
                setData(response.data.result);
            } catch (error) {
                console.log(error);
            }
        } else {
            fetchData();
        }
    };

    return (
        <body className={isSidebarOpen ? "toggle-sidebar" : ""}>
            <header
                id="header"
                className="header fixed-top d-flex align-items-center"
            >
                <div className="d-flex align-items-center justify-content-between">
                    <a
                        href="index.html"
                        className="logo d-flex align-items-center"
                    >
                        <img src="/logo.png" alt="" />
                        <span className="d-none d-lg-block">GRM</span>
                    </a>
                    <i
                        className="bi bi-list toggle-sidebar-btn"
                        onClick={() => {
                            setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
                        }}
                    />
                </div>
                <Navbar></Navbar>
            </header>
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
                                isClearable={true}
                                placeholder={
                                    <span className="bi bi-compass-fill">
                                        {"  "}Filter by Region.....
                                    </span>
                                }
                                options={regionOptions}
                            ></Select>
                        </div>
                        <div className="pt-3 ps-1">
                            <Select
                                isClearable={true}
                                placeholder={
                                    <span className="bi bi-distribute-vertical">
                                        {"  "}Filter by Project.....
                                    </span>
                                }
                                options={projectOptions}
                                onChange={handleChangeProject}
                            ></Select>
                        </div>
                    </div>
                </div>

                <div className="card card-body mt-3 pt-3 col">
                    <div className="table-responsive">
                        <table className="table caption-top table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th
                                        scope="row"
                                        className="table-light align-middle exception border border-end-0"
                                    >
                                        Employee
                                    </th>
                                    <th
                                        scope="row"
                                        className="text-muted second table-light"
                                    ></th>
                                    {Array.from(
                                        { length: length },
                                        (_, index) => (
                                            <th scope="row">
                                                {`W${(startWeek + index)
                                                    .toString()
                                                    .padStart(2, "0")}`}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            {data.map((emp, index) => (
                                <tbody>
                                    <tr className="table-light">
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
                                            className="text-muted second table-light "
                                        >
                                            Sum %
                                        </th>
                                        {Array.from(
                                            { length: length },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            startWeek + index
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span
                                                                className="badge bg-success me-1"
                                                                title={weekData.allocation_details
                                                                    .map(
                                                                        (x) =>
                                                                            `${x.customer} / Allocation : ${x.allocation} / Role : ${x.role}`
                                                                    )
                                                                    .join("\n")}
                                                            >
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
                                            Leave / Vacation / Holiday
                                        </th>
                                        {Array.from(
                                            { length: length },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            startWeek + index
                                                    );
                                                return (
                                                    <td>
                                                        {weekData ? (
                                                            <span className="badge bg-warning ">
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
                                    {/* <tr>
                                        <th className="text-muted second table-light">
                                            Public Holiday
                                        </th>
                                        {Array.from(
                                            { length: length },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            startWeek + index
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
                                    </tr> */}

                                    <tr>
                                        <th className="text-muted second table-light">
                                            Available %
                                        </th>
                                        {Array.from(
                                            { length: length },
                                            (_, index) => {
                                                const weekData =
                                                    emp.details.find(
                                                        (i) =>
                                                            i.week_no ===
                                                            startWeek + index
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
                <div className="d-flex justify-content-end">
                    <div className="pt-3 ps-1">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                        >
                            <span className="bi bi-plus-circle"> Allocate</span>
                        </button>
                    </div>
                    <div className="pt-3 ps-1">
                        <button
                            type="button"
                            className={`btn btn-outline-secondary ${
                                buttonLabel === "View History" ? "" : "active"
                            }`}
                            onClick={handleButtonClick}
                        >
                            <span className="bi bi-yelp"> {buttonLabel}</span>
                        </button>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </body>
    );
}

export default OverviewAllocationPage;
