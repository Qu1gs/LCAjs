
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function createNode(value){
    return(new Node(value));
}


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

module.exports.createNode = createNode;
module.exports.findLCA = findLCA;