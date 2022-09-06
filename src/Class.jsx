// export class Node {
//   constructor(data) {
//     this.data = data;
//     this.previose = null;
//     this.next = null;
//   }
//   setpreviose(node) {
//     this.previose = node;
//   }
//   setnext(node) {
//     this.next = node;
//   }
// }
// export default class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   addToHead(value) {
//     let tempNode = new Node();
//     if (!this.head) {
//       this.head = tempNode;
//       this.tail = tempNode;
//     } else {
//       this.head.setpreviose(tempNode);
//       tempNode.setnext(this.head);
//       this.head = tempNode;
//     }
//   }
//   addToTail() {
//     let tempNode = new Node();
//     if (!this.tail) {
//       this.head = tempNode;
//       this.tail = tempNode;
//     } else {
//       this.tail.setnext(tempNode);
//       tempNode.setpreviose(this.tail)
//         this.tail=tempNode
//     }
//   }
// }