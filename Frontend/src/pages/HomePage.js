import React, { useState } from "react";
import Select from "react-select";
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
    { value: 1, label: "Singer Sri Lanka" },
    { value: 2, label: "Woerly" },
    { value: 3, label: "VBG" },
];

const roleOptions = [
    { value: 1, label: "Consultant" },
    { value: 2, label: "Project Manager" },
    { value: 3, label: "Developer" },
];

const weekOptions = [
    { value: 1, label: "Week 09 | Feb 27 - Mar 03" },
    { value: 2, label: "Week 10 | Mar 06 - Mar 10" },
    { value: 3, label: "Week 11 | Mar 13 - Mar 17" },
    { value: 4, label: "Week 12 | Mar 20 - Mar 24" },
    { value: 5, label: "Week 13 | Mar 27 - Mar 31" },
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
                    className="btn btn-outline-primary"
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
    const [employees, setEmployees] = useState([]);
    const [project, setProject] = useState(null);
    const [role, setRole] = useState(null);
    const [weeks, setWeeks] = useState([]);
    const [allocation, setAllocation] = useState("");

    const [selectedEmployee, setSelectedEmployee] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("Employees:", employees);
        console.log("Project:", project);
        console.log("Role:", role);
        console.log("Weeks:", weeks);
        console.log("Allocation:", allocation);
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
            <Sidebar></Sidebar>
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
                        <div className="btn-group">
                            <ButtonGroup></ButtonGroup>
                        </div>

                        <div className="collapse" id="collapseExample">
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
