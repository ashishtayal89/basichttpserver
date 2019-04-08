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

class Parent{
}
class Child extends Parent{
}
var childObj = new Child();


// Async Programming

// 1. Using Callbacks

function asyncFunc(){
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{

            },1000)
        },1000)
    },1000)
}

// 2. Promise

var myPromise = new Promise((resolve)=>setTimeout(()=>resolve,1000))
                    .then(()=>setTimeout(()=>{},1000))
                    .then(()=>setTimeout(()=>{},1000));
