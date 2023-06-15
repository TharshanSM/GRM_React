function AllocationByProject({ options, project }) {
    return (
        <>
            <div className="card card-body mt-3 pt-3 col">
                <h5 className="card-title text-center fs-4">{project.label}</h5>
                <table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Employees</th>
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
                                <th scope="row">{item.employee}</th>
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
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllocationByProject;
