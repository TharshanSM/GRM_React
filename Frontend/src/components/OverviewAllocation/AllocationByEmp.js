import React, { useState, useEffect } from "react";
import axios from "axios";

function AllocationByEmp({ options, employee }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/allocations/getAllocationDetailsByEmpID/${employee.value}`
                );
                setData(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [employee]);

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
                            <th>W-01</th>
                            <th>W-02</th>
                            <th>W-03</th>
                            <th>W-04</th>
                            <th>W-05</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <th scope="row">{item.Project}</th>
                                <th>{item.Roles}</th>
                                <th>{item.Week01}</th>
                                <th>{item.Week02}</th>
                                <th>{item.Week03}</th>
                                <th>{item.Week04}</th>
                                <th>{item.Week05}</th>
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
                                Availble Allocations What is hosting
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
