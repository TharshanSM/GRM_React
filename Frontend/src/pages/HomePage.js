import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

import AllocationByEmp from "../components/OverviewAllocation/AllocationByEmp";
import AllocationByProject from "../components/OverviewAllocation/AllocationByProject";
import AllocationByRegion from "../components/OverviewAllocation/AllocationByRegion";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const regionOptions = [
    {
        value: 1,
        label: "Sweden",
    },
    {
        value: 2,
        label: "Finland",
    },
    {
        value: 3,
        label: "Norway",
    },
    {
        value: 4,
        label: "Poland",
    },
    {
        value: 5,
        label: "USA",
    },
    {
        value: 6,
        label: "Netherlands",
    },
    {
        value: 7,
        label: "Germany",
    },
    {
        value: 8,
        label: "Switzerland",
    },
    {
        value: 9,
        label: "Australia",
    },
    {
        value: 10,
        label: "Sri Lanka",
    },
];

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
    { value: 10, label: "Beyond Gravity " },
];

const roleOptions = [
    { value: 1, label: "Flow Consultant" },
    { value: 2, label: "IFS Maintenance" },
    { value: 3, label: "IFS Developer" },
    { value: 4, label: "Flow Developer" },
    { value: 5, label: "Project Manager" },
    { value: 6, label: "IFS Human Capital Management" },
];

const weekOptions = [
    { value: 28, label: "Week No 28 / 2023-07-10" },
    { value: 29, label: "Week No 29 / 2023-07-17" },
    { value: 30, label: "Week No 30 / 2023-07-24" },
    { value: 31, label: "Week No 31 / 2023-07-31" },
    { value: 32, label: "Week No 32 / 2023-08-07" },
    { value: 33, label: "Week No 33 / 2023-08-14" },
    { value: 34, label: "Week No 34 / 2023-08-21" },
    { value: 35, label: "Week No 35 / 2023-08-28" },
];

const monthOptions = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
];

function HomePage() {
    const [employees, setEmployees] = useState([]);
    const [project, setProject] = useState(null);
    const [role, setRole] = useState(null);
    const [weeks, setWeeks] = useState([]);
    const [allocation, setAllocation] = useState("");

    const [selectedEmployee, setSelectedEmployee] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState([]);

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (
            employees.length === 0 ||
            project === null ||
            role === null ||
            weeks === null ||
            allocation === ""
        ) {
            setErrorMessage("Please Select Fields");
        } else {
            try {
                await Promise.all(
                    employees.map(async (emp) => {
                        await Promise.all(
                            weeks.map(async (week) => {
                                const label = week.label;
                                const parts = label.split(" / ");
                                const weekNo = parts[0].split(" ")[2];
                                const date = parts[1];

                                console.log({
                                    employee: emp.label,
                                    week: weekNo,
                                    week_start_date: date,
                                    customer: project.label,
                                    role: role.label,
                                    allocation: allocation,
                                });

                                const response = await axios.post(
                                    "http://localhost:3000/allocations/addEmployeeAllocation",
                                    {
                                        emp_name: emp.label,
                                        cm_group: "Sri Lanka",
                                        week_no: weekNo,
                                        week_start_date: date,
                                        customer: project.label,
                                        role: role.label,
                                        allocation: allocation,
                                    }
                                );
                                console.log(response.data);
                            })
                        );
                    })
                );

                setSuccessMessage("All allocations added successfully");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChangeEmployee = (selectedOption) => {
        setEmployees(selectedOption);
    };

    const handleChangeProject = (selectedOption) => {
        setProject(selectedOption);
    };

    const handleChangeRole = (selectedOption) => {
        setRole(selectedOption);
    };

    const handleChangeWeek = (selectedOption) => {
        setWeeks(selectedOption);
    };

    const handleChangeAllocation = (event) => {
        setAllocation(event.target.value);
    };

    // Filter Functions
    const handleEmployeeSelect = (selectedOption) => {
        setSelectedEmployee(selectedOption);
    };

    const handleProjectSelect = (selectedOption) => {
        setSelectedProject(selectedOption);
    };

    const handleRegionSelect = (selectedOption) => {
        setSelectedRegion(selectedOption);
    };
    return (
        <>
            <Header></Header>
            <Sidebar active="main"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Schedule</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Schedule</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            <a
                                key="Allocate"
                                className="btn btn-outline-primary me-1"
                                data-bs-toggle="collapse"
                                href="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                <i className="bi bi-plus-circle" /> Allocate
                            </a>
                            <a
                                key="Overview Schedule"
                                className="btn btn-outline-primary me-1"
                                data-bs-toggle="collapse"
                                href="#collapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample1"
                            >
                                <i className="bi bi-view-stacked" /> Overview
                                Schedule
                            </a>
                        </div>

                        <div className="collapse" id="collapseExample">
                            {errorMessage && (
                                <div
                                    className=" mt-3 alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <span className="bi bi-check2-circle"></span>{" "}
                                    {errorMessage}
                                </div>
                            )}

                            {successMessage && (
                                <div
                                    className=" mt-3 alert alert-success alert-dismissible fade show"
                                    role="alert"
                                >
                                    <span className="bi bi-check2-circle"></span>{" "}
                                    {successMessage}
                                </div>
                            )}
                            <div className="card card-body mt-3 pt-3">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Project
                                        </label>
                                        <div className="col-sm-8">
                                            <Select
                                                options={projectOptions}
                                                onChange={handleChangeProject}
                                            ></Select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Project Role
                                        </label>
                                        <div className="col-sm-8">
                                            <Select
                                                options={roleOptions}
                                                onChange={handleChangeRole}
                                            ></Select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Week
                                        </label>
                                        <div className="col-sm-8">
                                            <Select
                                                options={weekOptions}
                                                onChange={handleChangeWeek}
                                                isMulti
                                            ></Select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Employee(s)
                                        </label>
                                        <div className="col-sm-8">
                                            <Select
                                                options={employeeOptions}
                                                onChange={handleChangeEmployee}
                                                isMulti
                                                isSearchable
                                            ></Select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Allocation
                                        </label>
                                        <div className="col-sm-8">
                                            <input
                                                type="number"
                                                min={5}
                                                max={80}
                                                className="form-control"
                                                list="datalistOptions"
                                                id="exampleDataList"
                                                placeholder="Enter or Select..."
                                                value={allocation}
                                                onChange={
                                                    handleChangeAllocation
                                                }
                                            />
                                            <datalist id="datalistOptions">
                                                <option value={10} />
                                                <option value={20} />
                                                <option value={40} />
                                                <option value={60} />
                                                <option value={80} />
                                            </datalist>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <span className="col-sm-4 col-form-label"></span>
                                        <div className="col-sm-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                id="submitbutton"
                                            >
                                                Allocate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Overview Schedule  */}

                        <div className="collapse" id="collapseExample1">
                            <div className="d-flex">
                                <div className="pt-3">
                                    <Select
                                        placeholder={
                                            <span className="bi bi-calendar2-check">
                                                {"  "}Filter By Month...
                                            </span>
                                        }
                                        options={monthOptions}
                                        isMulti
                                    ></Select>
                                </div>

                                <div className="pt-3 ps-1">
                                    <Select
                                        placeholder={
                                            <span className="bi bi-person-check">
                                                {"  "}Filter by Employee...
                                            </span>
                                        }
                                        options={employeeOptions}
                                        isMulti
                                        onChange={handleEmployeeSelect}
                                    ></Select>
                                </div>
                                <div className="pt-3 ps-1">
                                    <Select
                                        placeholder={
                                            <span className="bi bi-list-task">
                                                {"  "}Filter by Project...
                                            </span>
                                        }
                                        options={projectOptions}
                                        onChange={handleProjectSelect}
                                        isMulti
                                    ></Select>
                                </div>
                                <div className="pt-3 ps-1">
                                    <Select
                                        placeholder={
                                            <span className="bi bi-geo-alt-fill">
                                                {"  "}Filter by Region...
                                            </span>
                                        }
                                        options={regionOptions}
                                        onChange={handleRegionSelect}
                                        isMulti
                                    ></Select>
                                </div>
                            </div>

                            {selectedEmployee.length > 0 &&
                                selectedEmployee.map((employee) => (
                                    <AllocationByEmp
                                        employee={employee}
                                    ></AllocationByEmp>
                                ))}

                            {selectedProject.length > 0 &&
                                selectedProject.map((project) => (
                                    <AllocationByProject
                                        project={project}
                                    ></AllocationByProject>
                                ))}

                            {selectedRegion.length > 0 &&
                                selectedRegion.map((region) => (
                                    <AllocationByRegion
                                        region={region}
                                    ></AllocationByRegion>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default HomePage;
