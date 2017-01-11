/**
 * Created by yopat on 2017-01-11.
 */

var fs = require('fs');

// get drinks
var drinks = fs.readFile('drinks.txt' , 'utf8' , function(err, drinks){

    if (err){

        console.log(err);
        return;
    }
    // if we get drinks
    console.log(drinks);

    //drinks heading
    console.log('\nFood:');
});

//drinks heading
console.log('Drinks:');

//get food
var food = fs.readFile('food.txt' , 'utf8' , function(err, food){
    // if we get drinks
    console.log(food);

});

