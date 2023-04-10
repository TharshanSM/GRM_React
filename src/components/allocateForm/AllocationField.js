function AllocationField() {
    return (
        <div className="row mb-3">
            <label htmlFor="inputText" className="col-sm-4 col-form-label">
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
                    placeholder="Allocation"
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
    );
}

export default AllocationField;
