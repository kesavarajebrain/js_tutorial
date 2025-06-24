console.warn('Lodash');
console.warn("_.chunk")
// _.chunk(array, size)
const items = [1, 2, 3, 4, 5, 6, 7];
const chunked = _.chunk(items, 3);
console.log(chunked);

console.warn("_.compact")
// _.compact(array)
const messyArray = [0, 1,,3,2,1, false, 2, '', 3, null, undefined, NaN,'hi'];
const cleanArray = _.compact(messyArray);
console.log(cleanArray); // Output:[1,3,2,1,2,3,'hi']

console.warn("_.concat")
// _.concat(array, [values])
 const selected = ['Apple'];
 const newItems = ['Banana', 'Mango'];
 const updatedList = _.concat(selected, newItems, 'Orange');
 console.log(updatedList); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

console.warn("_.difference")
// _.difference(array, [values])
const allTags = ['React', 'Angular', 'Vue', 'Svelte','Node.js'];
const selectedTags = ['React', 'Vue'];
const unselected = _.difference(allTags, selectedTags);
console.log(unselected);
// Output: ['Angular', 'Svelte', 'Node.js']
console.warn("_.differenceBy")
// _.differenceBy(array, [values], [iteratee=_.identity])
const setA = [{ id: 1 }, { id: 2 }, { id: 3 }];
const setB = [{ id: 2 }];
const resultSet = _.differenceBy(setA, setB, 'id');
console.log(resultSet);
// Output: [ { id: 1 }, { id: 3 } ]
console.warn("_.differenceWith")
// _.differenceWith(array, [values], [comparator])
const aSet = [{ id: 1,name:'Alice' }, { id: 2,name:'Bob' }, { id: 3,name:'Charlie' },{ id: 5 ,name:'Logi' }, { id: 6 ,name:'Ravi' }];
const bSet = [{ id: 2 ,name:'Raja' },{ id: 2 ,name:'Rani' }, { id: 5 ,name:'Logi' }];
const setresult = _.differenceWith(aSet, bSet, (a, b) => a.id == b.id && a.name == b.name);
console.log(setresult);
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
//   { id: 6, name: 'Ravi' }
// ]
console.warn("_.drop")
// _.drop(array, [n=1])
const numbers = [1, 2, 3, 4, 5];
const dropped = _.drop(numbers, 2);
console.log(dropped);
// Output: [ 3, 4, 5 ]
const dataArr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }, { id: 4, name: 'David' }, { id: 5, name: 'Eve' }];
const droppedArr = _.drop(dataArr, 2);
console.log(droppedArr);
// Output: [ { id: 3, name: 'Charlie' }, { id: 4, name: 'David' }, { id: 5, name: 'Eve' } ]
console.warn("_.fill")
// _.fill(array, value, [start=0], [end=array.length])
  const arr = [1, 2, 3];
_.fill(arr, '*');
 console.log(arr);
// Output: [ '*', '*', '*' ]
const arr2 = [1, 2, 3, 4, 5];
_.fill(arr2, 0, 1, 4);
console.log(arr2);
// Output: [1, 0, 0, 0, 5] - fills elements from index 1 to 4 with 0, 4 is not included
console.warn("_.findIndex")
// _.findIndex(array, predicate, [fromIndex=0])
const users = [
                    { id: 1, name: 'Anbu' },
                    { id: 2, name: 'Babu' },
                    { id: 3, name: 'Charlie' }
                ];
const index = _.findIndex(users, user => user.name === 'Babu');
console.log(index);
// Output: 1 - Babu is at index 1 in the array
const index2 = _.findIndex(users, user => user.name === 'David');
console.log(index2);
// Output: -1 - David is not found in the array
console.warn("_.findLastIndex")
// _.findLastIndex(array, predicate, [fromIndex=array.length-1])
const usersList = [
  { id: 1, name: 'Raj' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Raj' }
];
const indexVal = _.findLastIndex(usersList, { name: 'Raj' });
console.log(indexVal);
// Output: 2
console.warn("_.flatten")
// _.flatten(array)
const nestedArray = [1, [2, 3], [4]];
const flatArray = _.flatten(nestedArray);
console.log(flatArray);
// Output: [1, 2, 3, 4]
const nestedArray1 = [1, [2, [3, 4]], 5];
const flatArray1 = _.flatten(nestedArray1);
console.log(flatArray1);
// Output: [1, 2, [3, 4], 5]
console.warn("_.flattenDeep")
// _.flattenDeep(array)
const mixArr = [1, [2, [3, [4, [5]]]]];
const resultArr = _.flattenDeep(mixArr);
console.log(resultArr);
// Output: [1, 2, 3, 4, 5]
const categories = [
   ['tech'],
    ['health', [['yoga', ['meditation']]]],
    ['sports'],
    [ ['football']],
    ['swimming'],
    ['diving']
];
const allCategories = _.flattenDeep(categories);
console.log(allCategories);
// Output:  ['tech', 'health', 'yoga', 'meditation',  'sports', 'football', 'swimming', 'diving']
console.warn("_.flattenDepth")
// _.flattenDepth(array, [depth=1])
const food = [
   ['idly', 'dosa'],['briyani', ['samosa']],
    ['sambar', [['briyani', ['samosa']]]],
    ['pasta'],['chicken'],
    ['pizza', [['burger', ['fries']]]],
    [ ['pizza']],
    ['burger'],
    ['fries']
];
const allFood = _.flattenDepth(food, 5);
console.log(allFood);
// Output: ['idly', 'dosa', 'briyani', 'samosa', 'sambar', 'briyani', 'samosa', 'pasta', 'chicken', 'pizza', 'burger', 'fries', 'pizza', 'burger', 'fries']
console.warn("_.indexOf")
// _.indexOf(array, value, [fromIndex=0])
const identity = _.indexOf([10, 20, 30, 20], 20);
console.log(identity);
// Output: 1
const selectedColors = ['red', 'green', 'blue'];
const chooseColors = ['red', 'blue'];
if (_.indexOf(selectedColors, 'green') !== -1) {
  console.log('Already selected!');
}
// Output: Already selected!
if (_.indexOf(chooseColors, 'green') === -1) {
  console.log('Not selected!');
}
// Output: Not selected!
console.warn("_.initial")
// _.initial(array)
const numbersArr = [1, 2, 3, 4, 5];
const initialNumbers = _.initial(numbersArr);
console.log(initialNumbers);
// Output: [1, 2, 3, 4] - removes the last element (5)
console.warn("_.intersection")
// _.intersection([arrays])
 const fromSearch = ['spa', 'facial', 'massage'];
const fromFavorites = ['massage', 'haircut', 'spa'];
const common = _.intersection(fromSearch, fromFavorites);
console.log(common);
// Output: ['spa', 'massage']
console.warn("_.intersectionBy")
// _.intersectionBy([arrays], [iteratee=_.identity])
const userCart = [{ productId: 101 }, { productId: 202 }];
const discountItems = [{ productId: 202 }, { productId: 303 }];
const eligibleDiscounts = _.intersectionBy(userCart, discountItems, 'productId');
console.log(eligibleDiscounts);
// Output: [{ productId: 202 }]
