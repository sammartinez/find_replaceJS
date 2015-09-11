
var findReplace = function(str, wordFind, wordReplace){
    var arraySplit = str.split(" ");

    for(var i = 0; i < arraySplit.length; i++) {
        if(arraySplit[i].toLowerCase() === wordFind[i].toLowerCase()) {
            arraySplit[i] = wordReplace;
        }
    }
    return arraySplit;  

}

// $(document).ready(function() {
//     $("form#findReplace").submit(function(event){
//         var phrase = ($("input#phrase").val());
//         var result = pigLatin(phrase);
//
//         $(".answer").text(result);
//         $("#result").show();
//         event.preventDefault();
//     });
// });
