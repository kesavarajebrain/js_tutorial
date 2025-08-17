console.warn('Lodash');
console.log("Lodash version:", _.VERSION);
console.warn("_.chunk")
// _.chunk(array, size)
const items = [1, 2, 3, 4, 5, 6, 7];
const chunked = _.chunk(items, 3);
console.log(chunked);

console.warn("_.compact")
// _.compact(array)
const messyArray = [0, 1, , 3, 2, 1, false, 2, '', 3, null, undefined, NaN, 'hi'];
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
const allTags = ['React', 'Angular', 'Vue', 'Svelte', 'Node.js'];
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
const aSet = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }, { id: 5, name: 'Logi' }, { id: 6, name: 'Ravi' }];
const bSet = [{ id: 2, name: 'Raja' }, { id: 2, name: 'Rani' }, { id: 5, name: 'Logi' }];
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
  [['football']],
  ['swimming'],
  ['diving']
];
const allCategories = _.flattenDeep(categories);
console.log(allCategories);
// Output:  ['tech', 'health', 'yoga', 'meditation',  'sports', 'football', 'swimming', 'diving']
console.warn("_.flattenDepth")
// _.flattenDepth(array, [depth=1])
const food = [
  ['idly', 'dosa'], ['briyani', ['samosa']],
  ['sambar', [['briyani', ['samosa']]]],
  ['pasta'], ['chicken'],
  ['pizza', [['burger', ['fries']]]],
  [['pizza']],
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
console.warn("_.intersectionWith")
// _.intersectionWith([arrays], [comparator])
const activeOrders = [
  { id: 101, status: 'pending' },
  { id: 102, status: 'shipped' }
];
const archived = [
  { id: 101, status: 'pending' },
  { id: 102, status: 'cancelled' }
];
const finalOrder = _.intersectionWith(activeOrders, archived, (a, b) => a.id === b.id && a.status === b.status);
console.log(finalOrder);
// Output: [{ id: 101, status: 'pending' }]
console.warn("_.join")
// _.join(array, [separator=','])
const elements = ['Fire', 'Air', 'Water'];
const joined = _.join(elements, ' - ');
console.log(joined);
// Output: 'Fire - Air - Water'
const breadCrumbs = ['home', 'products', 'mobile'];
const path = _.join(breadCrumbs, '/');
console.log(path);
// Output: 'home/products/mobile'
console.warn("_.head")
// _.head(array)
const initialNotifications = ['New message', 'Friend request', 'Update available'];
console.log(_.head(initialNotifications));
// Output: 'New message'
console.warn("_.last")
// _.last(array)
const finalNotifications = ['New message', 'Friend request', 'Update available'];
console.log(_.last(finalNotifications));
// Output: 'Update available'
console.warn("_.initial")
// _.initial(array)
const paths = ['Home', 'Products', 'Electronics', 'Laptops'];
const breadcrumb = _.initial(paths);
console.log(breadcrumb);
// Output: ['Home', 'Products', 'Electronics']
console.warn("_.tail")
// _.tail(array)
const allReplies = ['Post content', 'Comment 1', 'Comment 2'];
const commentsOnly = _.tail(allReplies);
console.log(commentsOnly);
// Output: ['Comment 1', 'Comment 2'] - removes the first element (Post content)
console.warn("_.pull")
// _.pull(array, values...)
const scores = [90, 80, 90, 90, 70, 70, 71, 80];
_.pull(scores, 80, 90);
console.log(scores);
// Output: [70,70, 71]
console.warn("_.pullAll")
// _.pullAll(array, values)
let cart = [
  { productId: 101, name: 'Shampoo' },
  { productId: 102, name: 'Oil' },
  { productId: 103, name: 'Soap' }
];
const toRemove = [{ productId: 102 }];
_.pullAllBy(cart, toRemove, 'productId');
console.log(cart);
// Output: [ { productId: 101, name: 'Shampoo' }, { productId: 103, name: 'Soap' } ]
console.warn("_.pullAllWith")
// _.pullAllWith(array, values, [comparator])
let cartItems = [
  { id: 1, name: 'Milk' },
  { id: 2, name: 'Bread' },
  { id: 3, name: 'Milk' }
];
let toDelete = [
  { id: 3, name: 'Milk' }
];
_.pullAllWith(cartItems, toDelete, (a, b) => a.id === b.id && a.name === b.name);
console.log(cartItems);
// Output: [ { id: 1, name: 'Milk' }, { id: 2, name: 'Bread' } ]
console.warn("_.pullAt")
// _.pullAt(array, [indexes])
let fruits = ['Apple', 'Banana', 'Cherry', 'Dates', 'Berry'];
_.pullAt(fruits, [1, 3]);
console.log(fruits);
// Output: [ 'Apple', 'Cherry', 'Berry' ]
console.warn("_.remove")
// _.remove(array, predicate)
let todos = [
  { task: 'Do laundry', done: true },
  { task: 'Buy groceries', done: false },
  { task: 'Clean room', done: true },
  { task: 'Prepare dinner', done: true }
];
const completed = _.remove(todos, todo => todo.done);
console.log(completed);
// Output: [ { task: 'Do laundry', done: true }, { task: 'Clean room', done: true }, { task: 'Prepare dinner', done: true } ]
console.warn("_.reverse")
// _.reverse(array)
let messages = ['Hi', 'How are you?', 'Bye'];
_.reverse(messages);
console.log(messages);
// Output: ['Bye', 'How are you?', 'Hi']
console.warn("_.sortedUniq")
// _.sortedUniq(array)
let ages = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 10];
let unique = _.sortedUniq(ages);
console.log(unique);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.warn("_.sortBy")
// _.sortBy(array, [iteratee=_.identity])
const data = [
  { id: 1, age: 20 },
  { id: 2, age: 89 },
  { id: 1, age: 9 },
  { id: 2, age: 34 },
  { id: 1, age: 24 },
  { id: 2, age: 22 }
];
let sortedByAge = _.sortBy(data, 'age');
console.log(sortedByAge);
// Output: [ { id: 1, age: 9 },
//  { id: 1, age: 20 }, { id: 1, age: 24 }, { id: 2, age: 22 }, { id: 2, age: 34 }, { id: 2, age: 89 } ]
console.warn("_.orderBy")
// _.orderBy(array, [iteratee=_.identity], [orders])
const persons = [
  { id: 1, age: 20 },
  { id: 2, age: 89 },
  { id: 1, age: 9 },
  { id: 2, age: 34 },
  { id: 1, age: 24 },
  { id: 2, age: 22 }
];
let sortedByAgeDesc = _.orderBy(persons, ['age'], ['desc']);
console.log(sortedByAgeDesc);
const vegetables = [
  { name: 'Carrot', kg: 5 },
  { name: 'Broccoli', kg: 2 },
  { name: 'Cauliflower', kg: 8 },
  { name: 'Spinach', kg: 3 }
];
let sortedVegetables = _.orderBy(vegetables, ['kg'], ['asc']);
console.log(sortedVegetables);
// Output: [ { name: 'Broccoli', kg: 2 }, { name: 'Spinach', kg: 3 }, { name: 'Carrot', kg: 5 }, { name: 'Cauliflower', kg: 8 } ]
console.warn("_.uniq")
const countries = ['India', 'USA', 'India', 'UK', 'USA'];
const uniqueCountries = _.uniq(countries);
console.log(uniqueCountries);
// Output: ['India', 'USA', 'UK']
console.warn("_.uniqBy")
// _.uniqBy(array, [iteratee=_.identity])
const namesArr = [
  { id: 1, name: 'Anbu' },
  { id: 1, name: 'Anbu' },
  { id: 1, name: 'Villan' },
  { id: 2, name: 'Chandra' },
  { id: 1, name: 'Bhuvana' },
  { id: 1, name: 'Bhuvana' },
  { id: 2, name: 'Josh' },
  { id: 2, name: 'Loki' },
  { id: 2, name: 'Loki' }
];
const uniqueUsers = _.uniqBy(namesArr, 'name');
console.log(uniqueUsers);
// Output: [ { id: 1, name: 'Anbu' }, { id: 1, name: 'Villan' }, { id: 2, name: 'Chandra' }, { id: 1, name: 'Bhuvana' }, { id: 2, name: 'Josh' }, { id: 2, name: 'Loki' } ]
console.warn("_.CountBy")
// _.countBy(array, [iteratee=_.identity])
const numbersList = [1, 2, 3, 4, 5, 6];
const result1 = _.countBy(numbersList, n => n % 2 === 0 ? 'even' : 'odd');
console.log(result1);
// Output: { odd: 3, even: 3 }
const usersArr = [
  { name: 'A', type: 'admin' },
  { name: 'B', type: 'user' },
  { name: 'C', type: 'admin' },
  { name: 'D', type: 'guest' }
];
const res = _.countBy(usersArr, 'type');
console.log(res);
// Output: { admin: 2, user: 1, guest: 1 }
console.warn("_.forEach")
// _.forEach(collection, [iteratee=_.identity])
const fruitsItems = ['apple', 'banana', 'orange'];
_.forEach(fruitsItems, (fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple 
// 1: banana
// 2: orange
const userObj = { name: 'Alice', age: 25, role: 'admin' };
_.forEach(userObj, (value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice  
// age: 25
// role: admin 
console.warn("_.every")
// _.every(collection, [predicate=_.identity])  
const integers = [1, 2, 3, 4, -2];
const allPositive = _.every(integers, n => n > 0);
console.log(allPositive); // Output: false - because -2 is not positive
const dataList = [
  { name: 'A', age: 25 },
  { name: 'B', age: 30 },
  { name: 'C', age: 22 }
];
const listRes = _.every(dataList, user => user.age > 20);
console.log(listRes); // true
console.warn("_.filter")
// _.filter(collection, predicate)
const Allusers = [
  { name: 'A', active: true },
  { name: 'B', active: false },
  { name: 'C', active: true }
];

const activeUsers = _.filter(Allusers, 'active');
console.log(activeUsers);
// [
//   { name: 'A', active: true },
//   { name: 'C', active: true }
// ]
const runs = {
  John: 45,
  Alice: 90,
  Bob: 32
};

const passed = _.filter(runs, score => score >= 40);
console.log(passed);
// [45, 90]
console.warn("_.find")
// _.find(collection, predicate, [fromIndex=0])
const mixedNumbers = [1, 3, 5, 6, 8, 10];
const firstEven = _.find(mixedNumbers, n => n % 2 === 0);
console.log(firstEven); // Output: 6
console.warn("_.flatMap")
// _.flatMap(collection, [iteratee=_.identity])
const nameStr = ['Kesava', 'Raj'];
const resultStr = _.flatMap(nameStr, name => [name, name.length]);
console.log(resultStr);
// Output: ['Kesava', 6, 'Raj', 3]
const listeners = [
  { name: 'Alice', tags: ['admin', 'editor'] },
  { name: 'Bob', tags: ['user'] }
];
const tags = _.flatMap(listeners, user => user.tags);
console.log(tags);
// Output: ['admin', 'editor', 'user']
console.warn("_.flatMapDeep")
// _.flatMapDeep(collection, [iteratee=_.identity])
const subjects = [
  { name: 'tech', subs: ['mobile', ['ai', ['cloud']]] },
  { name: 'food', subs: ['fruits', ['veg']] }
];
const allSubs = _.flatMapDeep(subjects, cat => cat.subs);
console.log(allSubs);
// Output: ['mobile', 'ai', 'cloud', 'fruits', 'veg']
console.warn("_.groupBy");
const nums = [1, 2, 3, 4, 5, 6];
const grouped = _.groupBy(nums, n => n % 2 === 0 ? 'even' : 'odd');
console.log(grouped);
// Output:
// {
//   odd: [1, 3, 5],
//   even: [2, 4, 6]
// }
const usersAges = [
  { name: 'A', age: 25 },
  { name: 'B', age: 30 },
  { name: 'C', age: 25 }
];
const byAge = _.groupBy(usersAges, 'age');
console.log(byAge);
// Output:
// {
//   25: [{ name: 'A', age: 25 }, { name: 'C', age: 25 }],
//   30: [{ name: 'B', age: 30 }]
// }
console.warn("_.includes")
const favs = ['apple', 'banana', 'mango'];
console.log(_.includes(favs, 'banana')); // true
console.log(_.includes(favs, 'grape'));  // false
console.warn("_.keyBy")
const employees = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Charlie' }
];
const empResult = _.keyBy(employees, 'id');
console.log(empResult);
// Output:
// {
//   101: { id: 101, name: 'Alice' },
//   102: { id: 102, name: 'Bob' },
//   103: { id: 103, name: 'Charlie' }
// }
console.warn("_.map")
const nos = [1, 2, 3, 4];
const doubled = _.map(nos, n => n * 2);
console.log(doubled);
// [2, 4, 6, 8]
console.warn("_.reduce")
const prices = [10, 20, 30, 40];
const total = _.reduce(prices, (sum, n) => sum + n, 0);
console.log(total); // 100
console.warn("_sample")
const fruitsNames = ['apple', 'banana', 'cherry', 'mango'];
console.log(_.sample(fruitsNames));
console.warn("_sampleSize")
const setColors = ['red', 'green', 'blue', 'yellow', 'purple'];
const randomColors = _.sampleSize(setColors, 3);
console.log(randomColors);
console.warn("_.values")
const objectData = { name: 'Raj', age: 25, city: 'Chennai' };
console.log(_.values(objectData));
console.warn("_.keys")
const objectKeys = { name: 'Raj', age: 25, city: 'Chennai' };
console.log(_.keys(objectKeys));
console.warn("_.entries")
const ornamentsData = ['chain', 'ring', 'stud', 'neckles'];
console.log(_.entries(ornamentsData));
const userDetails = { name: 'Raj', age: 25, city: 'Chennai' };
console.log(_.entries(userDetails));
console.warn("_.shuffle")
const participants = { a: 'Raj', b: 'Kesava', c: 'Anbu' };
const shuffledParticipants = _.shuffle(_.values(participants));
console.log(shuffledParticipants);
console.warn("_.some")
const winnersList = [
  { name: 'Raj', active: false },
  { name: 'Anbu', active: true },
  { name: 'Kesava', active: false },
  { name: 'Chandra', active: false },
  { name: 'Josh', active: true }
];
const isActive = _.some(winnersList, { active: true });
console.log(isActive); // Output: true - because Anbu and Josh are active
console.warn("_.debounce")
const sayHello = _.debounce((name) => {
  console.warn(`Hello, ${name}!`);
}, 1000);
sayHello('Raj');
sayHello('Anbu');
sayHello('Kesava');
console.warn('_.throttle')
const throttledFunc = _.throttle(() => {
  console.warn("Thorttle Function called at", new Date().toLocaleTimeString());
}, 2000); // 1000ms = 1 second

// simulate calling it many times
setInterval(() => {
  throttledFunc();
}, 300); // tries to run every 300ms
console.warn("_clone")
const originalObj = { name: 'Kesava', age: 30 };
const copy = _.clone(originalObj);
console.log(copy); // { name: 'Kesava', age: 30 }
copy.name = 'Raj';
console.log(originalObj.name); // 'Kesava' ✅ (not affected)
console.warn("Example with nested objects:")
const usr = {
  name: 'Kesava',
  address: { city: 'Chennai', zip: 600001 }
};
const clonedUser = _.clone(usr);
clonedUser.address.city = 'Coimbatore';
console.log(usr.address.city); // 'Coimbatore' ❗ (original object is affected!)
console.warn("_cloneDeep")
const originalDeepObj = {
  user: 'Kesava',
  details: {
    city: 'Chennai',
    skills: ['JS', 'React']
  }
};
const deepCopyObj = _.cloneDeep(originalDeepObj);
deepCopyObj.details.city = 'Coimbatore';
deepCopyObj.details.skills.push('Lodash');
console.warn("Deep Copy Example:");
console.log(deepCopyObj.details.city); // 'Coimbatore' ✅ changed in deep copy
console.log(deepCopyObj.details.skills); // ['JS', 'React', 'Lodash'] ✅ changed in deep copy
// Original object remains unchanged
console.warn("Original Object :");
console.log(originalDeepObj.details.city);    // 'Chennai' ✅ not changed
console.log(originalDeepObj.details.skills);  // ['JS', 'React'] ✅ not changed
console.warn("_cloneDeepWith")
const userProfile = {
  name: 'Kesava',
  age: 28,
  profileImage: new Blob(['...'], { type: 'image/png' }),
  preferences: {
    theme: 'dark',
    notifications: true
  }
};
// Use cloneDeepWith to skip cloning the blob
const clonedUsr = _.cloneDeepWith(userProfile, (value) => {
  if (value instanceof Blob) {
    return value; // Don't clone, return as-is
  }
});
console.warn("Cloned User Profile:");
console.log(clonedUsr);
console.warn("userProfile:");
console.log(userProfile);
console.log(clonedUsr === userProfile); // false (new object)
console.log(clonedUsr.profileImage === userProfile.profileImage); // true (blob is reused)
console.log(clonedUsr.preferences === userProfile.preferences); // false (deep cloned)
console.warn("_isArray");
const valuesCollection = [
  [1, 2, 3],
  "hello",
  { name: "Kesava" },
  123,
  null,
  undefined,
  true
];

valuesCollection.forEach((val, index) => {
  console.log(`Value ${index + 1}:`, val, '| Is Array:', _.isArray(val));
});
console.warn("_isBoolean");
 const valuesCollectionTwo = [
    true,
    false,
    new Boolean(false), // object wrapper, not primitive
    0,
    1,
    "true",
    null,
    undefined
  ];

  valuesCollectionTwo.forEach((val, index) => {
    console.log(`Value ${index + 1}:`, val, "| isBoolean:", _.isBoolean(val));
  });
  console.warn("_isDate");
const d1 = new Date();        // ✅ Date object
const d2 = Date.now();        // ❌ Just a number (timestamp)
const d3 = "2024-08-01";      // ❌ Just a string
console.log(_.isDate(d1)); // true
console.log( _.isDate(d2)); // false
console.log(_.isDate(d3)); // false
console.warn("_isEmpty");
const emptyObj = {};
const nonEmptyObj = { name: 'Kesava' };
const emptyArr = [];
const nonEmptyArr = [1, 2, 3];
const emptyStr = '';
const nonEmptyStr = 'Hello';
const nullValue = null;
const undefinedValue = undefined;
const numValue = 42;
const boolValue = true;

console.log('emptyObj ->',_.isEmpty(emptyObj)); // true
console.log('nonEmptyObj ->',_.isEmpty(nonEmptyObj)); // false   
console.log('emptyArr ->',_.isEmpty(emptyArr)); // true
console.log('nonEmptyArr->',_.isEmpty(nonEmptyArr)); // false
console.log('emptyStr ->',_.isEmpty(emptyStr)); // true
console.log('nonEmptyStr ->',_.isEmpty(nonEmptyStr)); // false
console.log('nullValue ->',_.isEmpty(nullValue)); // true
console.log('undefinedValue',_.isEmpty(undefinedValue)); // true
console.log('numValue-> ',_.isEmpty(numValue)); // true (numbers are considered empty)
console.log('boolValue ->',_.isEmpty(boolValue)); // true (booleans are considered empty)
console.warn("_isEqual");
const order1 = {
  id: 101,
  customer: { name: "Kesava", city: "Chennai" },
  items: [
    { product: "Laptop", qty: 1, price: 50000 },
    { product: "Mouse", qty: 1, price: 500 }
  ]
};

const order2 = {
  id: 101,
  customer: { name: "Kesava", city: "Chennai" },
  items: [
    { product: "Laptop", qty: 1, price: 50000 },
    { product: "Mouse", qty: 1, price: 500 }
  ]
};
// Normal equality check
console.log(order1 === order2); // false ❌ (different references)
// Deep equality check
console.log(_.isEqual(order1, order2)); // true ✅
console.log(_.isEqual(5, 5)); // true
console.log(_.isEqual(5, '5')); // false
console.log(_.isEqual([1, 2, 3], [1, 2, 3])); // true
console.log(_.isEqual({ a: 1 }, { a: 1 })); // true
console.log(_.isEqual({ a: 1 }, { a: 2 })); // false
console.log(_.isEqual(null, undefined)); // false
console.log(_.isEqual(null, null)); // true
console.log(_.isEqual(undefined, undefined)); // true
console.warn("_.isInteger");
console.log(_.isInteger(4));         // true   → 4 is an integer
console.log(_.isInteger(4.0));       // true   → 4.0 is still an integer
console.log(_.isInteger(-4));        // true   → Negative integers are still integers   
console.log(_.isInteger(0));         // true   → 0 is also an integer
console.log(_.isInteger(4.5));       // false  → Has decimal part
console.log(_.isInteger(Math.PI));  // false  → Decimal value
console.log(_.isInteger('4'));       // false  → String, not a number
console.log(_.isInteger(NaN));       // false  → NaN is not an integer
console.log(_.isInteger(undefined)); // false  → Not a number at all
console.log(_.isInteger(null));      // false  → null is not a number
console.log(_.isInteger(true));      // false  → Boolean true is not an integer
console.log(_.isInteger(false));     // false  → Boolean false is not an integer
function canBookSeats(seats) {
  if (_.isInteger(seats) && seats > 0) {
    return "Booking confirmed!";
  } else {
    return "Please enter a valid whole number of seats.";
  }
}
console.log(canBookSeats(3));     // "Booking confirmed!"
console.log(canBookSeats(3.0));   // "Booking confirmed!"
console.log(canBookSeats(0.5));   // "Please enter a valid whole number of seats."
console.log(canBookSeats(3.5));   // "Please enter a valid whole number of seats."
console.log(canBookSeats('3'));   // "Please enter a valid whole number of seats."
console.log(canBookSeats(-2));    // "Please enter a valid whole number of seats."
console.log(canBookSeats(0));     // "Please enter a valid whole number of seats
console.warn("_.isNumber");
console.log('_.isNumber(42) ->',_.isNumber(42));          // true   → 42 is a number
console.log('_.isNumber(3.14)',_.isNumber(3.14));        // true   → 3.14 is a number
console.log('_.isNumber(NaN)',_.isNumber(NaN));         // true   → NaN is considered a number
console.log('_.isNumber(Infinity)',_.isNumber(Infinity));    // true   → Infinity is a number
console.log('_.isNumber(-Infinity)',_.isNumber(-Infinity));   // true   → -Infinity is a number
console.log('_.isNumber(0)',_.isNumber(0));           // true   → 0 is a number
console.log('_.isNumber(4.0)',_.isNumber(4.0));         // true   → 4.0 is still a number
console.log('_.isNumber(4.5)',_.isNumber(4.5));         // true   → 4.5 is a number
console.log('_.isNumber(Number(42)',_.isNumber(Number('42'))); // true   → Number('42') is a number
console.log('_.isNumber(Number(3.14)',_.isNumber(Number('3.14'))); // true   → Number('3.14') is a number
console.log('_.isNumber(Number(NaN)',_.isNumber(Number('NaN'))); // true   → Number('NaN') is a number (NaN)
console.log('_.isNumber(Number()',_.isNumber(Number('')));  // true   → Number('') is 0, which is a number
console.log('_.isNumber(Number(abc)',_.isNumber(Number('abc'))); // true  → Number('abc') is NaN, which is a number but not a valid numeric value

console.log('_.isNumber(42)',_.isNumber('42'));        // false  → '42' is a string      
console.log('_.isNumber(undefined)',_.isNumber(undefined));   // false  → undefined is not a number
console.log('_.isNumber(null)',_.isNumber(null));        // false  → null is not a number
console.log('_.isNumber(true)',_.isNumber(true));        // false  → true is a boolean, not a number
console.log('_.isNumber(false)',_.isNumber(false));       // false  → false is a boolean, not a number
console.log('_.isNumber({})',_.isNumber({}));          // false  → {} is an object, not a number
console.log('_.isNumber([])',_.isNumber([]));          // false  → [] is an array, not a number
console.log('_.isNumber(3.14)',_.isNumber('3.14'));      // false  → '3.14' is a string, not a number
console.log('_.isNumber(NaN)',_.isNumber('NaN'));       // false  → 'NaN' is a string, not a number
console.warn("_.isMatch");
const userr = { name: 'John', age: 30, role: 'Admin' };
console.log(_.isMatch(userr, { age: 30 }));        // true ✅
console.log(_.isMatch(userr, { role: 'Admin' }));  // true ✅
console.log(_.isMatch(userr, { age: 25 }));        // false ❌
console.log(_.isMatch(userr, { name: 'John', age: 30 })); // true ✅
console.log(_.isMatch(userr, { name: 'John', age: 25 })); // false ❌
console.log(_.isMatch(userr, { name: 'John', role: 'User' })); // false ❌
const order = {
  id: 101,
  customer: { name: 'Alice', city: 'Chennai' },
  total: 500
};
console.log(_.isMatch(order, { customer: { city: 'Chennai' } })); // true ✅
console.log(_.isMatch(order, { customer: { city: 'Delhi' } }));   // false ❌
const home = {
  owner: 'Kesava',
  rooms: { bedroom: 2, kitchen: 1 },
  location: 'India'
};
// Check if the home has at least 2 bedrooms
console.log(_.isMatch(home, { rooms: { bedroom: 2 } })); // true ✅
// Check if the home has 3 bedrooms
console.log(_.isMatch(home, { rooms: { bedroom: 3 } })); // false ❌
console.warn("._isNaN");
console.log('typeof NaN --> ',typeof NaN); // "number"
const setOfValues = [NaN, 42, 'hello', undefined, null, true, false, {}, []];
setOfValues.forEach((val, index) => {
    console.log(`Value ${index + 1}:`, val, '| Is NaN:', _.isNaN(val));
})
console.warn("_.isNil");
 const userData = {
    name: 'Kesava',   
    age: 30,
}

if (!_.isNil(userData)) {
  console.log("User exists:", userData);
} else {
  console.log("User is missing!");
}
const valuesToCheck = [
  null,
  undefined,
  0,
  '',
  false,
  NaN,
  'Hello',
  [],
  {},
  [1, 2, 3],
  { a: 1 }
]
valuesToCheck.forEach((data,slNo)=>{
  console.log(`Sl.No: ${slNo +1 } - Value: ${data} - Is Nil: ${_.isNil(data)}`);
})
console.warn('_isNull')
const valuesToCheckNull = [
  null,
  undefined,
  0,
  '',
  false,
  NaN,
  'Hello',
  [],
  {},
  [1, 2, 3],
  { a: 1 }
]
valuesToCheckNull.forEach((data, slNo) => {
  console.log(`Sl.No: ${slNo + 1} - Value: ${data} - Is Null: ${_.isNull(data)}`);
})
console.warn("._isObject");
const mixedValues = [
  { name: 'Kesava' }, // Object
  [1, 2, 3],         // Array
  'Hello',           // String
  42,                // Number
  null,              // Null
  undefined,         // Undefined
  true,              // Boolean
  new Date()        // Date object
];
for(const [i,val] of mixedValues.entries()){
  console.log(`Sl.no: ${i + 1}:`, val, '| Is Object:', _.isObject(val));
}
console.warn("._isstring");
  function validateName(name) {                            
        if (_.isString(name) && !_.isEmpty(name)) {
            console.log("Valid name:", name);
            } else {
            console.log("Invalid name!");
        }
    }
validateName("Raj"); // Valid name: Raj
validateName(123); // Invalid name!
validateName(""); // Invalid name!
validateName(null); // Invalid name!
validateName(undefined); // Invalid name!
validateName(""); // Invalid name!
validateName("Anbu"); // Valid name: Anbu
validateName(456); // Invalid name!
const stringValues = [
  'Hello',
  '123',
  '',
  null,
  undefined,
  true,
  false,
  {},
  [],
  new Date()
];
stringValues.forEach((val, index) => {
  console.log(`Sl.no ${index + 1}:`, val, '| Is String:', _.isString(val));
});
console.warn("._toArray");
const toArrayValues = [
    { name: 'Kesava' }, // Object   
    [1, 2, 3],         // Array
    'Hello',           // String
    42,                // Number
    null,              // Null
    undefined,         // Undefined
    true,              // Boolean   
    new Date()        // Date object
];
toArrayValues.forEach((val, index) => {
    const arrayValue = _.toArray(val);
    console.log(`Sl.no ${index + 1}:`, val, '| Converted to Array:', arrayValue);
});

const objectToArray = { tamil: 70, english: 72, maths: 35, science: 60, social: 50 };
const arrayFromObject = _.toArray(objectToArray);
console.log('Object to Array:', arrayFromObject);
const highMarks = arrayFromObject.filter((mark)=>mark >50);
console.log('Marks greater than 50:', highMarks);
console.warn("._tointeger");
const valuesToCheckInteger = [
    42,                // Integer
    3.14,              // Float     
    -7,                // Negative Integer
    0,                 // Zero
    '100',             // String
    null,              // Null
    undefined,         // Undefined     
    true,              // Boolean
    false,             // Boolean
    {},                // Object
    [],                // Array
    new Date(),       // Date object
    20.67
];
valuesToCheckInteger.forEach((val, index) => {
    console.log(`Sl.no ${index + 1}:`, val, '| Is Integer:', _.toInteger(val));
});
console.warn("._toNumber");
const valuesToCheckNumber = [
        42,                // Integer   
        3.14,              // Float
        -7,                // Negative Integer
        0,                 // Zero
        '100',             // String
        null,              // Null
        undefined,         // Undefined
        true,              // Boolean
        false,             // Boolean
        {},                // Object
        [],                // Array
        new Date(),       // Date object
        '20.67',           // String with decimal
        'abc',             // Non-numeric string
        '123abc'           // Mixed string
];
valuesToCheckNumber.forEach((val, index) => {
    console.log(`Sl.no ${index + 1}:`, val, '| Converted to Number:', _.toNumber(val));
});
console.warn("._toString");
const valuesToCheckString = [
    42,                // Integer
    3.14,              // Float
    -7,                // Negative Integer
    0,                 // Zero
    '100',             // String
    null,              // Null
    undefined,         // Undefined
    true,              // Boolean
    false,             // Boolean
    {},                // Object
    [],                // Array
    new Date(),       // Date object
    '20.67',           // String with decimal
    'abc',             // Non-numeric string
    '123abc'           // Mixed string
];
for (const [i,val] of valuesToCheckString.entries()){
  console.log(`Sl.no : ${i + 1} -Value: ${val} - Converted to String:`, _.toString(val));
}
console.warn("._add")
console.log(_.add(5, 3)); // Output: 8
console.log(_.add(10, 20)); // Output: 30
console.log(_.add("10", 26)); // Output: 36 (string "10" is converted to number)
console.log(_.add(10, "26")); // Output: 36 (string "26" is converted to number)
console.log(_.add("10", "26")); // Output: 36 (both strings are converted to numbers)
console.warn("_.sum")
const numberss = [1, 2, 3, 4, 5];
console.log(_.sum(numberss)); // Output: 15
const mixedArray = [1, '2', 3, '4', 5];
console.log(_.sum(mixedArray)); // Output: 15 (strings are converted to numbers)
const emptyArray = [];  
console.log(_.sum(emptyArray)); // Output: 0 (no elements to sum)
const arrayWithNaN = [1, 2, NaN, 4];
console.log(_.sum(arrayWithNaN)); // Output: 7 (NaN is ignored in the sum)
const productCart = [
  { price: 10, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 2 },
  { price: 10, quantity: 3 },
];
const totalAmount = _.sum(productCart.map(item=>item.price))
console.log('sum item.price ->',totalAmount); // Output: 35 (summing prices of products)
const totalQuantity = _.sum(productCart.map(item=>item.quantity))
console.log('sum item.quantity ->',totalQuantity); // Output: 8 (summing quantities of products)
const totalPrice = _.sumBy(productCart, item => item.price * item.quantity);
console.log('sum item.price * item.quantity ->',totalPrice); // Output: 80 (summing total price of products)


























console.warn("<<<<<<--------------END OF LODASH--------------->>>>>>>");