//import React, { useState } from "react";
import Select from "react-select";
import AllocationTable from "./OverviewAllocation/AllocationTable";

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

const groupDataByEmployee = (data) => {
    const groupedData = {};
    data.forEach((item) => {
        if (!groupedData[item.employee]) {
            groupedData[item.employee] = [];
        }
        groupedData[item.employee].push(item);
    });
    return groupedData;
};

const groupedData = groupDataByEmployee(allocationOptions);
console.log(groupedData);

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
    {
        label: "Employee Overview",
        icon: "bi bi-person-check",
        target: "collapseExample2",
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

function Main() {
    const handleChangeEmployee = (selectedOption) => {
        console.log(selectedOption);
    };

    const handleChangeProject = (selectedOption) => {
        console.log(selectedOption);
    };

    const handleChangeRole = (selectedOption) => {
        console.log(selectedOption);
    };

    const handleChangeWeek = (selectedOption) => {
        console.log(selectedOption);
    };

    const handleFormSubmit = (event) => {
        //Handle Submission
    };

    return (
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

                                {/* <div className="row mb-3">
                                    <label
                                        htmlFor="inputText"
                                        className="col-sm-4 col-form-label"
                                    >
                                        Allocation Type
                                    </label>
                                    <div className="col-sm-8 d-flex">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Hard Allocation
                                            </label>
                                        </div>
                                        <div className="form-check ms-5">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault2"
                                            >
                                                Soft Allocation
                                            </label>
                                        </div>
                                    </div>
                                </div> */}

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
                                            {"  "}Filter by Month...
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
                                ></Select>
                            </div>
                        </div>
                        <AllocationTable
                            options={allocationOptions}
                        ></AllocationTable>
                    </div>

                    {/* Employee Overview */}
                    <div className="collapse mt-3" id="collapseExample2">
                        <Select
                            placeholder="Filter by Employee..."
                            options={employeeOptions}
                        ></Select>
                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <div className="card mb-4">
                                    <div className="card-body text-center mt-4">
                                        <img
                                            src="assets/img/profile-img.jpg "
                                            alt="avatar"
                                            className="rounded-circle img-fluid"
                                            style={{ width: 150 }}
                                        />
                                        <h5 className="my-3">John Smith</h5>
                                        <p className="text-muted mb-1">
                                            Solution Consultant
                                        </p>
                                        <p className="text-muted mb-4">
                                            Novacura Lanka (Pvt) Ltd
                                        </p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Overview Allocation
                                            </button>
                                            {/* Modal */}
                                            <div
                                                className="modal fade"
                                                id="exampleModal"
                                                tabIndex={-1}
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-xl">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1
                                                                className="modal-title fs-5 justify-content-end"
                                                                id="exampleModalLabel"
                                                            >
                                                                John Smith -
                                                                <span className="text-info">
                                                                    January
                                                                    Month
                                                                </span>
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">
                                                            <table className="table caption-top">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">
                                                                            Projects
                                                                        </th>
                                                                        <th scope="col">
                                                                            Week
                                                                            01 -
                                                                            Jan
                                                                            02
                                                                        </th>
                                                                        <th scope="col">
                                                                            Week
                                                                            02 -
                                                                            Jan
                                                                            09
                                                                        </th>
                                                                        <th scope="col">
                                                                            Week
                                                                            03 -
                                                                            Jan
                                                                            16
                                                                        </th>
                                                                        <th scope="col">
                                                                            Week
                                                                            03 -
                                                                            Jan
                                                                            23
                                                                        </th>
                                                                        <th scope="col">
                                                                            Week
                                                                            03 -
                                                                            Jan
                                                                            30
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            Singer
                                                                            Srilanka
                                                                        </th>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            60
                                                                        </td>
                                                                        <td>
                                                                            20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            Woerly
                                                                        </th>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            60
                                                                        </td>
                                                                        <td>
                                                                            20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            VBG
                                                                        </th>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            40
                                                                        </td>
                                                                        <td>
                                                                            60
                                                                        </td>
                                                                        <td>
                                                                            20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th
                                                                            scope="row"
                                                                            className="text-muted"
                                                                        >
                                                                            Total
                                                                            Allocations
                                                                        </th>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                80
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                80
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                80
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                80
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-success">
                                                                                80
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th
                                                                            scope="row"
                                                                            className="text-muted"
                                                                        >
                                                                            Availble
                                                                            Allocations
                                                                        </th>
                                                                        <td>
                                                                            <span className="badge bg-warning text-dark">
                                                                                20
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-warning text-dark">
                                                                                20
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-warning text-dark">
                                                                                20
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-warning text-dark">
                                                                                20
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge bg-warning text-dark">
                                                                                20
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Modal */}
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary ms-1"
                                            >
                                                More Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row mt-4">
                                            <div className="col-sm-3">
                                                <p className="mb-0">CM-Group</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">
                                                    Sri Lanka
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">
                                                    Customers
                                                </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">
                                                    Singer Sri Lanka
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Woerly
                                                </p>
                                                <p className="text-muted mb-0">
                                                    VBG
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Specama
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Roles</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">
                                                    IFS Developer
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Flow Developer
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Comments</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">
                                                    N/A
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card mb-4 mb-md-0">
                                    <div className="row">
                                        <div className="col card-title text-center">
                                            Weekly Allocation Status
                                        </div>
                                        <div className="col dropdown mt-3">
                                            <a
                                                className="btn dropdown-toggle border border-secondary"
                                                href="http://localhost:3000/index.html"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Week 01 - Feb 02 - 80
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="http://localhost:3000/index.html"
                                                    >
                                                        Week 01 - Feb 02 - 80
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="http://localhost:3000/index.html"
                                                    >
                                                        Week 02 - Feb 09 - 80
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="http://localhost:3000/index.html"
                                                    >
                                                        Week 03 - Feb 16 - 80
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="http://localhost:3000/index.html"
                                                    >
                                                        Week 04 - Feb 23 - 80
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table align-middle mb-0 bg-white">
                                            <thead>
                                                <tr>
                                                    <th>Project</th>
                                                    <th>Allocation</th>
                                                    <th>Progress View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">
                                                                    Singer Sri
                                                                    Lanka
                                                                </p>
                                                                <p className="text-muted mb-0">
                                                                    Sri Lanka
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h4>
                                                            <span className="badge bg-secondary">
                                                                40
                                                            </span>
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                style={{
                                                                    width: "40%",
                                                                }}
                                                                aria-valuenow={
                                                                    40
                                                                }
                                                                aria-valuemin={
                                                                    0
                                                                }
                                                                aria-valuemax={
                                                                    100
                                                                }
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">
                                                                    Woerly
                                                                </p>
                                                                <p className="text-muted mb-0">
                                                                    Sweden
                                                                    West/South
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h4>
                                                            <span className="badge bg-secondary">
                                                                20
                                                            </span>
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                style={{
                                                                    width: "20%",
                                                                }}
                                                                aria-valuenow={
                                                                    25
                                                                }
                                                                aria-valuemin={
                                                                    0
                                                                }
                                                                aria-valuemax={
                                                                    100
                                                                }
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">
                                                                    VBG
                                                                </p>
                                                                <p className="text-muted mb-0">
                                                                    DACH
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h4>
                                                            <span className="badge bg-secondary">
                                                                20
                                                            </span>
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                style={{
                                                                    width: "20%",
                                                                }}
                                                                aria-valuenow={
                                                                    25
                                                                }
                                                                aria-valuemin={
                                                                    0
                                                                }
                                                                aria-valuemax={
                                                                    100
                                                                }
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <div id="chart" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Employee Overview End */}
                </div>
            </div>
        </main>
    );
}

export default Main;
