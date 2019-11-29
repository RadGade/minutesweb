const gun = require('gun');
const SEA = require('gun/sea');

class searchLogic {

    constructor() {
        this.uid =  []
    }

    look () {
        var name = "~@" + document.getElementById('search').value
        gun.get(name).map().on((data) => {setUld({uld : data}, () => {
          console.log(uld.uld.alias)
        })})
      }
}

export default searchLogic