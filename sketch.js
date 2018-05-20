var bird;
var pipes = [];
var hits = 0;
var lives = 3;

function reset() {
	this.setup();
	this.draw();
	hits = 0;
	lives = 3;
}

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
  	pipes[i].show();
  	pipes[i].update();
  	  	if (pipes[i].hits(bird) && hits == lives) {
  		this.endGame();
  	}
  	if (pipes[i].hits(bird) && hits < lives) {
  		hits++;
  		this.firstHits();
  	}
  	if (pipes[i].offscreen()) {
  		pipes.splice(i, 1);
  	}
  }

  bird.update();
  bird.show();

  if(frameCount % 130 == 0) {
  	pipes.push(new Pipe());
  }


}
function firstHits() {
    background("red");
}

function endGame() {
  createCanvas(400, 600);
  background("yellow");
}

function keyPressed() {
	if(key == ' ') {
		bird.up();
	}
}