interface PistaAudio{
    id: number,
    titulo:string
    duracion: string
    interprete: string
}


class PistaDeAudio implements PistaAudio {
    id: number;
    titulo:string;
    duracion: string;
    interprete: string;

    constructor(id: number,titulo:string,duracion: string,interprete: string){
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    
}

class AdminPîstasAudio {
    private listaReproduccion: PistaAudio[]

    constructor(){
        this.listaReproduccion = []
    }


    informacion(pistas: PistaAudio[]): void {
       
        console.log("Cantidad de canciones: ", pistas.length)

        
        let duracionCanciones: string[] = []
        for(let i=0; i< pistas.length; i++){
            duracionCanciones.push(`duracion de la canción ${pistas[i].titulo}: ${pistas[i].duracion}`)   
        }
        console.log(duracionCanciones)
    }
}


const cancion1 = new PistaDeAudio(1, 'Un poco de amor fránces', '3:32', 'Patricio Rey y sus redonditos de ricota')
const cancion2 = new PistaDeAudio(2, 'Algo mejor que hacer', '4:25', 'Cuarteto de nos')
const administradorPistas = new AdminPîstasAudio()


let canciones = [cancion1,cancion2]
const informacionPistas = administradorPistas.informacion(canciones)

