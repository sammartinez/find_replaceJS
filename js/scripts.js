
var findReplace = function(str, findWord, replaceWord){

    var newString = str.replace(findWord, replaceWord);
    return newString;
    
    // //Splits up the string the user inputs
    // var arraySplit = str.split(" ");
    //
    // /*Within the for loop, it'll go through each string split to check and see if it equals the findWord the
    //  user wants to replace. Then if it does, it will take the replaceWord and replace it*/
    // for(var i = 0; i < arraySplit.length; i++) {
    //
    //     /*In case a user inputs a letter with a capitial letter it
    //     convert it back to all lowercase in order to have the test run */
    //     if(arraySplit[i].toLowerCase() === findWord[i].toLowerCase()) {
    //
    //         arraySplit[i] = replaceWord;
    //     }
    // }
    // return arraySplit;


}

// $(document).ready(function() {
//     $("form#findReplace").submit(function(event){
//         var phrase = ($("input#phrase").val());
//         var result = findReplace(phrase);
//
//         $(".answer").text(result);
//         $("#result").show();
//         event.preventDefault();
//     });
// });
