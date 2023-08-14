function BinarySearchTree(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.insert = function(value){

    let subTree = new BinarySearchTree(value);

    // ES MENOR, SE VA A LA IZQUIERDA
    if(value < this.value) {
        if(this.left === null){
        this.left = subTree
        } else {
            this.left.insert(value);
        }
    }

    // ES MAYOR, SE VA A LA DERECHA

    if(value >= this.value){
        if(this.right === null){
            this.right = subTree
        } else {
            this.right.insert(value);
        }
    }
};