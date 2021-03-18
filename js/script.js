//Definisco un array di elementi
var listaSpesa = [
    "Riviste ose",
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
    var template = $(".template li").clone();

    template.prepend(listaSpesa[i]);

    $(".to-do").append(template);
}