class Stack{
    constructor(){
        this.arrs = [];
    };

    print(){
        return console.log(this.arrs);
    }

    push(item){
        this.arrs.push(item);
    };

    pop(){
        console.log(`${this.arrs[this.arrs.length-1]} is deleted from array`);
        this.arrs.pop();
    };

    peek(){
        if(this.arrs.length === 0){
            return console.log("This array is empty");
        }
        else{
            return console.log(`Last stack is: ${this.arrs[this.arrs.length-1]}`);
        }
    };

    getSize(){
         return console.log(`Array length is: ${this.arrs.length}`);
    }

    isEmpty(){
        if(this.arrs.length > 0){
            return console.log("This array isnt empty");
        }
        else
        {
            return console.log("This array is empty");
        }
    }
};

const myarr = new Stack();
myarr.push("Cat");
myarr.push("Dog");
myarr.push("Snake");
myarr.push("Penguin");
myarr.push("Bird");
myarr.push("Penguin");
myarr.pop();
myarr.peek();
myarr.getSize();
myarr.isEmpty();
myarr.print();