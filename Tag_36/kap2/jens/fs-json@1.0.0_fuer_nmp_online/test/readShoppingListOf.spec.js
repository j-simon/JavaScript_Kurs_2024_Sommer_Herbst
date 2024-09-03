const expect = require('must')
const {readShoppingListOf} = require("../../fs-json@1.0.0/fileSystem.js")


describe('readShoppingListOf', () => {
    it('should read list', () => {
        console.log(readShoppingListOf(123,"./test/database.json"))
        expect(readShoppingListOf(123,"./test/database.json")).to.be.equal('Käse')
    })
})

