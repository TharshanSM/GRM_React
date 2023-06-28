const { Schema, model } = require("mongoose");

const employeeAllocationSchema = new Schema(
    {
        emp_name: { type: String, required: true },
        cm_group: { type: String, required: true },
        other_cm_group: { type: String, default: "N/A" },
        comment: { type: String, default: "N/A" },
        week_no: { type: Number, required: true },
        week_start_date: { type: Date },
        allocation_details: [
            { type: Schema.Types.ObjectId, ref: "Allocation" },
        ],
        leave: { type: Number, default: 0 },
        public_holiday: { type: Number, defualt: 0 },
        vacation: { type: Number, default: 0 },
        sum: { type: Number, default: 0 },
        available: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const EmployeeAllocation = model(
    "EmployeeAllocation",
    employeeAllocationSchema
);
module.exports = EmployeeAllocation;
