class Queue{
    constructor(){
        this.arrs = [];
    };

    print(){
        return console.log(this.arrs);
    }

    enqueue(item){
        this.arrs.push(item);
    };

    dequeue(){
        console.log( `${this.arrs[0]} is deleted from array` );
         return this.arrs.shift();
    };

    peek(){
        if(this.arrs.length === 0){
            return console.log("This array is empty");
        }
        else{
            return console.log(`First Element is: ${this.arrs[0]}`);
        }
    };

    getSize(){
         return console.log(`Array length is: ${this.arrs.length}`);
    };

    isEmpty(){
        if(this.arrs.length > 0){
            return console.log("This array isnt empty");
        }
        else
        {
            return console.log("This array is empty");
        }
    };
};

const myarr = new Queue();

myarr.enqueue("Dog");
myarr.enqueue("Cat");
myarr.enqueue("Snake");
myarr.dequeue();
myarr.peek();
myarr.isEmpty();
myarr.print();