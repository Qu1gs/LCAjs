const lca = require('./main.js');


// This test checks the successful case with the following tree with root, node1 and node2 as inputs:
//
//                  root
//                 /    \
//              node3   node4 _________
//             /     \        \        \
//          node1    node6 __  node9   node10
//          /       /   |    \
//      node5   node2  node7  node8

    let node5 = lca.createNode(5, "node5")    // node 0, 1, 2 all defined prev
    let node2 = lca.createNode(2, "node2")
    let node7 = lca.createNode(7, "node7")
    let node8 = lca.createNode(8, "node8")
    let node9 = lca.createNode(9, "node9")
    let node10 = lca.createNode(10, "node10")
    let node1 = lca.createNode(1, "node1")
    node1.children = [node5]
    let node6 = lca.createNode(6, "node6")
    node6.children = [node2, node7, node8]
    let  node3 = lca.createNode(3, "node3")
    node3.children = [node1,  null, node6]
    let node4 = lca.createNode(4, "node4")
    node4.children = [node9, null, node10]
    let root = lca.createNode(0, "root")
    root.children = [node3, node4]

test('Expect LCA to be node3', () => {
    expect(lca.findLCA(root, node1, node2)).toBe(node3);
});

root = lca.createNode(0, "node0"); 
node1 = lca.createNode(1, "node1"); 
node2 = lca.createNode(2, "node2");
root.children = [node1, node2]
test('Expect LCA to be root', () => {
    expect(lca.findLCA(root, node1, node2)).toBe(root);
});