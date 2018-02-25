function Phone(brand, price, color, screenSize) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.screenSize = screenSize;
};

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
    console.log("The rate price to screenSize is:" + Math.floor(this.price/this.screenSize));
};

var iPhone6S = new Phone("Apple", 2250, "silver", 5.7);
var sGalaxyS6 = new Phone("Samsung", 1740, "black", 6);
var onePlusOne = new Phone("OnePlus", 1200 , "gold", 5.5);

iPhone6S.printInfo();
sGalaxyS6.printInfo();
onePlusOne.printInfo();
