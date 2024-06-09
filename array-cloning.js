const array = [1, 2, 3];

const clonedArray = [...array];

array.push(4);

console.log(clonedArray.join(','));
console.log('should be false:', clonedArray === array);
console.log('should be true:', clonedArray[0] === array[0]);
console.log('should be true:', clonedArray[1] === array[1]);
console.log('should be true:', clonedArray[2] === array[2]);


const nestedObj = { Z: 1 };
const objA = { nested: nestedObj };
const objB = {};
const arrayOfObjects = [objA, objB];

function logNestedValue (arr) {
    console.log('nested value Z =', arr[0]['nested']['Z']);
}

function addToNestedValue(arr, num) {
    arr[0]['nested']['Z'] += num
}

logNestedValue(arrayOfObjects) // Z = 1

addToNestedValue(arrayOfObjects, 4) // Z += 4

logNestedValue(arrayOfObjects) // Z = 5

const clonedArrayOfObjects = [...arrayOfObjects];

logNestedValue(clonedArrayOfObjects) // Z = 5

clonedArrayOfObjects.push(2024); // all good, arrayOfObjects not mutated at all

clonedArrayOfObjects[0]['anotherNested'] = 'blah'

console.log(arrayOfObjects);