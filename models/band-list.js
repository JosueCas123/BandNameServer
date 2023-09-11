const Band = require('./band');

class BandList {
    constructor() {
        this.bands = [
            new Band('The Beatles'),
            new Band('The Rolling Stones'),
            new Band('Bon Livi'),
            new Band('Branking Ben')
        ];

    }

    addBand(name) {
        const newBands = new Band(name);
        this.bands.push(newBands);
        return this.bands;
    }

    removeBand(id) {
       this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votos += 1;
            }
            return band;
        });
       
    }

    chengeName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        });
       
    }


}

module.exports = BandList;