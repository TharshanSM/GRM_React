import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

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

const allocationOptions = [
    {
        value: 1,
        employee: "John Smith",
        project: "Singer Sri Lanka",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 20,
    },
    {
        value: 2,
        employee: "John Smith",
        project: "Woerly",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 60,
    },
    {
        value: 3,
        employee: "John Smith",
        project: "VBG",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 10,
    },
    {
        value: 4,
        employee: "John Smith",
        project: "Singer Sri Lanka",
        role: "Developer",
        week: "Week 10 | Mar 06 - Mar 10",
        allocation: 40,
    },
    {
        value: 5,
        employee: "John Smith",
        project: "Woerly",
        role: "Developer",
        week: "Week 10 | Mar 06 - Mar 10",
        allocation: 20,
    },
    {
        value: 6,
        employee: "John Smith",
        project: "VBG",
        role: "Developer",
        week: "Week 10 | Mar 06 - Mar 10",
        allocation: 20,
    },
    {
        value: 4,
        employee: "Donald OConnell",
        project: "Singer Sri Lanka",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 10,
    },
    {
        value: 5,
        employee: "Donald OConnell",
        project: "Woerly",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 40,
    },
    {
        value: 6,
        employee: "Donald OConnell",
        project: "VBG",
        role: "Developer",
        week: "Week 09 | Feb 27 - Mar 03",
        allocation: 10,
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
    { value: 1, label: "Week 01", disabled: true },
    { value: 2, label: "Week 02", disabled: true },
    { value: 3, label: "Week 03", disabled: true },
    { value: 4, label: "Week 04", disabled: true },
    { value: 5, label: "Week 05", disabled: true },
    { value: 6, label: "Week 06", disabled: true },
    { value: 7, label: "Week 07", disabled: true },
    { value: 8, label: "Week 08", disabled: true },
    { value: 9, label: "Week 09", disabled: true },
    { value: 10, label: "Week 10", disabled: true },
    { value: 11, label: "Week 11", disabled: true },
    { value: 12, label: "Week 12", disabled: true },
    { value: 13, label: "Week 13", disabled: true },
    { value: 14, label: "Week 14", disabled: true },
    { value: 15, label: "Week 15", disabled: true },
    { value: 16, label: "Week 16", disabled: true },
    { value: 17, label: "Week 17", disabled: true },
    { value: 18, label: "Week 18", disabled: true },
    { value: 19, label: "Week 19", disabled: true },
    { value: 20, label: "Week 20", disabled: true },
    { value: 20, label: "Week 20", disabled: true },
    { value: 21, label: "Week 21", disabled: true },
    { value: 22, label: "Week 22", disabled: true },
    { value: 23, label: "Week 23", disabled: true },
    { value: 24, label: "Week 24", disabled: true },
    { value: 25, label: "Week 25" },
    { value: 26, label: "Week 26" },
    { value: 27, label: "Week 27" },
    { value: 28, label: "Week 28" },
    { value: 29, label: "Week 29" },
    { value: 30, label: "Week 30" },
    { value: 31, label: "Week 31" },
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

const buttons = [
    {
        label: "Allocate",
        icon: "bi bi-plus-circle",
        target: "collapseExample",
    },
    {
        label: "Overview Schedule",
        icon: "bi bi-view-stacked",
        target: "collapseExample1",
    },
];

const ButtonGroup = () => {
    return (
        <>
            {buttons.map(({ label, icon, target }) => (
                <a
                    key={label}
                    className="btn btn-outline-primary me-1"
                    data-bs-toggle="collapse"
                    href={`#${target}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={target}
                >
                    <i className={icon} /> {label}
                </a>
            ))}
        </>
    );
};

function HomePage() {
    const navigate = useNavigate();
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
        }
        // Add Allocation
        try {
            const response = await axios.post(
                "http://localhost:3000/allocations/add",
                {
                    emp_id: employees[0].value,
                    project_id: project.value,
                    role_id: role.value,
                    week_id: weeks[0].value,
                    allocation: allocation,
                }
            );
            console.log(response.data);
            setSuccessMessage(response.data.output);
            setTimeout(() => {
                navigate("/main");
            }, 2000);
        } catch (error) {
            console.log(error);
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
                            <ButtonGroup></ButtonGroup>
                        </div>

                        <div className="collapse" id="collapseExample">
                            {errorMessage && (
                                <div
                                    className=" mt-3 alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    <span class="bi bi-check2-circle"></span>{" "}
                                    {errorMessage}
                                </div>
                            )}

                            {successMessage && (
                                <div
                                    className=" mt-3 alert alert-success alert-dismissible fade show"
                                    role="alert"
                                >
                                    <span class="bi bi-check2-circle"></span>{" "}
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
                                                isOptionDisabled={(option) =>
                                                    option.disabled
                                                }
                                                isMulti
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
                                            <span class="bi bi-calendar2-check">
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
                                            <span class="bi bi-person-check">
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
                                            <span class="bi bi-list-task">
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
                                            <span class="bi bi-geo-alt-fill">
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
                                        options={allocationOptions}
                                        employee={employee}
                                    ></AllocationByEmp>
                                ))}

                            {selectedProject.length > 0 &&
                                selectedProject.map((project) => (
                                    <AllocationByProject
                                        options={allocationOptions}
                                        project={project}
                                    ></AllocationByProject>
                                ))}

                            {selectedRegion.length > 0 &&
                                selectedRegion.map((region) => (
                                    <AllocationByRegion
                                        options={allocationOptions}
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
