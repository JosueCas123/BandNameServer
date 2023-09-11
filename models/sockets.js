const BandList = require("./band-list");

class Sockets {
    constructor(io){
        this.io = io;
        
        this.bandList = new BandList();

        this.sockestEvents();
    }

    sockestEvents (){
        //On connecion
       this.io.on('connection',(socket)=>{
            console.log('Cliente connection')
            // emit al cliente todas las bandas conectadas
            socket.emit('current-bands', this.bandList.getBands())
            // votarpor laa banda
            socket.on('votar',(id)=>{
                
                this.bandList.increseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands())
                
            })

            //eliminar band list
            socket.on('eliminar',(id)=>{
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands())
            })

            //cabiar nombre de la band
            socket.on('cambiarNombre',({id, nombre})=>{
                this.bandList.chengeName(id,nombre);
                this.io.emit('current-bands', this.bandList.getBands())
            })

            //crear band

            socket.on('crearBanda',({nombre})=> {
                this.bandList.addBand(nombre);
                this.io.emit('current-bands', this.bandList.getBands())
            })
        })
    }
}
 module.exports = Sockets;