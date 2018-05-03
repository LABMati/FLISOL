var pedras=[];

function setup(){
	canvas = createCanvas(innerHeight*.9,innerHeight*.9);
	document.querySelector('div#interface').appendChild(canvas.elt);
	textAlign(CENTER, CENTER);
	textSize(50);
	
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if(pedras.length==15)
				break;
			pedras.push(new Pedra(j,i,pedras.length));
		}
	}
}

function draw(){
	background(51);
	for (var i = 0; i < pedras.length; i++)
		pedras[i].show();
}
