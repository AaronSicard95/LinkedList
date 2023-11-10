/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newN=new Node(val);
    if(this.head==null){
      this.head=newN;
    }
    if(this.tail==null){
      this.tail= newN;
    }else{
      this.tail.next=newN;
      this.tail= newN;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newN=new Node(val);
    newN.next=this.head;
    this.head=newN;
    if(this.tail==null){
      this.tail=newN;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let removed=this.tail.val;
    if(this.length==1){
      this.tail=null;
      this.head=null;
      this.length--;
      return removed;
    }
    let checkval=this.head;
    for(let i =0;i<this.length-2;i++){
      checkval=checkval.next;
    }
    checkval.next=null;
    this.tail=checkval;
    this.length--;
    return removed;
  }

  /** shift(): return & remove first item. */

  shift() {
    let removed=this.head.val;
    if(this.length==1){
      this.tail=null;
      this.head=null;
      this.length--;
      return removed;
    }
    this.head=this.head.next;
    this.length--;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let checkval=this.head;
    for(let i =0;i<idx;i++){
      checkval=checkval.next;
    }
    return checkval.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let newN=new Node(val);
    if(idx==0){
      if(this.head==null){
        this.length++;
      }
      newN.next=this.head.next;
      this.head = newN;
    }
    let checkval=this.head;
    for(let i =0;i<idx-1;i++){
      checkval=checkval.next;
    }
    newN.next=checkval.next.next;
    if(checkval.next==null){
      this.length++;
    }
    checkval.next=newN;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      let newN=new Node(val);
      if(idx==0){
        newN.next=this.head;
        this.head = newN;
        this.length++;
        if(this.tail==null){
          this.tail=newN;
        }
        return;
      }
      if(idx>=this.length){
        this.tail.next=newN;
        this.tail=newN;
        this.length++;
        if(this.head==null){
          this.head==newN;
        }
        return;
      }
      let checkval=this.head;
      for(let i =0;i<idx-1;i++){
        checkval=checkval.next;
      }
      newN.next=checkval.next;
      checkval.next=newN;
      this.length++;
    }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let removed = null;
    if(idx==0&&this.length>0){
      if(this.length==1){
        this.tail=null;
        removed=this.head.val;
        this.head=null;
        this.length--;
        return removed;
      }
      removed = this.head.val;
      this.head=this.head.next;
      this.length--;
      return removed;
    }
    let checkval=this.head;
    for(let i =0;i<idx-1;i++){
      checkval=checkval.next;
    }
    if(checkval==null){
      return Error("Invalid index");
    }
    removed=checkval.next.val;
    checkval.next=checkval.next.next;
    this.tail=checkval;
    this.length--;
    return removed;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total=0;
    let count=0
    for(let checkval = this.head;checkval!=null;checkval=checkval.next){
      total=checkval.val+total;
      count++;
    }
    if(count==0)return 0;
    return total/count;
  }
}

module.exports = LinkedList;
