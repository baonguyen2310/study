class Node {
    constructor (val) {
        this.data = val;
        this.next = null;
    }
}

//create a linkedlist
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
head.next = second;
second.next = third;

//print list
function printList(head) {
    var n = head;
    while (n != null){
        document.write(n.data + ' ');
        n = n.next;
    }
    document.write('---------');
}

printList(head);

//inserting a node
function pushHead(newData){
    var newNode = new Node(newData);
    newNode.next = head;
    head = newNode;
}

pushHead(23);
printList(head);

function insertAfter(prevNode, newData){
    if (prevNode == null) {
        console.log('prevNode is null');
    }
    var newNode = new Node(newData);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
}

insertAfter(third, 10);
printList(head);

//deleting a node
function deleteNode(key){
    var currentNode = head;
    var prevNode = null;
    while (currentNode != null && currentNode.data != key) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    if (currentNode != null && currentNode.data == key) {
        if (currentNode === head) {
            head = currentNode.next;
        } else {
            prevNode.next = currentNode.next;
        }
        return;  
    }
    if(currentNode == null) {
        return;
    }
}

deleteNode(23);
printList(head);

//sort
//find