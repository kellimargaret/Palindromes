//Javascript

var palCheck = function(word) {

    var reverseWord = word.toLowerCase().split('').reverse().join('');

    if (reverseWord === word.toLowerCase()) {
        return "This is a palindrome, pal!"
    } else {
        return "This is not a palindrome, buddy!"
    }
};
