class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((num1, num2) => num1 - num2);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] == undefined){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }
  
  max() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min(...this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
