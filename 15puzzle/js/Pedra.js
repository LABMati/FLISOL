class Pedra {
    constructor(x, y) {
        //Pedra tem uma largura e altura iguais a 1/4 do Canvas
        this.size = canvas.width / 4;
        /* 
        PX - Position X
        PY - Position Y
        */
        this.px = this.size * x;
        this.py = this.size * y;
        this.value = (pedras.length + 1);
    }

    show() {
        fill('#494949');
        stroke(255)
        rect(this.px, this.py, this.size, this.size);
        fill(255);
        text(this.value, this.px + (this.size / 2), this.py + (this.size / 2));
    }

    setRandomPosition(){
        /*
        Pro jogo cumprir seu propósito, as posições iniciais das pedras devem variar randomicamente e sem repetições
        Alguém implementa isso pelo amor de jeová
        */
    }

    verifySides(){
        /*
        A cada clique do jogador, uma verificação deve ser feita para buscar lados da pedra target que estejam vazios
        Caso a verificação retorne verdadeiro, chamar o método update()
        */
    }

    update(){
        /*
        Esse método deve receber como parâmetros as posições novas da peça, modificar o estado dos atributos
        e por último chamar o método show()
        */
    }

}