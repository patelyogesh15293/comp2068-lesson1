/**
 * Created by yopat on 2017-01-11.
 */

// reference the filesystem module

var fs = require('fs');

// drinks
console.log('Drinks:');

var drinks = fs.readFileSync('drinks.txt' , 'utf8');
console.log(drinks);

// food
console.log('Food:');

var food = fs.readFileSync('food.txt' , 'utf8');
console.log(food);