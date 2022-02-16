class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    };

    add(data) {

        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {

                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    };

    min() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    };

    max() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    };

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // no child node
                if (node.left == null && node.right == null) {
                    return null;
                }
                // no left node
                if (node.left == null) {
                    return node.right;
                }
                // no right node
                if (node.right == null) {
                    return node.left;
                }
                // has 2 child nodes
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bts = new BTS();

bts.add(20);
bts.add(10);
bts.add(30);
bts.add(5);
bts.add(15);
bts.add(40);
bts.add(1);
bts.add(13);
bts.add(17);
bts.add(35);
bts.add(50);
bts.add(45);
bts.add(60);

console.log(bts.min()); // 1
console.log(bts.max()); // 60
console.log(bts.find(35)); //node.data = 35
console.log(bts.find(99)); //null
console.log(bts.root.left); //node.data = 10   
console.log(bts.root.right); //node.data = 30   