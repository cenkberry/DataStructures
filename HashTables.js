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

    add(key, value) {

        let index = hash(key, this.sLimit); //create index 

        //if that index didn't created
        if (this.storage[index] === undefined) {
            this.storage[index] = [ [key, value] ];
        }
        
        else 
        {
            let inserted = false;
            //if it is in that index,you finding the place in index and changing the value:
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
                //if there is an index,but didnt created the key:
                if (inserted === false) {
                    this.storage[index].push([key, value]);
                }
            }
        }
    };

    remove(key) {
        let index = hash(key, this.sLimit); //create index var.

        //if there is an index and one key at inside
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } 
        else 
        {
            //Create a loop to find the place of key and delete it
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    };

    search(key) {
        let index = hash(key, this.sLimit); //create index var.

        //if there isnt any key that you search return undefined
        if (this.storage[index] === undefined) {
            return undefined;
        } 
        else 
        {
            //Create a loop to find the place of key and show it
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    console.log(this.storage[index][i]);
                }
            }
        }
    };
};


const xxx = new HashTable();
xxx.add("cenkberry", "05456407488");
xxx.add("ranaberry", "05456407519");
xxx.add("zlatanIbrahimovic", "05456407955");
xxx.add("alvaroRecoba", "05456407122");
xxx.remove("zlatanIbrahimovic");
xxx.print();
xxx.search("ranaberry");