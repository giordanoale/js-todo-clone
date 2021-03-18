// Questa funzione aggiunge elementi all'interno della pagina
function addElement (element) {
    var template = $(".template li").clone();

    template.prepend(element);

    return $(".to-do").append(template);
}

//Definisco un array di elementi
var listaSpesa = [
    "Riviste osè",
    "Supposte di glicerina",
    "Bottiglia di whisky",
    "Un paio di confezioni salvaslip",
    "Fuochi d'artificio illegali",
    "Clistere usa e getta",
]

console.log(listaSpesa);

//Con questa funzione si elimina l'elemento
$(".to-do").on("click", ".delete", function(){
    $(this).parent().remove();
});

// Questo ciclo aggiunge gli elementi dell'array all'interno della lista 
for (var i = 0; i < listaSpesa.length; i++) {
    addElement(listaSpesa[i]);
}

// Alla pressione del tasto Enter viene aggiunto l'elemento alla lista
$("#add-element").keydown(function(evento) {
    
    if (evento.which == 13) {

        var elemento = $(this).val();
        
        if (elemento != "") {
            addElement(elemento);
            $(this).val("");
        }
    }
});