# Javascript-codespace

Javascript is scripting language consisting of 3 main parts : 

1: ECMA Script for core functionality
2: Document Object Model (DOM) interaction with elements on webpage
3: Browser Object Model (BOM)  provides browser API(Application Programming Interface) to interact with browser itself.

JavaScript Engine is a web browser component for interpreting and executing the JavaScript code.

It includes : 
Parser =>  analyzes the code 
Compiler => convert it into machine code (Low Level Language)
Interpreter => to run the complie code 

Engines: V8 for chrome , JavaScript core for Safari, SpiderMonkey for FireFox

Client-side : 
When JavaScript is used on a web page, it is executed in web browsers, serving as a client-side language.

Server-side JavaScript :
JavaScript server-side environment is Node.js. Unlike client-side JavaScript, server-side JavaScript executes on the server and allows you to access databases, file systems, etc.

History : 
In 1995, JavaScript was developed by Brendan Eich, a Netscape developer.
1st name :  Mocha 
2nd name :  LiveScript


























JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

Data Types Interview  : 
To check data type : console.log (typeOf variable-name)

There are two types Primitive (call by value) and Non - Primitive (call by reference) : based on storing and accessing the data in the memory . 

PRIMITIVE :  ( 7 types ) (Call by value) : Data is copied and showed.
1. String (Sequence of Characters)
2. Number (Integer, Float)
3. Boolean
4. Null : typeofValue = Object
5. Undefined
6. Symbol : const id  = Symbol("123")
7. BigInt  :  conat bigNumber = 2376482734n (write n at the end and it will be a big int) : typeValue = undefined

NON PRIMITVE / Reference : (call by reference) Reference is given : typeofValue is always object
1. Object : {} (key:value pairs) 
2. Array : []
3. Functions   (object Function)

STACK (primitive) copy of the variable given and HEAP (non primitive) reference given .


DOM : Document Object Model
DOCUMENT > HTML  >  HEAD > TITLE > TEXT-NODE {text-value}
                META  > ATTRIBUTE 
         BODY > DIV [attribute] > H1, H2, P,  BUTTON ....[textnode, attribute]

innerHTML : returns whole HTML element 
innerTEXT : shows only client side visible text 
textContent : shows all the text , hidden one also 