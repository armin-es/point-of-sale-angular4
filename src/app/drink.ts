
export class Drink {
    img;
    base;
    modifier;
    constructor(img, base, modifier) {
        this.img = img; // Image URL
        this.base = base;
        this.modifier = modifier;
    }

    price() {
		let modifierPrice = 0;
		for(let i = 0; i < this.modifier.length; i++) {
			if (this.modifier[i].count) {
				modifierPrice += this.modifier[i].price * this.modifier[i].count;
			}
		}
		return this.base.price + modifierPrice;
    }

	checkoutString() {
		let subString = '';
	   	for (let i = 0; i < this.modifier.length; i++) {
			if (this.modifier[i].count) {
			subString += ' | ' + this.modifier[i].count + ' ' + this.modifier[i].name;
			}
		}
		return this.base.name + subString + ": $" + this.price();
	}
}
