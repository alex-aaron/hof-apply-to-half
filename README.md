### Higher Order Functions Checkpoint

**Instructions**: create a function called `applyToHalf` that takes in the following parameters - an array of objects, a callback function, a string representing a property in one of the objects, and a string representing a value to apply to that property. This function should iterate through the input aray of objects and invoke the callback function on *every other* object in the array starting with the zero index item. The function should return the input array. 

**Example:**
```
const customers = [
  {
    name: 'Stephanie Cox',
    discount: null
  },
  {
    name: 'Alex Aaron',
    discount: null
  },
  {
    name: 'Kyle Aaron',
    discount: null
  },
  {
    name: 'Bethany Jones',
    discount: null
  }
];

var output = applyToHalf(customers, function(obj, prop, value){
  obj[prop] = value;
}, 'discount', true);

console.log(output); =>

/*
[
  { name: 'Stephanie Cox', discount: true },
  { name: 'Alex Aaron', discount: null },
  { name: 'Kyle Aaron', discount: true },
  { name: 'Bethany Jones', discount: null }
]
*/
