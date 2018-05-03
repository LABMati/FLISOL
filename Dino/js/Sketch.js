function preload(){
	img = loadImage('img/dino.png')
}
function setup(){
	canvas = createCanvas(innerWidth,innerHeight);
	document.querySelector('div#interface').appendChild(canvas.elt);
	dino = new Dino(150, 200, height/2, img)
	dino.show()
	frameRate(60)
}

function draw(){
	background('#2d2d2d');
	dino.update()
	dino.show()
}

class Dino{
	
	constructor(size, px, py, img) {
		this.size = size
		this.px = px
		this.py = py
		this.vy = 0
		this.view = img 
		this.gravity = 1

	}

	show(){
		image(this.view, this.px, this.py, 150, 150)
	}

	update(){
		if(dino.py+dino.size <= height - 20) {
			dino.vy += 1
			dino.py += dino.vy
		}
	}

	jump(){

	}
}

function keyPressed(){
	if(keyCode == 32 || keyCode == UP_ARROW){
		dino.vy = -20
		dino.py += dino.vy
	}	
}

