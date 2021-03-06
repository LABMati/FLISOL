function preload(){
	img = loadImage('img/frame1.png')
	img2 = loadImage('img/frame2.png')
	cactusImg = loadImage('img/tubecolor.png')
	bgImage = loadImage('img/bg2.png')
}

var cactusArray = []
var canvas = {}
var ground = 0;

function setup(){
	canvas = createCanvas(innerWidth/2,innerHeight/2);
	canvas.elt.click()
	ground = height- 100
	document.querySelector('div#interface').appendChild(canvas.elt);
	dino = new Dino(100, 100, ground-100, ground-100, img)
	dino.show()
	frameRate(60)
	timerCactus = random(0, 200)
	setTimeout(createCactus, timerCactus)
	dificult = 1
	textSize(46)
}

var timerCactus = 0;

function draw(){
	background('f7f7f7');
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
	timerCactus = random(1200,1500)
	dificult += 0.0001
	text(parseInt(frameCount * 0.2), width / 2,height/8,  200, 200)
}

function createCactus(){
	cactus = new Cactus()
	if (cactus.width < 200) {
		cactus2 = new Cactus()
		cactusArray.push(cactus)
	}
	cactusArray.push(cactus)
	setTimeout(createCactus, timerCactus)
}

class Dino{
	
	constructor(size, px, pyi, pya, img) {
		this.size = size
		this.px = px
		this.pyi = pyi
		this.pya = pya
		this.vy = 0
		this.view = img 
		this.view2 = img2
		this.gravity = 1
		this.radius = size/2
		this.animationFrame = false
		this.frameCount = 0
	}

	show(){
		if (this.animationFrame) {
			image(this.view, this.px, this.pya, this.size, this.size)
		}else{
			image(this.view2, this.px, this.pya, this.size, this.size)
		}
	}

	update(){
		if(dino.pya+dino.size <= ground) {
			dino.vy += 1
			dino.pya += dino.vy
		}
		if (this.frameCount >=6) {
			this.animationFrame = !this.animationFrame
			this.frameCount = 0
		}else{
			this.frameCount++
		}
		this.checkCollide()
	}

	checkCollide(){
		for (var i = 0; i < cactusArray.length; i++) {
			let collisionX = this.px + this.size > cactusArray[i].px && this.px < cactusArray[i].px + cactusArray[i].width;
			let collisionY = this.pya + this.size > cactusArray[i].py;

			if (collisionX && collisionY) {
				frameRate(0)
			}
		}
	}
	jump(){
		let a = keyCode === 32 || keyCode == UP_ARROW; 
		if (a && this.pya === this.pyi + 1) {
			this.vy = -20
			this.pya += this.vy
		}
	}
}

var escalaCactus = 40

class Cactus{
	constructor() {
		this.height = random(70, 120)
		this.width = this.height * random(1, 2)
		this.px = canvas.width
		this.py = ground - this.height
		this.radiusY = this.height / 2
		this.radiusx = this.width / 2
		this.view = cactusImg
	}

	show(){
		image(this.view, this.px, ground-this.height, this.width, this.height)
	}

	update(){
		if(this.px > -200){
			this.px -= 10 * dificult;
		}
	}
}

var paused = false

function keyPressed(){
	dino.jump()
}

