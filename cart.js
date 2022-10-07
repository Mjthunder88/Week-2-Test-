///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let result = (acc, cur) => {
    return acc += cur.price
}

const summedPrice = cart.reduce(result, 0)

// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
      return (cartTotal + (tax * 1)) - couponValue
}
// console.log(calcFinalPrice(20, 5, .03))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    -It would need to know the demographic of the individuals (Age). Are the mostly young adults or older individuals? So that they can market their resturant towards those individuals. Datatype (number) the age of the individual
    - Top picks: what type of food most of their customers enjoy. Then they can create specials around that type of food to bring more individuals in. Datatype (string) because it will be the type of food.
    - When time they come in. You can make lunch specials or night speicals to customers that always come in at a certain time. Datatype(string) I would just keep it general like morning, lunchtime, evening just so that you don't have to know the exact time someone comes in. Because it will always be differn't. 
    - family: You would need to know if your resturant is bringing in more familys or just young adults. It kind of goes with age but this will help you guage what kind of meals you need on the menu or what food you should serve. If it has a kids menu or if its very limited because the target crowd is for adults. Datatype (string) either yes or no if they are bringing in their familes or not. 


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    age: 25,
    topPicks: 'pasta',
    when: 'lunch time',
    family: 'no',
};