
var findReplace = function(input, replace){
    var input = 'apples';
    var str = 'I have a lot of apples to share with the whole class.';
    var replace = 'oranges';

    var newstr = str.replace(input, replace);

}

$(document).ready(function() {
    $("form#findReplace").submit(function(event){
        var phrase = ($("input#phrase").val());
        var result = pigLatin(phrase);

        $(".answer").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
