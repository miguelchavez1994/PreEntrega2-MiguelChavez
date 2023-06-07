//______DATOS DE CATALOGO_______//
const catalogo = [
    {genero:"LATIN", instrumento:"BASS" , precio: 50},
    {genero:"LATIN", instrumento:"DRUMS", precio: 80},
    {genero:"LATIN", instrumento:"VOCALS", precio: 100},
    {genero:"TRAP", instrumento:"BASS", precio: 50},
    {genero:"TRAP", instrumento:"DRUMS", precio: 80},
    {genero:"TRAP", instrumento:"VOCALS", precio: 100},
    {genero:"REGUETON", instrumento:"BASS", precio: 50},
    {genero:"REGUETON", instrumento:"DRUMS", precio: 80},
    {genero:"REGUETON", instrumento:"VOCALS", precio: 100}
];

let listaCatalogo = "Bienvenido a Latin Sounds! \nTracks disponibles: \n\n";
catalogo.forEach(item => {
    listaCatalogo += `Genero: ${item.genero} - Instrumento: ${item.instrumento} - $${item.precio}\n`  
});


//______MOSTRAR CATALOGO________//
alert(listaCatalogo);


//Carrito de trakcs 
class CarritoTracks {
    constructor() {
        this.tracks = []
    }

    agregarTrack(generoTrack, instrumentoTrack , precioTrack) {
        this.tracks.push({id:this.generarId(), genero:generoTrack.toLocaleUpperCase()}, {instrumento:instrumentoTrack.toLocaleUpperCase()}, {precio:precioTrack});
        console.log("Agregaste un Track!")
        tracks.forEach(item => {
            if (item.instrumento == "BASS") {
                item.precio = 50
            } else if (item.instrumento == "DRUMS"){
                item.tracks.precio = 80

            } else if (item.instrumento == "BASS") {
                this.tracks.precio = 100
            } else {
                this.tracks.precio = 100
            }
            
        });
    }

    eliminarTrack(id){
        this.tracks = this.tracks.filter(item => item.id != id);
        console.log("Eliminaste un track")
    }
    totalProductos(){
        return this.tracks.length;
    }
    sumaTotal(){
        return this.tracks.reduce((total, item) => total += item.precio, 0)
    }

    generarId(){
        let max = 0;

        this.tracks.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
            
        });
        return max + 1;
    }

    listarTracks() {
        let contenido = "Tracks Agregados: \n\n";

        this.tracks.forEach(item => {
            contenido += `${item.id} - ${item.genero} - ${item.instrumento} - $${item.precio}`
            
        });
        return contenido;
    }
}

let genero = "";
let instrumento = "";
let precio = 0;



const carrito = new CarritoTracks();


//_____AGREGAR TRACKS AL CARRITO_____//

genero = prompt("Ingrese el genero del Track LATIN/TRAP/REGUETON (ESCRIBA ESC PARA SALIR)");

while (genero.toUpperCase() !== "ESC") {
    while (genero.toUpperCase !== "LATIN" || genero.toUpperCase !== "TRAP" || genero.toUpperCase !== "REGUETON") {
    alert("Error! Seleccione un genero entre LATIN/TRAP/REGUETON");
    genero.toUpperCase = prompt("Ingrese el genero del Track LATIN/TRAP/REGUETON (ESCRIBA ESC PARA SALIR)");
    }

    if (genero.toUpperCase() === "ESC") {
    break;
    }

    // Perform actions with the valid genero here
    
    instrumento = prompt("Ingrese el instrumento entre BASS/DRUMS/VOCALS)");    
    while (instrumento !== "BASS" && instrumento !== "DRUMS" && instrumento !== "VOCALS") {
        alert ("Error! Seleccione un instrumento entre BASS/DRUMS/VOCALS");
        instrumento = prompt("Ingrese el instrumento entre BASS/DRUMS/VOCALS");    
    }

    carrito.agregarTrack(genero, instrumento, precio);
}


//_____VALIDAR SI HAY TRACKS EN EL GARRITO______//

if (carrito.totalProductos() > 0) {
    let id;

    //ELIMINAR TRACKS
    while (id != 0) {
        id = parseInt(prompt(carrito.listarTracks()+ "\nIngrese el ID del Producto a Eliminar:\n(ESCRIBA 0 PARA SALIR)"));

        if (id > 0) {
            carrito.eliminarTrack(id);
        }

        if (carrito.totalProductos() == 0){
            break;
        }
    }
    alert(`Ha seleccionado los siguientes tracks: ${carrito.listarTracks()} \nTotal a Pagar: $${carrito.sumaTotal()}`);

} else {
    alert ("No se encontraron Tracks agregados en el carrito");
}



