
describe('findReplace', function() {
    it("will replace a word within a string to a word user inputs", function(){
        expect(findReplace("Hello world", "world", "universe")).to.equal("Hello universe");
    });

    it("will replace multiple words within the string that matches the words the user wants to change", function() {
        expect(findReplace("Give me all the tacos", "Give me", "Feed me")).to.equal("Feed me all the tacos");
    });
    
});
