
describe('findReplace', function() {
    // it("will convert a string into a array", function(){
    //     expect(findReplace('i like apples','apples', 'oranges')).to.be.a('array');
    // });

    it("will replace a word within a string to a word you input", function(){
        expect(findReplace("Hello world", "world", "universe")).to.equal("Hello universe");
    });

});
