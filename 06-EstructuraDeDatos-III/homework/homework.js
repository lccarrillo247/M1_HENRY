'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
};

BinarySearchTree.prototype.size = function (){

   if (this.right && this.left) return 1 + this.right.size() + this.left.size();
   if (!this.right && this.left) return 1 + this.left.size();
   if (this.right && !this.left) return 1 + this.right.size();
   if (!this.right && !this.left) return 1;
};

BinarySearchTree.prototype.insert = function (value){
   if(value < this.value) {
      if(this.left){
         this.left.insert(value)
      } else {
         this.left = new BinarySearchTree(value)
      }
   } else {
      if(this.right) {
         this.right.insert(value)
      } else {
         this.right = new BinarySearchTree(value)
      }
   }
};

BinarySearchTree.prototype.contains = function (value){
   if (this.value === value) return true

   if (value > this.value) {
      if (!this.right) {
         return false
      } else {
         return this.right.contains(value)
      }
   }

   if (value < this.value) {
      if(!this.left) {
         return false
      } else {
         return this.left.contains(value)
      }
   }

};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   switch (order) {
      case 'post-order':
         if (this.left) this.left.depthFirstForEach(cb, order);
         if (this.right) this.right.depthFirstForEach(cb, order);
         cb(this.value);
         break;
         case 'pre-order':
            cb(this.value);
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
            default:
               if (this.left) this.left.depthFirstForEach(cb, order);
               cb(this.value);
               if (this.right) this.right.depthFirstForEach(cb, order);
   }
   
   // let array = [];

   // switch (order) {
   //    case 'post-order':
   //       if(this.left.left) {
   //          return this.left.depthFirstForEach(order)
   //       } else {
   //          array.push(this.left.value)
   //          if (this.right) array.push(this.right.value)
   //          array.push(this.value.value)            
   //       }
   //       break;
   //       case 'pre-order':
   //          if(this.left.left) {
   //             return this.left.depthFirstForEach(order)
   //          } else {
   //             array.push(this.value.value)
   //             array.push(this.left.value)
   //             if (this.right) array.push(this.right.value)
   //          }
   //          break;
   //          default:
   //             if(this.left.left) {
   //                return this.left.depthFirstForEach(order)
   //             } else {
   //                array.push(this.left.value)
   //                array.push(this.value.value)
   //                if (this.right) array.push(this.right.value)                  
   //             }
   // }
   // return array
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, almacen = []){

   cb(this.value)
if (this.left) {
   almacen.push(this.left)
}

if(this.right){
   almacen.push(this.right)
}

if(almacen.length > 0){
   almacen.shift().breadthFirstForEach(cb, almacen);
}

};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
