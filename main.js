
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3); 
root.left.left = new Node(4);
root.left.right = new Node(5); 
root.right.left = new Node(6); 
root.right.right = new Node(7);

console.log("LCA(4, 5) = " +findLCA(root, 4, 5).data);
console.log("LCA(4, 6) = " +findLCA(root, 4, 6).data); 
console.log("LCA(3, 4) = " +findLCA(root, 3, 4).data); 
console.log("LCA(2, 4) = " +findLCA(root, 2, 4).data);

function findLCA(root, n1, n2){
    if(root == null){
        return null;
    }
    if(root.data == n1 || root.data == n2){
        return root;
    }
    var leftLCA = findLCA(root.left, n1, n2);
    var rightLCA = findLCA(root.right, n1, n2);

    if(leftLCA != null && rightLCA != null){
        return root;
    }
    if(leftLCA != null){
        return leftLCA;
    }
    return rightLCA;
}