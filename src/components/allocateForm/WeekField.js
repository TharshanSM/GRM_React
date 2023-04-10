function WeekField(props) {
    return (
        <div className="row mb-3">
            <label htmlFor="inputText" className="col-sm-4 col-form-label">
                {props.label}
            </label>
            <div className="col-sm-8">
                <select
                    class="form-select"
                    aria-label="Select Project"
                    multiple=""
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default WeekField;
