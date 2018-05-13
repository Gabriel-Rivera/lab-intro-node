var SortedList = function() {
    this.items=[];
    this.length=this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length= this.items.length;
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
   return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
    return Math.min(...this.items);
}
SortedList.prototype.average = function() {
    let promedio=0;
    this.items.forEach((item)=>{
        promedio+=item;
    });
    return promedio/this.items.length;
}
SortedList.prototype.sum     = function() {
    var pro=0;
    if(this.items.length>0){
        this.items.forEach(function(item){
            pro=pro+item;    
      })
    }
    return pro;
}

module.exports = SortedList;
