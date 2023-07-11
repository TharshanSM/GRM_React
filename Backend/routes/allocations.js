const router = require("express").Router();
const EmployeeAllocation = require("../models/employeeAllocationModel");

const {
    getDetails,
    getDetailsByEmpName,
    addAllocation,
} = require("../controllers/employeeAllocationController");

router.get("/getDetails", getDetails);

router.get("/getDetailsByEmpName/:emp_name/:week_no", getDetailsByEmpName);

router.post("/addEmployeeAllocation", addAllocation);

router.get("/getEmployeeAllocationByEmp", async (req, res) => {
    try {
        const employeeDetails = await EmployeeAllocation.aggregate([
            {
                $lookup: {
                    from: "allocations",
                    localField: "allocation_details",
                    foreignField: "_id",
                    as: "allocation_details",
                },
            },
            {
                $group: {
                    _id: "$emp_name",
                    emp_name: { $first: "$emp_name" },
                    cm_group: { $first: "$cm_group" },
                    details: {
                        $push: {
                            week_no: "$week_no",
                            week_start_date: "$week_start_date",
                            leave: "$leave",
                            public_holiday: "$public_holiday",
                            vacation: "$vacation",
                            sum: { $sum: "$allocation_details.allocation" },
                            available: {
                                $subtract: [
                                    100,
                                    { $sum: "$allocation_details.allocation" },
                                ],
                            },
                            allocation_details: "$allocation_details",
                        },
                    },
                },
            },
        ]);
        res.json({ message: "Sucessfull", result: employeeDetails });
    } catch (error) {
        console.error("Failed to retrieve employee details:", error);
    }
});

module.exports = router;
