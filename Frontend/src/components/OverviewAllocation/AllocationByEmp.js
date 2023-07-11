import React, { useState, useEffect } from "react";
import axios from "axios";

function AllocationByEmp({ employee }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/allocations/getDetailsByEmpName/${employee.label}/28`
                );

                setData(response.data.result[0].allocation_details);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [employee]);
    // console.log(data);
    return (
        <>
            <div className="card card-body mt-3 pt-3 col">
                <h5 className="card-title text-center fs-4">
                    {employee.label}
                </h5>
                <table className="table caption-top">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Roles</th>
                            <th>WN28 / 23-07-10</th>
                            <th>WN29 / 23-07-17</th>
                            <th>WN30 / 23-07-24</th>
                            <th>WN31 / 23-07-31</th>
                            <th>WN32 / 23-08-07</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <th scope="row">{item.customer}</th>
                                <th>{item.role}</th>
                                <th>{item.allocation}</th>
                            </tr>
                        ))}
                        <tr>
                            <th scope="row" className="text-muted">
                                Leave
                            </th>
                            <td>
                                <span className="badge bg-info"></span>
                            </td>
                            <td>
                                <span className="badge bg-info">0 %</span>
                            </td>
                            <td>
                                <span className="badge bg-info">0 %</span>
                            </td>
                            <td>
                                <span className="badge bg-info">0 %</span>
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
                                <span className="badge bg-danger">0 %</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0 %</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0 %</span>
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
                                <span className="badge bg-success">80 %</span>
                            </td>
                            <td>
                                <span className="badge bg-success">80 %</span>
                            </td>
                            <td>
                                <span className="badge bg-success">80 %</span>
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
                                    20 %
                                </span>
                            </td>
                            <td>
                                <span className="badge bg-warning text-dark">
                                    20 %
                                </span>
                            </td>
                            <td>
                                <span className="badge bg-warning text-dark">
                                    20 %
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllocationByEmp;
