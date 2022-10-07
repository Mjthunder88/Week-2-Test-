//  This is the walkthrough that jared did after the test.
// for me to study and make sure I understand the material

// for Array Methods if it ever says its not a function. That means that the variable before it is not passing in an array. So make sure you're using the correct methods for type of data you want to pass through it. 

// problem 2 in home.js

// let canWeDeliverTwo = zipCode => {
//     for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
//         if (deliveryAreaZipCodes[i] === zipCode) {
//             return `You're in our delivery zone!`
//         } else {
//             return `Sorry, we can't deliver to that address.`
//         }
//     };
// };

// The second return needs to be outside the for loop so that it runs through the entire array frist before returning false. 


//problem 3 in home.js

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

//syntax for .replace = str.replace(what we want to repalce, new str)
// but .replace returns the new change to the str. So you have to reassign it back to the array itself to see the change.

deals[0].title = deals[0].title.replace('15', '10');
// console.log(deals)


//problem 3 pt 2
//.trim at the end works because its triming a string and sending it back to the object. 
deals[1].desc = deals[1].desc.replace('March','April').trim();
// console.log(deals[1])



// Menu.js
//problem 5
let foodArr = [
    {
    name: 'Pep',
    price: 12,
    category: 'Entree',
    popularity: 5,
    rating: 5,
    tags: ['Top Pick', 'glueten-free'],
    },
    {
    name: 'Margarita',
    price: 9,
    category: 'Entree',
    popularity: 4,
    rating: 5,
    tags: ['Top Pick', 'glueten-free'],
    },
    {
    name: 'Meat Pizza',
    price: 15,
    category: 'Entree',
    popularity: 5,
    rating: 3,
    tags: ['Protien', 'glueten-free'],
    },
    {
    name: 'Supreme',
    price: 14,
    category: 'Entree',
    popularity: 5,
    rating: 4,
    tags: ['Health-ish', 'glueten-free'],
    },
    {
    name: 'Cheese Sticks',
    price: 8,
    category: 'Appetizer',
    popularity: 5,
    rating: 2,
    tags: ['Top Pick', 'glueten-free'],
    },
]

function filterByProperty (property, number, type) {
    let filteredArray = foodArr.filter((foodObj) => {
        if (type === 'above') {
            return foodObj[property] > number;
        } else if (type === 'below') {
            return foodObj[property] < number;
        };
    })
    return filteredArray
}

console.log(filterByProperty('rating', 6, 'above'))

// you have to use square brackets to access the element because if you use .notation for the property it will look in the object for a key thats name is property. Not the key that you will actually pass in. Ex: name, or price etc. 
// study this one to really understand it 




//cart.js
// problem 2 

function calcFinalPrice (cartTotal, couponValue, tax) {
     return cartTotal + cartTotal * tax - couponValue
}

// console.log(calcFinalPrice(10, 2, 0.05))

// you * the cartotal by the tax then you add the tax to the cart total to get the final price before the coupon is applied. 

//problem 3
// I overthought this problem. I could have said I need the customers name and address to deliver the food to them. and even phone number and email address as the key properties. 


//orders.js 



//employees.js

// problem 1 pt 3 
let empTwo = {...empOne, name: 'Nick'}
// you have to use a comma to seperate so that its not spreading anything but the variable empOne. then you can change the name all in one line. 



