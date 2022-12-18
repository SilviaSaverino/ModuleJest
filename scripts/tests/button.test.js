/**
 * @jest-environment jsdom
 */

/* COMMENTED OUT TO RUN A TEST ON THE ENTIRE HTML - SEE LINE 22!
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
*/


/*IF YOU WANT TO TEST MORE THAN AN HTML EL; FOLLOW THE BELOW*/

const buttonClick = require("../button");

beforeEach(() => {
    //fs node->a file system handling module built into Node that allows us to open read and write files
    let fs = require('fs'); 

    // Now here we're going to open the index.html file using the utf-8 character set and store the contents in our variable. 
    let fileContents = fs.readFileSync('index.html', 'utf-8'); 

    //All we need to do now is attach this to the  DOM. And here's the recommended way of doing it.
    //First, we open the document, we write  our file contents and then we close it.
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM tests', () => {
    test('expects p content to change', () => {
        buttonClick(); //call the function
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked'); //we expect that par to equal 'You CLicked'
    });
    test('h1 should exist', () => {
        /* We're then going to pass in our expect,  and in our expect we're going to get  
        document.getElementsByTagName of h1 and  we're going to get the length of that. 
        And we're going to expect that length to be 1. 

        This test gets all of the h1 tags and stores them in a special kind of array. If the h1 exists,  
        then the length of the array will be 1. If two h1  tags existed the length would be two, and so on.*/
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});