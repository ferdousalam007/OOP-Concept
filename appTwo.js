//Abstraction
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    //Abstraction
    const totalCalc = function () {
        return this.price * this.quantity
    }.bind(this)  //binding this

    this.purchaseInfo = function () {
        console.log(`your product name is ${this.name} total quantity ${this.quantity} and total price is ${totalCalc()}`);
    }
}
const product3 = new Product('iphone', 10000, 3);
product3.purchaseInfo();