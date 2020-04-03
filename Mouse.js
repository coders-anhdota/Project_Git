function Mouse(name){
	this.name = name;
	this.dead = false;
}

Mouse.prototype.isDead = function(first_argument) {
	this.dead = true; 
};