/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"; //we just need to put here the bit of the dom that we want to test
});

//create now the actual test!
describe('DOM tests', () => {
    test('expects p content to change', () => {
        buttonClick(); //call the function
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked'); //we expect that par to equal 'You CLicked'
    })
});