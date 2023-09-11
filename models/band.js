const {v4: uuidv4} = require('uuid')


//creamos la band 
class Band {
    //iniciamos el contructor de la band y recibimos el name
    constructor(name){
        
        this.id    = uuidv4();
        this.name  = name;
        this.votos = 0;
    }
}
module.exports = Band;