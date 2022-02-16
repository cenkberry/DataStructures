
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
 }
 
 class BTS{
     constructor(){
         this.root = null;
     };
 
     add(data){
 
         const node = this.root;
         if(node === null){
             this.root = new Node(data);
             return;
         }
     
         else {
             const searchTree = function(node) {
                 if(data < node.data){
                     if(node.left === null){
                         node.left = new Node(data);
                         return;
                     }
                     else if(node.left !== null){
                         return searchTree(node.left);
                     }
                 }
                 else if(data > node.data){
                      
                     if(node.right === null){
                         node.right = new Node(data);
                         return;
                     }
                     else if(node.right !== null){
                         return searchTree(node.right);
                     }
                 }
                 else{
                     return null;
                 }
             }
              return searchTree(node);
         }
 
     };
 
     min(){
       
     };
 
     max(){
       
     };
 
     contains(){
       
       
     };
 };
 
 const bts = new BTS();
 
 bts.add(20);
 bts.add(10);
 bts.add(30);
 bts.add(17);
 bts.add(5);
 bts.add(15);
 bts.add(40);
 bts.add(1);
 bts.add(13);
 bts.add(35);
 bts.add(50);
 bts.add(45);
 bts.add(60);
 
 
 console.log(bts.min());
 console.log(bts.max());
 
 console.log(bts.contains(20));
 console.log(bts.contains(200));
 
 console.log(bts.root);