main = document.querySelector('main')

function setup(){
	canvas = createCanvas(innerWidth/2, innerWidth/2)
	background('#d2d2d2')
	main.appendChild(canvas.elt)
	width = canvas.elt.style.width
	escale = parseInt(width)/4
	stroke(255)
	fill('#494949')
	setupTable()
}

function draw(){

}

class Peca{
	
	constructor(id, px, py){
		this.height = escale
		this.width = escale
		this.id = id
		this.px = px
		this.py = py
	}

}

var pecas = []
var i = 0

function setupTable(){
	var k = 0
	for (var i = 0; i < 4; i++) {
		for(var j=0; j<4; j++){
			k++
			if (k == 16)
				return
			pecas.push(new Peca(k, i*escale, j*escale))
			rect(pecas[k-1].px , pecas[k-1].py, escale, escale)
		}
	}
}

function mouseClicked(){

}

function verifySides(peca) {
	px = peca.px
	py = peca.py

	console.log(px)
	console.log(py)
}