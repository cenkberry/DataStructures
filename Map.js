class MyMap{
    constructor(){
        this.arr = {};
    }
    set(key , value){
        this.arr[key] = value;
        console.log(`${this.arr[key]} is added to array`);
    };
    delete(key){
        delete this.arr[key];
    };

    has(key){
        if(this.arr[key])
        {
            console.log(`This key is present on array`);
        }
        else{
            console.log(`This key isnt present on array`);
        }
    };
    get(key){
        if(this.arr[key])
        {
            console.log(`key value is: ${this.arr[key]}`);
        }
        else{
            console.log(`this key isnt present on array`);
        }
    };

    clear(){
        this.arr = [];
    }

}

const myMap = new MyMap();
myMap.set("Leader" , "cenkberry");     // cenkberry is added to array
myMap.set("Asisstant" , "ranaberry");  // ranaberry is added to array
myMap.set("Employee" , "johnsmith");   // johnsmith is added to array

myMap.get("Leader");                   // key value is: cenkberry
myMap.get("Temp");                     // this key isnt present on array
myMap.has("Leader");                   // This key is present on array

myMap.delete("Employee");              // Employee key is deleted.
console.log(myMap.arr);                // {Leader: 'cenkberry', Asisstant: 'ranaberry'}

myMap.clear();                         //  all array is cleared.
console.log(myMap.arr);                //  [] ---> empty array