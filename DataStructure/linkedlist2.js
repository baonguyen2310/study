//Linked list kep

class Node {
    constructor (val){
       this.data = val;
       this.next = null;
       this.prev = null; 
    }
}

//create a linked list
var head = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var tail = new Node(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = tail;
tail.prev = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = head;

//print list
function printList(head){
    var currentNode = head;
    var html ="";
    while (currentNode != null) {
       // document.write(currentNode.data + ' ');
        html += currentNode.data + ', ';
        currentNode = currentNode.next;
    }
    document.getElementById('root').innerHTML = html;
    //document.write('-------');
}

printList(head);

//push
function pushHead(newData){
    var newNode = new Node(newData);
    if (head != null) {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
    }
}

pushHead('ehhe');
printList(head);

function pushTail(newData) {
    var newNode = new Node(newData);
    if (head != null) {
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
    }
}

pushTail('ohoh');
printList(head);

//inserting a node
function insertAfter(prevNode, newData) {
    var newNode = new Node(newData);
    if (prevNode != null && head != null){
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
    }
}
insertAfter(node3, 500);
printList(head);

//delete key
function deleteNode(key){
    var currentNode = head;
    while (currentNode != null && currentNode.data != key) {
        currentNode = currentNode.next;
    }
    if (currentNode != null && currentNode.data === key) {
        if (currentNode != head) {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;            
        } else if (currentNode === head) {
            head = currentNode.next;
        } else if (currentNode === tail) {
            tail = currentNode.prev;
        }
        return;
    }
    if (currentNode === null) {
        return;
    }
}

deleteNode(500);
printList(head);

//sort
//find
