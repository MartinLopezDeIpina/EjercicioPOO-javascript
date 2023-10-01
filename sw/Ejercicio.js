class Jugador {
    constructor(nombre, salud, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
        }

        luchar(jugador){

            if ( Math.random() * this.fuerza > jugador.fuerza ){

                jugador.salud -= this.fuerza;

            }else{

                this.salud -= jugador.fuerza;

            } 
        }
}

class Humano extends Jugador{
        constructor(nombre){
            super(nombre, 150, 70);
        }
}

class Maquina extends Jugador{
    constructor(nombre){
        super(nombre, 130, Math.floor(Math.random() * (100 - 1) + 1));
    }
}

class Extraterrestre extends Jugador{
    constructor(nombre){
        super(nombre, 70, Math.floor(Math.random() * (85 - 1) + 1));
    }
}

let campo = [];

for(let i = 1; i <= 50; i++){
    campo.push(new Humano("h" + i));
    campo.push(new Maquina("m" + i));
    campo.push(new Extraterrestre("e" + i));
}


while(campo.length > 1){
    barajarCampo();
    ejecutarLuchas();
    eliminarMuertos();
}

function barajarCampo(){
    campo.sort(() => Math.random() - 0.5);
}
function ejecutarLuchas(){
    for(let i = 0; i < campo.length-1; i += 2){
        let jug1 = campo[i];
        let jug2 = campo[i+1];
        
        hacerLuchas(jug1, jug2);
        printearLuchas(jug1, jug2);
        }
}
function hacerLuchas(jug1, jug2){
    jug1.luchar(jug2);
}
function printearLuchas(jug1, jug2){
    console.log('van a luchar: ' + jug1 + ' y ' + jug2);
}

function eliminarMuertos(){
    campo = campo.filter(jugador => jugador.salud > 0);
}

console.log(campo.forEach(jugador => console.log(jugador)));
console.log(campo);

