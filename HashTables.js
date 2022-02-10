const hash = (key, max) => {
    let hashed = 0;

    for (let i = 0; i < key.length; i++) {
        hashed += key.charCodeAt(i);
    }
    return hashed % max;
};

class HashTable {
    constructor() {
        this.storage = [];
        this.sLimit = 10;
    };

    print() {
        console.log(this.storage);
    };

    add(key,value) {

        var index = hash(key, this.sLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } 
        else 
        {
           var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }

                if (inserted === false) {
                    this.storage[index].push([key, value]);
                }
            }
        }

    };
};

let xxx = new HashTable();
xxx.add("cenk" , "05319231902");
xxx.add("rana" , "05456407620");
xxx.add("cemil1" , "05456407611");
xxx.add("cemil2" , "05456407612");
xxx.add("cemil3" , "05456407613");
xxx.add("cemil1" , "05456407619");
xxx.print();
