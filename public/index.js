// Create object to iterator

class ObjectIterator{
    constructor(order){
        this.order = order;
    }
    [Symbol.iterator](){
        let pointer = 0;
        return {
            next : () => {
                return {
                    value : this.order[pointer],
                    done : pointer++ === this.order.length
                }
            }
        }
    }
}

var order = new ObjectIterator([2,3,5,1,6]);
for(let value of order){
    console.log(value);
}


// Inheritance

// 1. functional

function Parent(){
}

function Child(){
}

Child.prototype = Object.create(Parent.prototype,{});
Child.prototype.constructor = Child;

var childObj = new Child();
console.log(childObj.constructor);

// 2. Object

var Parent = {
    init : function (lastname) {
        this.lastname = lastname;
        return this;
    }
}

var Child = Object.create(Parent);

Child = {
    init : function (firstname,lastname) {
        Parent.init.call(this,lastname);
        this.firstname = firstname;
        return this;
    }
}

var childObj = Object.create(Child).init("Ashish","Tayal");
console.log(childObj);
console.log(childObj.hasOwnProperty("lastname"));

// 3. Class

class Parent1{
}
class Child1 extends Parent1{
}
var childObj = new Child1();


// Async Programming

// 1. Using Callbacks

(function asyncFunc(){
    setTimeout(()=>{
        console.log(0);
        let second = 1;
        setTimeout(()=>{
            console.log(second);
            let third = 2;
            setTimeout(()=>{
                console.log(third);
            },1000)
        },1000)
    },1000)
})()

// 2. Promise

var myPromise = new Promise((resolve)=>setTimeout(()=>{console.log(0);resolve(1)},1000))
                    .then((value)=>new Promise((resolve)=>setTimeout(()=>{console.log(value);resolve(2)},1000)))
                    .then((value)=>setTimeout(()=>{console.log(value)},1000));

// 3. Async/Await

/*The AsyncFunction constructor creates a new async function object. In JavaScript every asynchronous function is actually an AsyncFunction object. Object.getPrototypeOf(async function(){}).constructor */

async function asyncDemo(){
    let result = await new Promise((resolve)=>setTimeout(()=>resolve(0),1000));
    console.log(result);
    result = await new Promise((resolve)=>setTimeout(()=>resolve(1),1000));
    console.log(result);
    result = await new Promise((resolve)=>setTimeout(()=>resolve(2),1000));
    return result;
}
var asyncPromise = asyncDemo();
asyncPromise.then((value)=>console.log(value));

console.log(Object.getPrototypeOf(async function(){}).constructor)