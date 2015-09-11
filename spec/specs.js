
describe('findReplace', function() {
    it("replaces a word within the string", function(){
        expect(findReplace('i like apples','apples', 'oranges')).to.be.a('array');
    });

});
