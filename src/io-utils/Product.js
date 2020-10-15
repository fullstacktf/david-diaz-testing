export class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  calculatePrice() {
    return this.price * this.quantity;
  }
}
