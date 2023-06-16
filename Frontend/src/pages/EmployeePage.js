import React from "react";
import Select from "react-select";

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

const EmployeePage = () => {
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Employee Overview</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Employee Overview
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Employee Overview */}
                <div>
                    <Select
                        placeholder={
                            <span class="bi bi-person-check">
                                {"  "}Filter by Employee...
                            </span>
                        }
                        options={employeeOptions}
                    ></Select>
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-body text-center mt-4">
                                    <img
                                        src="profile-img.jpg"
                                        alt="avatar"
                                        className="rounded-circle"
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
                                            className="btn btn-outline-primary ms-1"
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
                                                                January Month
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
                                                                        Week 01
                                                                    </th>
                                                                    <th scope="col">
                                                                        Week 02
                                                                    </th>
                                                                    <th scope="col">
                                                                        Week 03
                                                                    </th>
                                                                    <th scope="col">
                                                                        Week 03
                                                                    </th>
                                                                    <th scope="col">
                                                                        Week 03
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        Singer
                                                                        Srilanka
                                                                    </th>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>60</td>
                                                                    <td>20</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        Woerly
                                                                    </th>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>60</td>
                                                                    <td>20</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        VBG
                                                                    </th>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>40</td>
                                                                    <td>60</td>
                                                                    <td>20</td>
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
                                            <p className="mb-0">Customers</p>
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
                                                                Singer Sri Lanka
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
                                                            aria-valuenow={40}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
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
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
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
                                                            aria-valuenow={25}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
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
            </main>
            <Footer></Footer>
        </>
    );
};

export default EmployeePage;
