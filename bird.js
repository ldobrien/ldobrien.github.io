function Bird() {
	this.y = height/2;
	this.x = 80;

	this.gravity = .6;
	this.lift = -15;
	this.velocity = 0;

	this.show = function() {
		fill("pink");
		ellipse(this.x, this.y, 16, 16);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *=0.9
		this.y += this.velocity;


		if(this.y > height) {
			this.y = height;
			this.velocity = 0;
		}
		if(this.y < 0) {
			this.y = height;
			this.velocity = 0;
		}
	}
}