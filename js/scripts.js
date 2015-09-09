//Javascript

var palCheck = function(word) {
    //take input word, set characters to lower case, split word into letters,
    //reverse letters, join them back together in a string.
    var reverseWord = word.toLowerCase().split('').reverse().join('');

    //if original word and reverseWord are equal
    if (reverseWord === word.toLowerCase()) {
        return "This is a palindrome, pal!"
    //if original word and reverseWord are not equal
    } else {
        return "This is not a palindrome, buddy!"
    }
};

//jQuery
$(document).ready(function() {
    $("form#pal").submit(function(event) {
        //takes input to use as word variable
        var word = $("input#word").val();

        //allows result to be displayed using jQuery
        var result = palCheck(word);
        $(".result-message").text(result);

        //display '#result' div on form submit
        $("#result").show();
        event.preventDefault();
    });
});
