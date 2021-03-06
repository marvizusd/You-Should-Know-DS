// import { Node, BinaryTree } from './binaryTreeImplementation';
class Node{
	constructor(data, left = null, right = null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	getData(){
		return this.data
	}
	getLeft(){
		return this.left;
	}
	getRight(){
		return this.right;
	}
}

class BinaryTree{
	constructor(){
		this.root = null;
	}
}

let bTree = new BinaryTree();
let node1 = new Node(7);
let node2 = new Node(4);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
bTree.root = node1;

// can be found using level order traversal
function findMaxElem(root){
    if(root == null){
        return
    }
    let temp, max = 0, queue = [];
    queue.push(root);
    console.log(queue);
    while(queue.length !== null){
        temp = queue.shift();
        if(max < temp.data){
            max = temp.data
        }
        if(temp.left !== null){
            queue.push(temp.left);
        }
        if(temp.right !== null){
            queue.push(temp.right);
        }
    }
    console.log(max);
    return max;
}
findMaxElem(bTree.root)

// Time complexity O(n)

// TODO