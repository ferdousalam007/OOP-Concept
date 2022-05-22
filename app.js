//factory pattern
// function createPerson(fName, lName) {
//     return {
//         fName: fName,
//         lName: lName,
//         getFullName() {
//             console.log(`This person full name is ${this.fName} ${this.lName}`);
//         }

//     }
// }
// const person1 = createPerson('Ferdous', 'Alam');
// console.log(person1);
// const person2 = createPerson('Rakib', 'Hassan');
// person1.getFullName()
// person2.getFullName()


//constructor-pattern

function MyProduct(name,price,color){
    this.name=name,
    this.price=price
    this.color=color
    this.productInfo=function(){
        console.log(`Your purchase product is ${this.name} price ${this.price} and color is ${this.color}`);
    }
    console.log(this);

}
const product1=new MyProduct('phone',1250,'red')
product1.productInfo()
const product2=new MyProduct('tv',12500,'black')
product2.productInfo()