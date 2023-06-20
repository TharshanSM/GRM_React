function AllocationByEmp({ options, employee }) {
    return (
        <>
            <div className="card card-body mt-3 pt-3 col">
                <h5 className="card-title text-center fs-4">
                    {employee.label}
                </h5>
                <table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Projects</th>
                            <th scope="col">Roles</th>
                            <th scope="col">W-01</th>
                            <th scope="col">W-02</th>
                            <th scope="col">W-03</th>
                            <th scope="col">W-04</th>
                            <th scope="col">W-05</th>
                        </tr>
                    </thead>
                    <tbody>
                        {options.map((item) => (
                            <tr>
                                <th scope="row">{item.project}</th>
                                <th>{item.role}</th>
                                <td>{item.allocation}</td>
                                <td>{item.allocation}</td>
                                <td>{item.allocation}</td>
                                <td>{item.allocation}</td>
                                <td>{item.allocation}</td>
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
                                <span className="badge bg-info">0</span>
                            </td>
                            <td>
                                <span className="badge bg-info">0</span>
                            </td>
                            <td>
                                <span className="badge bg-info">0</span>
                            </td>
                            <td>
                                <span className="badge bg-info">0</span>
                            </td>
                            <td>
                                <span className="badge bg-info ">0</span>
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
                                <span className="badge bg-danger">0</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0</span>
                            </td>
                            <td>
                                <span className="badge bg-danger">0</span>
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
                                <span className="badge bg-success">80</span>
                            </td>
                            <td>
                                <span className="badge bg-success">80</span>
                            </td>
                            <td>
                                <span className="badge bg-success">80</span>
                            </td>
                            <td>
                                <span className="badge bg-success">80</span>
                            </td>
                            <td>
                                <span className="badge bg-success ">80</span>
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
        </>
    );
}

export default AllocationByEmp;
