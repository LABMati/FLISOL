function preload(){
	img = loadImage('img/dinozao.png')
}
function setup(){
	canvas = createCanvas(innerWidth,innerHeight);
	ground = height- 100
	document.querySelector('div#interface').appendChild(canvas.elt);
	dino = new Dino(100, 200, ground-100, ground-100, img)
	dino.show()
	frameRate(60)
}

function draw(){
	background('e3e3e3');
	strokeWeight(4)
	stroke(69)
	line(0,ground,width,ground)
	dino.update()
	dino.show()
}

class Dino{
	
	constructor(size, px, pyi, pya, img) {
		this.size = size
		this.px = px
		this.pyi = pyi
		this.pya = pya
		this.vy = 0
		this.view = img 
		this.gravity = 1

	}

	show(){
		image(this.view, this.px, this.pya, this.size, this.size)
	}

	update(){
		if(dino.pya+dino.size <= ground) {
			dino.vy += 1
			dino.pya += dino.vy
		}
	}

	jump(){

	}
}

function keyPressed(){
	if(keyCode === 32 || keyCode == UP_ARROW && dino.pya+dino.size >= ground){
		dino.vy = -20
		dino.pya += dino.vy
	}	
}

