//Specs and tests

describe('palCheck', function() {
    it("checks whether a word is spelt the same backwards as forward.", function() {
        expect(palCheck("Racecar")).to.equal("This is a palindrome, pal!");
    });
});

describe('palCheck', function() {
    it("checks that a word is not a palindrom & returns false", function() {
        expect(palCheck("Bubble")).to.equal("This is not a palindrome, buddy!");
    });
});
