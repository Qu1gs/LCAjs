
class Node {
    constructor(key, value, children) {
        this.key = key;
        this.value = value
        this.children = children;
    }
}

function createNode(key, value, children){
    return(new Node(key, value, children));
}


function findLCA(root, node1, node2){
    if(root == null || node1 == null || node2 == null){
        return null;
    }
    result = path(root, node1, node2)
    if (result != null){
        return result
    }
    return null
}

function path(currentNode, node1, node2){
    var branches = 0;
    if(currentNode.children != null){
        for(var i = 0; i < currentNode.children.length; i++){
            result = path(currentNode.children[i], node1, node2)
            if (result != null){
                return result
            }
            else {
                branches++;
            }
        }
    }
    if(currentNode.key == node1.key || currentNode.key == node2.key){
        branches++;
    }
    if(branches > 1){
        return currentNode
    }
    return null;
}

module.exports.createNode = createNode;
module.exports.findLCA = findLCA;