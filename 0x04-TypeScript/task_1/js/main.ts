// Define the StudentClassConstructor interface for the constructor
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

// Define the StudentClass interface
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass using the StudentClassConstructor interface
const StudentClass: StudentClassConstructor = class {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
};

// Example usage of the StudentClass
const studentInstance: StudentClass = new StudentClass('John', 'Doe');
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());;