//JavaScript Function used for this Code Review
var findReplace = function(str, findWord, replaceWord){

    //The method replace takes a word the user inputs and replaces it with the selected word
    var newString = str.replace(findWord, replaceWord);

    //Returns the new string with the new word inputted into the list.
    return newString;
}

//JQuery used in order to have the page run
$(document).ready(function() {
    $("form#findReplace").submit(function(event){
        var str = ($("input#str").val());
        var findWord = ($("input#findWord").val());
        var replaceWord = ($("input#replaceWord").val());

        var result = findReplace(str, findWord, replaceWord);

//Results displayed are the original sentence and the new sentence
        $(".original").text(str);
        $(".answer").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
