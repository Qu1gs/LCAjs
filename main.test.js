const lca = require('./main.js');

let root = lca.createNode(1);
root.left = lca.createNode(2);
root.right = lca.createNode(3); 
root.left.left = lca.createNode(4);
root.left.right = lca.createNode(5); 
root.right.left = lca.createNode(6); 
root.right.right = lca.createNode(7);

test('Expect LCA of 4,5 to be 2', () => {
    expect(lca.findLCA(root, 4, 5).data).toBe(2);
});

test('Expect LCA of 4,6 to be 1', () => {
    expect(lca.findLCA(root, 4, 6).data).toBe(1);
});

test('Expect LCA of 3,4 to be 1', () => {
    expect(lca.findLCA(root, 3, 4).data).toBe(1);
});

test('Expect LCA of 2,4 to be 2', () => {
    expect(lca.findLCA(root, 2, 4).data).toBe(2);
});