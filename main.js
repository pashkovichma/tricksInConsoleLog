console.log((true + false) > 1); //false
console.log((![] + [])[+!+[] + 2] + 
            (![] + [])[+[] + 1] + 
            (![] + [])[+!+[] + 1] + 
            (![] + [])[+[] + 4]); //"sale"
console.log("$" + 5 + 5); //"$55"
console.log(5 + 5 + "$"); // "10$"