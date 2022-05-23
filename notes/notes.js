// Strict Typing
// Extra Features: generics, interfaces, tuples
// Must be compiled into vanilla JS
// Typescript compiler: npm i -g typescript
// TS compiler execute: tsc <source .ts filename> <target .ts filename> ... if the target has different name/non-existant
// ex: tsc sandbox.ts sandboxER.js  vs  tsc sandbox.ts ... which will write to/create "sandbox.js"
// TS auto-compile: tsc <ts source file name> -w (for 'watch')
// type number = integer & float
// TS will infer types for both variables and their properties upon declaration;
// > ex: let mixed = ['Paul', 2, 'Ringo', 4] will accept both numbers and strings going-forward, but not other types (booleans etc)
// > Here, 'mixed' is given both the type of 'array' and property types of sting and number (therefore "an array of strings & numbers *only*").
// Objects: Moreover, for {}, once object properties are declared, you cannot add new ones ...
// > let user = {name: 'James', age: 1000} cannot, then, receive a new property of 'favXMan'
// Q: does this extend to redefining objects themselves? could user be re-defined as = {fName: .., lName: .., currentEmployer: .., currentSalary: ..} ? Video #4, 7mins in seems to say 'no' ...

// *** Initializing without Declaring: ***
// > if you want to initialize, you state the type explicitly (and declare it later):
// > let user: object
// Intitializing *with* declaring:
// let user: object = {}
// Now, we can add / push new k:v's into the object (if we didn't declare, we'd need to do that *before* pushing: let user: object; user = {}; user[fName] = 'James;)
// Note: object is a broader type than {} in JS, bc arrays are considered objects (Q: does 'object' in TS = prototype?)

// "Union Types"
// let userId: string | number; is initialized with *multiple* types
// let mixed: (string | number)[] = []; is declared with *multiple* types (Note that parentheses were needed to initialize the array)

// "Any"
// let container: any; will now take anything

//
// ? Function-specific ?
//
// *Optional* properties:
// > If you want to create optional properties of a function, object etc, use '?'
// > Ex: const add = (a: number, b: number, c?:number) => {return a + b}
// Here, without the '?', you'd be required to input a third number; with it, you are only required to supply 'a' and 'b'

// *Default Values* for properties:
// > If you want 'jobRole' to default to 'user' (unless they're later defined as a 'manager', 'tempWorker' etc),
// > Ex: const add = (a: number, b: number, c:number = 10) => {return a + b}
// Here, c will default to 10, but if you input another number, that will override the default value ...
// Q: is this only true for funcitons?

// Note: when variables store the return of a function, TS infers the type and sets that as the var's type (if the function returns a number, then the storage var is set to type: num) ... that said
// You can define your functions type, too:
// const add = (a: number, b: number, c:number = 10):number => {return a + b}
// Here, we're declaring (mostly for other humans) that this function returns a number
// You can also declare the return in this way:
// Ex: let add: (a: number, b: number) => number
// *IF* a function doesn't return anything (it console.log's something etc), it *still* returns 'void'
// void =/= undefined ... it means "lacking any kind of value"

// *Note: Best Practice: put your optional or default values at the end of your function (so they're more obvious / readable)

//
// *** Declaring Bespoke Types ***
// If, say, you're going to be using the same typ-ing repeatedly, a way to dry up your code is by declaring a bespoke type ...
// Ex: type StringOrNum = string | num; const result:StringOrNum = ....
// You can build upon these and re-use them:
// Ex: type objWithName = { name: string, userId: StringOrNum }
// and then ...
// const currentUser = (user: objWithName) { console.log(`${user.name} is currently logged in ...`);}

//
// *** ***
// Typescript doesn't have runtime access to things like the DOM, so if you declare things that could potentially differ, be null etc, it will flag them.
// Ex: const link = document.querySelector('a');
// There are two solutions:
// 1. Do a runtime check
//    > if (link) {console.log(link.href)}
// 2. Use a bang '!' to tell typescript you know for sure that what's being returned is ok
//    > const link = document.querySelector('a')!;

// Note: when selecting DOM elements, TS will only infer types for things it *knows* can't be anything else:
// const form = document.querySelector('form'); will be recognized as an HTML Form Element (because form, anchor, header tags etc can only be that)
// const form = document.querySelector('.new-item-form'); will be recognized as the more general, ambiguous "element" (because this class 'new-item-form' could be any HTML element)
// *** How to combat this?
// Use typecasting:
// const form = document.querySelector('.new-item-form') as HTMLFormElement;

//
// *** File Structuring ***
//
// Compiling to different folders: use tsc --init + 'root' (source folder/directory), 'outDir' (target directory)
// + ignoring/focusing on one or more folders: add "include": ["src"] as second property (after 'compiler options')

//
// *** Compiling for Web Clients ***
//

// Webpack allows you to both 1) consolidate your modularized (multiple file) code down into one file - which can be run on onlder browsers that don't support modularization, and 2)
