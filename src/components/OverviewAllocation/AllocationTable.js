function AllocationTable() {
    return (
        <div className="card card-body mt-3 pt-3 col">
            <h5 className="card-title text-center fs-4">John Smith</h5>
            <table className="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Projects</th>
                        <th scope="col">W - 01</th>
                        <th scope="col">W - 02</th>
                        <th scope="col">W - 03</th>
                        <th scope="col">W - 04</th>
                        <th scope="col">W - 05</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Singer Srilanka</th>
                        <td>40</td>
                        <td>40</td>
                        <td>40</td>
                        <td>60</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th scope="row">Woerly</th>
                        <td>40</td>
                        <td>40</td>
                        <td>40</td>
                        <td>60</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th scope="row">VBG</th>
                        <td>40</td>
                        <td>40</td>
                        <td>40</td>
                        <td>60</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted">
                            Total Allocations
                        </th>
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
                            <span className="badge bg-success">80</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-muted">
                            Availble Allocations
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
    );
}

export default AllocationTable;
