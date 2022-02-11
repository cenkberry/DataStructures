class PriorityQueue{
    constructor(){
        this.myArr = [];
    };

    print(){
        return console.log(this.myArr);
    }
    getSize(){
        return console.log(`Array length is: ${this.myArr.length}`);
    };
    peek(){
        if(this.myArr.length === 0){
            return console.log("This array is empty");
        }
        else{
            return console.log(`First Element is: ${this.myArr[0]}`);
        }
    };

    isEmpty(){
        if(this.myArr.length > 0){
            return console.log("This array isnt empty");
        }
        else
        {
            return console.log("This array is empty");
        }
    };

    dequeue(){
        console.log( `${this.myArr[0]} is deleted from array` );
         return this.myArr.shift();
    };

    enqueue(item){
        
            var added = false;

            for(let i = 0 ; i<this.myArr.length;i++)
            {
                if(item[1] > this.myArr[i][1]){
                    this.myArr.splice(i,0,item);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.myArr.push(item);
            }
    };
    
};

const myarr = new PriorityQueue();

myarr.enqueue( ["Student-John" , 75] );
myarr.enqueue( ["Student-Alvaro"  , 63] );
myarr.enqueue( ["Student-Rana"  , 98] );
myarr.enqueue( ["Student-Bill"  , 27] );
myarr.enqueue( ["Student-Jake"  , 48] );
myarr.enqueue( ["Student-Cenk"  , 90] );
myarr.print();
myarr.peek();
myarr.getSize();
myarr.isEmpty();