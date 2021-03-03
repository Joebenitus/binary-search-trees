import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {

    let bst = new BST();
    let rootNode = new BSTNode(36);

    const perfectBst = new BST();

    beforeEach(() => {
      bst.insertNode(rootNode);

      perfectBst.insertNode(new BSTNode(4));
      perfectBst.insertNode(new BSTNode(2));
      perfectBst.insertNode(new BSTNode(6));
      perfectBst.insertNode(new BSTNode(1));
      perfectBst.insertNode(new BSTNode(3));
      perfectBst.insertNode(new BSTNode(5));
      perfectBst.insertNode(new BSTNode(7)); 
    });

  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test('it should create a new root node', () => {
    expect(bst.root).toEqual(rootNode);
  });

  test('it should add a child node to the left of the root node', () => {
    let newNode = new BSTNode(22);
    bst.insertNode(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('it should add a child node to the right of the root node', () => {
    let newNode = new BSTNode(48);
    bst.insertNode(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test('it should add a child node to the left of a child node', () => {
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(11);
    bst.insertNode(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test('it should add a child node to the right of a child node', () => {
    let node2 = new BSTNode(48);
    bst.insertNode(node2);
    let node3 = new BSTNode(73);
    bst.insertNode(node3);
    expect(rootNode.right.right.data).toEqual(73);
  });

  test('it should add a child node to the right or left of a node', () => {
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(33);
    bst.insertNode(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });

  test('it should not add duplicate nodes', () => {
    let bst2 = new BST();
    bst2.insertNode(new BSTNode(36));
    let node2 = new BSTNode(36);
    expect(bst2.insertNode(node2)).toEqual({"root": {"data": 36, "left": null, "right": null}});
  });

  test('it should return true if the root node equals 4', () => {
    expect(perfectBst.search(4)).toEqual(true);
  });

  test('it should return false if the root node does not equal 31', () => {
    expect(perfectBst.search(31)).toEqual(false);
  });

  test('it should return true if the first child node on the left equals 2', () => {
    expect(perfectBst.search(2)).toEqual(true);
  });

  test('it should return false if the value 0 is not in the tree', () => {
    expect(perfectBst.search(0)).toEqual(false);
  });

  test('it should return true if the tree includes 7', () => {
    expect(perfectBst.search(7)).toEqual(true);
  });

  test('it should return true if the tree includes 5', () => {
    expect(perfectBst.search(5)).toEqual(true);
  });
});