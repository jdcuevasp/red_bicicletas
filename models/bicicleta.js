var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}
// Aqui va guardando las bicicletas, para evitar hacer por el momento base de datos:
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

//Metodo para encontrar bici por Id
Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No Existe una bicicleta con id ${aBiciId}`);
}

//Metodo para remover una bici
Bicicleta.removeById = function(aBiciId){
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var a = new Bicicleta(1, 'rojo', 'urbana', [3.413934, -76.522559] );
var b = new Bicicleta(2, 'blanca', 'urbana', [3.433934, -76.542559] );

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;