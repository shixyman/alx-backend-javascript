// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Create a Teacher object
const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
};

// Set additional attributes dynamically
teacher.contract = true;

// Uncomment the following line to set the yearsOfExperience attribute
// teacher.yearsOfExperience = 5;

console.log(teacher);