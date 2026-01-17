// basic creation of objects in JS
const circle = {
    radius:1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("draw circle");
    }
};

circle.draw();

// factory function in JS

function createCircle(radius){ 
    return {
        radius,
        draw: function(){
            console.log("draw");
        }
    };
}

const create = createCircle(1);
create.draw();

// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const another = new Circle(1);

// constructor property

// Every object has a constructor property [constructor function basically] 

// Functions are Objects
// In JS, functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

Circle.apply({},1)
Circle.call({},[1,2,3,])
const another = new Circle(1);

// primitives
// primitives are copied or mapped by 'value'

let x = {value:10};
let y = x;

x.value = 20;

let obj = {value:10};
function increase(){
    obj.value++;
}

increase(obj)
console.log(obj)

objects
// objects are mapped or copied by their references
let x = 10;
let y = x;

let x = 20;

// Adding and removing properties inside an object (function)

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const another = new Circle(0);
another['location'] = {x:1}

// deleting a property
delete another['location'];

// Enumerating properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const circle = new Circle(10);

for (let key in circle){
    // display only properties using `typeof`
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// display properties & methods using `Object` keyword

const hi = Object.keys(circle);
console.log(hi)

// to check the existence of a property in a function

if ('radius' in circle){
    console.log("circle has radius");
}


// Abstraction
