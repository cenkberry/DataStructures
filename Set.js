class MySet {
    constructor() {
        this.mySet = [];
    }

    has(value) {
        if (this.mySet.indexOf(value) > -1) {
            console.log(`${value} is present in array`);
        } 
        else {
            console.log(`${value} isnt present in array`);
        }
    };

    print() {
        console.log(this.mySet);
    };

    isEmpty() {
        if (this.mySet.length === 0) {
            console.log("Your array is empty");
        } 
        else {
            console.log("Your array isnt empty");
        }
    };

    add(value) {
        if (this.mySet.indexOf(value) < 0) {
            console.log(`${value} added to array`);
            this.mySet.push(value);
        } 
        else {
            console.log(`You cant add this ${value} to array.Because this element is present`);
        }
    };

    remove(value) {

        let index = this.mySet.indexOf(value);

        if (index < 0) {
            console.log(`${value} isnt present in array`);
        } 
        else {
            console.log(`${value} deleted from array`);
            this.mySet.splice(index, 1);
        }
    };
};

const myset = new MySet();
myset.add("cenk");     // add element to array
myset.add("rana");     // add element to array
myset.add(34);         // add element to array
myset.add(27);         // add element to array
myset.print();         // ['cenk', 'rana', 34, 27]

myset.has("cenk");     // cenk is present in array;
myset.has("john");     // john isnt present in array
myset.isEmpty();       // your array isnt empty.

myset.remove("cenk");  // cenk deleted from array
myset.remove("john");  // john isnt present in array
myset.print();         // ['rana', 34, 27]