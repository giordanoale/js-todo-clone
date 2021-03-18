//Con questa funzione si elimina l'elemento
$(".to-do").on("click", ".delete", function(){
    $(this).parent().remove();
});