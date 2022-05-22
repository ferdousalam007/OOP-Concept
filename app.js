//factory pattern
function createPerson(fName, lName) {
    return {
        fName: fName,
        lName: lName,
        getFullName() {
            console.log(`This person full name is ${this.fName} ${this.lName}`);
        }

    }
}
const person1 = createPerson('Ferdous', 'Alam');
console.log(person1);
const person2 = createPerson('Rakib', 'Hassan');
person1.getFullName()
person2.getFullName()