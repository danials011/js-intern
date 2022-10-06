// Declare an object
// Nested object
// Arrays
let student = {
    "name": "Ann", // key-value pair
    "studentid": "A123456",
    "faculty": {
        "name": "Engineering",
        "department": "Civil Engineering",
    },
    "hostel": {
        "name": "Hostel AAA+++",
        "block": "A",
        "roomNumber": {
            "floor": 2,
            "unitNumber": 10
        },
    },
    "age": 21,
    "isRegistered": true,
    "currentSemester": 4,
    "examResult": [
        {
            "semester": 1,
            "gpa": 2.67,
            "cgpa": 2.67
        }, {
            "semester": 2,
            "gpa": 4.00,
            "cgpa": 3.33
        }, {
            "semester": 3,
            "gpa": 4.00,
            "cgpa": 3.67
        }, {
            "semester": 4,
            "gpa": 4.00,
            "cgpa": 3.75
        }
    ],
};

console.log(student);
console.log(student.name);
console.log(student.faculty.name);
// Display unit number in the format of A-2-10
console.log(
    `${student.hostel.block}-${student.hostel.roomNumber.floor}-${student.hostel.roomNumber.unitNumber}`
);
// Display the cgpa result first semester only
console.log(student.examResult[0].cgpa);
// Display the array size
console.log(student.examResult.length);

// Add the properties from the existing object
student.hometown = "Kuala Lumpur";
console.log(student.hometown);