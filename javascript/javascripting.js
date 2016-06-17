/////////////////////   BASIC  /////////////////////////////////

//1.
console.log('hello');

// 2.
var example = 'some string';
console.log(example);

//3.
var someString = 'this is a string';
console.log(someString);

// 4.
var someString = 'example string';
console.log(someString.length);

//5
var pizza ='pizza is alright';
pizza = pizza.replace('alright','wonderful');
console.log(pizza);

//6
var example = 123456789;
console.log(example);

//7
var roundUp = 1.5;
roundUp = Math.round(roundUp);
console.log(roundUp);

//8
var n = 128;
console.log(n.toString());

//9
var fruit = 'orange';
if (fruit.length > 5 ){
	console.log('The fruit name has more than five characters.');
}else{
	console.log('The fruit name has five characters or less.');
}

//10
var total = 0;
var limit = 10;
for (var i = 0 ; i<limit ; i++){
	total += i;
}
console.log(total);

/////////////////////   ARRAY   /////////////////////////////////

//11
var pizzaToppings = ['tomato sauce','cheese','pepperoni'];
console.log(pizzaToppings);

//12
var numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function(number){
	return (number%2==0);
})
console.log(filtered);

//13
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);

//14
var pets=  ['cat', 'dog', 'rat'];  
for (var i =0; i<pets.length ; i++){
	pets[i] = pets[i] + 's';
}
console.log(pets);

/////////////////////   Object   /////////////////////////////////

//15
var pizza = {
	toppings: ['cheese', 'sauce', 'pepperoni'],
	crust: 'deep dish',
	serves:2
};
console.log(pizza);

//16
var food = {
	types: 'only pizza'
};
console.log(food['types']);

/////////////////////  Function  /////////////////////////////////

//17
function eat(food){
	return food + ' tasted really good.';
}
console.log(eat('bananas'));

18
function math(one, two, three){
	return one + two * three;
}
console.log(math(53,61,67));

//19
var a = 1, b = 2, c = 3;    
(function firstFunction(){  
    var b = 5, c = 6;  

    (function secondFunction(){  
        var b = 8;  
   		console.log("a: "+a+", b: "+b+", c: "+c);  
        (function thirdFunction(){  
            var a = 7, c = 9;  

            (function fourthFunction(){  
                var a = 1, c = 8;  

            })();  
        })();  
    })();  
})();  
