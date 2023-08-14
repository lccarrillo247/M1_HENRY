function Nodo (data) {
this.data = data;
this.next = null;
}

function LinkedList () {
    this._length = 0;
    this.head = null;
}

let miLista = new LinkedList();

console.log(miLista); // IMPRIME LISTA VACÍA

// INSERTAR NODOS

LinkedList.prototype.insert = function (data) {
    let node = new Nodo(data)

    if(!this.head){
        this.head = node;
    }
}


miLista.insert('Bartolomiau');

console.log(miLista);