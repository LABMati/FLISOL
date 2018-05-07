function preload(){
	//img = loadImage('img/dinozao.png')
}
var cactusArray = []
var canvas = {}
var ground = 0;

function setup(){
	canvas = createCanvas(innerWidth,innerHeight);
	canvas.elt.click()
	ground = height- 100
	document.querySelector('div#interface').appendChild(canvas.elt);
	dino = new Dino(100, 200, ground-100, ground-100/*, img*/)
	dino.show()
	frameRate(60)
}

var timerCactus = 0;

function draw(){
	background('e3e3e3');
	strokeWeight(4)
	stroke(69)
	line(0,ground,width,ground)
	dino.update()
	dino.show()
	fill(49)
	for (let i = 0; i < cactusArray.length; i++) {
		cactusArray[i].show()		
		cactusArray[i].update()
		if(cactusArray.length > 4){
			cactusArray.shift()
			cactusArray.shift()
		}
	}
	timerCactus = random(1500,2500)
}



setTimeout(createCactus, timerCactus)


function createCactus(){
	cactus = new Cactus()
	cactusArray.push(cactus)
	setTimeout(createCactus, timerCactus)
}

class Dino{
	
	constructor(size, px, pyi, pya/*, img*/) {
		this.size = size
		this.px = px
		this.pyi = pyi
		this.pya = pya
		this.vy = 0
		//this.view = img
	}

	show(){
		rect(this.px, this.pya, this.size, this.size)
		//image(this.view, this.px, this.pya, this.size, this.size)
	}

	update(){
		if(dino.pya+dino.size <= ground) {
			dino.vy += 1
			dino.pya += dino.vy
		}
		this.checkCollide()
	}

	checkCollide(){
		//console.log('checando colisão')
		for (var i = 0; i < cactusArray.length; i++) {
			let depois=this.px>cactusArray[i].px;
			let antes=this.px+this.size<cactusArray[i].px+cactusArray[i].width;

			line(this.px,0,this.px,canvas.height)
			line(this.px+this.size,0,this.px+this.size,canvas.height)

			line(cactusArray[i].px,0,cactusArray[i].px,canvas.height)
			line(cactusArray[i].px+cactusArray[i].width,0,cactusArray[i].px+cactusArray[i].width,canvas.height)
			
			if(antes&&depois){
				console.log('Jorge Werner')
			}
		}
	}
}



class Cactus{
	constructor(){
		this.height = random(50,100)
		this.width =  this.height*random(.5,2)
		this.px = canvas.width
		this.py = ground-this.height
		this.radiusY = this.height/2
		this.radiusx = this.width/2
	}

	show(){
		fill('red')
		rect(this.px, ground-this.height, this.width, this.height)
	}

	update(){
		if(this.px >-this.width){
			this.px -= 10;
		}
	}
}

var paused = false

function keyPressed(){
	if(keyCode === 32 || keyCode == UP_ARROW && dino.pya+dino.size >= ground){
		dino.vy = -20
		dino.pya += dino.vy
	}
}

