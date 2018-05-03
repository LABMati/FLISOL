function preload(){
	img = loadImage('img/dino.png')
}
function setup(){
	canvas = createCanvas(innerHeight*2,innerHeight*.9);
	document.querySelector('div#interface').appendChild(canvas.elt);
	dino = new Dino(150, 40, height/2, img)
	dino.show()
	frameRate(60)
}

function draw(){
	background('red');
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
		console.log(keyIsPressed)
		if(keyIsPressed && keyCode == 32 || keyCode == UP_ARROW){
			this.vy = -20
			this.py += this.vy
			console.log(keyIsPressed)
			
			console.log(this.vy)
		}
		console.log(this.vy)
		console.log(keyIsPressed)
				
		if(this.py+this.size <= height - 20) {
			this.vy += 5
			this.py += this.vy
		}
	}

	jump(){

	}
}

function keyPressed(){
}

