function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eatCat = function(cat) {
	this.stomach.push(cat);
};