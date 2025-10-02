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
const totAmount = _.sum(productCart.map(item=>item.price))
console.log('sum item.price ->',totAmount); // Output: 35 (summing prices of products)
const totalQuantity = _.sum(productCart.map(item=>item.quantity))
console.log('sum item.quantity ->',totalQuantity); // Output: 8 (summing quantities of products)
const totalPrice = _.sumBy(productCart, item => item.price * item.quantity);
console.log('sum item.price * item.quantity ->',totalPrice); // Output: 80 (summing total price of products)
console.warn("_sumBy")
const products = [
  { name: 'Laptop', price: 1000, quantity: 2 }, 
  { name: 'Phone', price: 500, quantity: 3 },
  { name: 'Tablet', price: 300, quantity: 4 }
];

// Sum of all prices
const totPrice = _.sumBy(products, 'price');
console.log('Total Price:', totPrice); // Output: 1800

// Sum of all quantities
const totQuantity = _.sumBy(products, 'quantity');
console.log('Total Quantity:', totQuantity); // Output: 9

// Sum of total value (price * quantity) for each product
const totalValue = _.sumBy(products, item => item.price * item.quantity); // Output: 4700
console.log('Total Value:', totalValue);
console.warn("_assign")
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const object3 = { e: 5, f: 6 };
const mergedObject = _.assign({}, object1, object2, object3); 
console.log('mergedObject ->',mergedObject); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

const target1 = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const resultOne = _.assign(target1, source1);
console.log('result ->',resultOne); // { a: 1, b: 4, c: 5 }
console.log('target ->',target1); // { a: 1, b: 4, c: 5 } (target is mutated)

const target2 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };
const result2 = _.assign({}, target2,source2);
console.log('result2 ->',result2); // { a: 1, b: 4, c: 5 }
console.log('target2 ->',target2); // { a: 1, b: 2 } (target is NOT mutated)


const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const finalSettings = _.assign({}, defaultSettings, userSettings);
console.log('finalSettings ->',finalSettings);
// → { theme: "dark", notifications: true }
console.warn("_.at")
const domainUser = {
  name: "Kesava",
  age: 27,
  address: {
    city: "Trichy",
    pincode: 600001
  }
};

const domainUserResult = _.at(domainUser, ['name', 'address.city', 'address.pincode']);
console.log(domainUserResult);
// Output: ['Kesava', 'Trichy', 600001]

const domainUsers = [
  { id: 1, name: "Anbu" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Chandra" }
];

const names = _.at(domainUsers, [0, 2, '[1].name']);
console.log(names);
// Output: [ { id: 1, name: 'Anbu' }, { id: 3, name: 'Chandra' }, 'Bala' ]
console.warn("_.pick")
const specailUser = {
  name: "Kesava",
  age: 27
};

const specailUserResult = _.pick(specailUser, ['name','age']);
console.log(specailUserResult);
// Output: { name: 'Kesava', age: 27 }
const domainUsers1 = [
  { id: 1, name: "Anbu" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Chandra" }
];

const names1 = _.pick(domainUsers, [0, 2, '[1].name']);
console.log(names1);
// Output: { { id: 1, name: 'Anbu' }, { id: 3, name: 'Chandra' }, 'Bala' }
console.warn("_.entries")
const objDetails = {
        name: "Kesava",   
        age: 27,
        age: 28,
        age: 20,
        city: "Trichy"
    };
const entriesArray = _.entries(objDetails);
console.log(entriesArray);
// Output: [ ['name', 'Kesava'], ['age', 20], ['city', 'Trichy'] ]
const settings = { theme: "dark", notifications: true };
_.entries(settings).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output: theme: dark notifications: true
console.warn("_set");
const setUser = { name: "Kesava" };
_.set(setUser, 'age', 27);
_.set(setUser, 'address.city', 'Trichy');
_.set(setUser, 'address.pincode', 600001);
console.log(setUser);
// {
//   name: 'Kesava',  
//   age: 27,
//   address: { city: 'Trichy', pincode: 600001 }
// }  
console.warn("_.get")
const getUser = {
  name: "Kesava",
  address: {
    city: "Trichy",
    pincode: 600001
  }
};
console.log(_.get(getUser, 'address.city'));   
console.log(_.get(getUser, 'address.state', 'Tamil Nadu'));

const apiResponse = {
  user: {
    profile: { name: "Raj" }
  }
};

console.log(_.get(apiResponse, 'user.profile.name', 'Guest')); // "Raj"
console.log(_.get(apiResponse, 'user.profile.age', 25));       // 25 (default)
console.log(_.get(apiResponse, 'user.settings.theme', 'light')); // "light" (default)
console.warn("_.has")
const hasUser = {
  name: "Kesava",
  address: {  
    city: "Trichy",
    pincode: 600001
  }
};
console.log('name ', _.has(hasUser, 'name')); // true
console.log('address.city ',_.has(hasUser, 'address.city')); // true
console.log('address.state ',_.has(hasUser, 'address.state')); // false
console.log('age ',_.has(hasUser, 'age')); // false

const config = {        
  server: {
    host: 'localhost',
    port: 8080
  },
  database: {
    user: 'admin',
    password: 'password'
  }
};
console.log('server.host ',_.has(config, 'server.host')); // true
console.log('database.password ',_.has(config, 'database.password')); // true
console.log('server.protocol ',_.has(config, 'server.protocol')); // false
console.log('api.key ',_.has(config, 'api.key')); // false
console.warn("_.merge")
const obj1 = { user: { name: "Kesava" } };
const obj2 = { user: { age: 27 } };
const result = _.merge({}, obj1, obj2);
console.log(result);
// { user: { name: 'Kesava', age: 27 } }
const obj3 = { fruits: ["apple"] };
const obj4 = { fruits: ["banana"] };
const result3 = _.merge({}, obj3, obj4);
console.log(result3);
// { fruits: ['banana'] }
const defaultConfig = { theme: "light", language: "en", options: { autosave: false } };
const userConfig = { language: "ta", options: { autosave: true } };
const systemConfig = { theme: "dark" };
const additionalConfig = { options: { backup: true } };
const finalConfig = _.merge({}, defaultConfig, userConfig, systemConfig, additionalConfig);
console.log(finalConfig);
/*
{
  theme: 'dark',
  language: 'ta',
  options: { autosave: true , backup: true },
}
*/
console.warn("_.omit")
const omitUser = {
  name: "Kesava",
  age: 27,
   password:'123456'  
};
const safeUser = _.omit(omitUser, ['password']);
console.log('safeUser',safeUser);
console.log('omitUser',omitUser); // original object remains unchanged
// { name: 'Kesava', age: 27 }
const product = { id: 101, name: "Laptop", price: 1000, cost: 800, supplier: "ABC Corp" };
const publicProduct = _.omit(product, ['cost', 'supplier']);
console.log(publicProduct);
// { id: 101, name: 'Laptop', price: 1000 }
console.warn("_.unset")
const unsetUser = {
  name: "Kesava",
  age: 27,
  salary: 50000,
  address: {
    city: "Trichy"
  }
};
console.log(_.unset(unsetUser, 'salary')); 
console.log('unsetUser after removing salary ->',unsetUser); // salary property is removed from original object
console.log(_.unset(unsetUser, 'address.city'));
console.log('unsetUser after removing address.city ->',unsetUser);
console.log(_.unset(unsetUser, 'address.pincode')); 
console.log('unsetUser after trying to remove non-existing address.pincode ->',unsetUser);
console.warn("_.chain");
const companyStaffs = [
  { name: 'Alice', age: 30, role: 'Developer', trustable: true },
  { name: 'Bob', age: 25, role: 'Designer' , trustable: false},
  { name: 'Charlie', age: 35, role: 'Manager', trustable: true },
  { name: 'David', age: 28, role: 'Developer', trustable: true },
  { name: 'Eve', age: 22, role: 'Intern', trustable: false }
]
const resultChain = _.chain(companyStaffs)
  .filter(staff => staff.trustable && staff.age > 25) // Step 1: Filter trustable staff older than 25
  .map(staff => ({ name: staff.name, role: staff.role , age: staff.age, goodWill: 'GOOD'})) // Step 2: Map to name and role
  .sortBy('age') // Step 3: Sort by age
  .value();

console.log(resultChain);
// Output:
// [ { name: 'David', role: 'Developer', age: 28, goodWill: 'GOOD' },
//   { name: 'Alice', role: 'Developer', age: 30, goodWill: 'GOOD' },
//   { name: 'Charlie', role: 'Manager', age: 35, goodWill: 'GOOD' } ]

const apiData = [
  { name: "Arun", active: true, lastLogin: 5 },
  { name: "Kesava", active: false, lastLogin: 10 },
  { name: "Bala", active: true, lastLogin: 2 }
];

const currentUsers = _.chain(apiData)
  .filter('active')              // only active users
  .sortBy('lastLogin')           // sort by login time
  .map('name')                   // pick only names
  .value();  // ⚠️ Important: .value() is mandatory at the end

console.log(currentUsers);
// 👉 ["Bala", "Arun"]
// without chain
const currentUsersWithoutChain = apiData;
const filteredUsers = _.filter(currentUsersWithoutChain, 'active');
const sortedUsers = _.sortBy(filteredUsers, 'lastLogin');
const userNames = _.map(sortedUsers, 'name');
console.log('without chain', userNames);
// 👉 ["Bala", "Arun"]
console.warn("_.tap")
const tapUser = { name: "Kesava", age: 27 };
_.tap(tapUser, obj => {
  obj.age += 1; // Increment age by 1  // here tapUser is mutated directly is beacuse obj is reference to tapUser, this is javascript behaviour 
});
console.log('tapUser ->',tapUser); // { name: 'Kesava', age: 28 }

const originalTapUser = { name: "Kesava", age: 27 };
const newTapUser = _.tap(_.clone(originalTapUser), obj => {
  obj.age += 1; // Increment age by 1
});
console.log('originalTapUser ->',originalTapUser);
console.log('newTapUser ->',newTapUser);
// originalTapUser remains unchanged: { name: 'Kesava', age: 27 }
// newTapUser is the modified clone: { name: 'Kesava', age: 28 }

const tapUsers = [
  { name: "Kesava", active: true },
  { name: "Arun", active: false },
  { name: "Bala", active: true }
];

const tapResult = _.chain(tapUsers)
  .filter('active')
  .tap(activeUsers => {
    console.log("Active users:", activeUsers);
  })
  .map('name')
  .value();

console.log(tapResult);
// 👉 ["Kesava", "Bala"]
console.warn("_.thru")
const thruUser = { name: "Kesava", age: 27 };
const thruResult = _.thru(thruUser, obj => {
  return { ...obj, age: obj.age + 1 }; // Return a new object with incremented age
});
console.log('thruUser ->',thruUser); // { name: 'Kesava', age: 27 } (original remains unchanged)
console.log('thruResult ->',thruResult); // { name: 'Kesava', age: 28 } (new object with updated age)

const rawInput = "  Hello World  ";
const processedInput = _.chain(rawInput)
.tap(str => {
  str.trim(); // This won't affect the original string
    console.log("tap trim input:", str); // not trimmed , keeps original value
  })
  .thru(str => str.trim())          // Step 1: Trim whitespace , it returns new string 
  .thru(str => str.toUpperCase())   // Step 2: Convert to uppercase
  .tap(str => {
    console.log("Processed input:", str); // Log the processed input
  })
  .value();
  console.log('processedInput:', processedInput); // "HELLO WORLD"
console.log('rawInput:', rawInput); // "  Hello World  " (original remains unchanged)
console.warn("_.camelCase")
console.log(_.camelCase('hello world')); // 'helloWorld'
console.log(_.camelCase('Foo Bar')); // 'fooBar'
console.log(_.camelCase('--foo-bar--')); // 'fooBar'
console.log(_.camelCase('__FOO_BAR__')); // 'fooBar'
console.log(_.camelCase('user_name_example')); // 'userNameExample'
console.log(_.camelCase('This is a test')); // 'thisIsATest'
console.log(_.camelCase('another-Test_case')); // 'anotherTestCase' 
console.warn("_.capitalize");
console.log(_.capitalize('hello world')); // 'Hello world'
console.log(_.capitalize('FOO BAR')); // 'Foo bar'
console.log(_.capitalize('--foo-bar--')); // 'Foo-bar--'
console.log(_.capitalize('__FOO_BAR__')); // 'Foo_bar__'
console.log(_.capitalize('user_name_example')); // 'User_name_example'
console.log(_.capitalize('this is a test')); // 'This is a test'
console.log(_.capitalize('another-Test_case')); // 'Another-test_case'
console.warn("_.kebabCase");
console.log(_.kebabCase('hello world')); // 'hello-world'
console.log(_.kebabCase('Foo Bar')); // 'foo-bar'
console.log(_.kebabCase('--foo-bar--')); // 'foo-bar'
console.log(_.kebabCase('__FOO_BAR__')); // 'foo-bar'
console.log(_.kebabCase('user_name_example')); // 'user-name-example'
console.log(_.kebabCase('This is a test')); // 'this-is-a-test'
console.log(_.kebabCase('another-Test_case')); // 'another-test-case' 
console.warn("_.lowerCase");
console.log(_.lowerCase('hello world')); // 'hello world'
console.log(_.lowerCase('Foo Bar'));  // 'foo bar'
console.log(_.lowerCase('--foo-bar--'));  // 'foo bar'
console.log(_.lowerCase('__FOO_BAR__'));  // 'foo bar'
console.log(_.lowerCase('user_name_example'));  // 'user name example'    
console.log(_.lowerCase('This is a test'));  // 'this is a test'
console.log(_.lowerCase('another-Test_case'));  // 'another test case'
console.warn("_.lowerFirst");
console.log(_.lowerFirst('Hello World')); // 'hello World'
console.log(_.lowerFirst('Foo Bar')); // 'foo Bar'
console.log(_.lowerFirst('--Foo-Bar--')); // '-foo-Bar--' 
console.log(_.lowerFirst('__FOO_BAR__')); // '_fOO_BAR__'
console.log(_.lowerFirst('User_name_example')); // 'user_name_example'
console.log(_.lowerFirst('This is a test')); // 'this is a test'
console.log(_.lowerFirst('Another-Test_case')); // 'another-Test_case'
console.warn("_.upperFirst");
console.log(_.upperFirst('hello world')); // 'Hello world'
console.log(_.upperFirst('foo bar')); // 'Foo bar'    
console.log(_.upperFirst('--foo-bar--')); // '--foo-bar--'
console.log(_.upperFirst('__foo_bar__')); // '__foo_bar__'
console.log(_.upperFirst('user_name_example')); // 'User_name_example'
console.log(_.upperFirst('this is a test')); // 'This is a test'
console.log(_.upperFirst('another-test_case')); // 'Another-test_case'
console.warn("_.upperCase");
console.log(_.upperCase('hello world')); // 'HELLO WORLD'
console.log(_.upperCase('Foo Bar')); // 'FOO BAR'   
console.log(_.upperCase('--foo-bar--')); // 'FOO BAR'
console.log(_.upperCase('__FOO_BAR__')); // 'FOO BAR'
console.log(_.upperCase('user_name_example')); // 'USER NAME EXAMPLE'
console.log(_.upperCase('This is a test')); // 'THIS IS A TEST'
console.log(_.upperCase('another-Test_case'));  // 'ANOTHER TEST CASE'
console.warn("_.snakeCase");
console.log(_.snakeCase('hello world')); // 'hello_world'
console.log(_.snakeCase('Foo Bar')); // 'foo_bar'
console.log(_.snakeCase('--foo-bar--')); // 'foo_bar'
console.log(_.snakeCase('__FOO_BAR__')); // 'foo_bar'
console.log(_.snakeCase('userNameExample')); // 'user_name_example'
console.log(_.snakeCase('This is a test')); // 'this_is_a_test'
console.log(_.snakeCase('another-Test_case')); // 'another_test_case' 
console.warn("_.split");
const splitExamples = [
  { str: 'hello world', separator: ' ' },
  { str: 'foo,bar,baz', separator: ',' },
  { str: 'one-two-three', separator: '-' },
  { str: 'a|b|c|d', separator: '|', limit: 2 },
  { str: 'no-delimiter-here', separator: 'x' }, 
  { str: '   spaced   out   ', separator: ' ' },
  { str: undefined, separator: ' ' },
  { str: null, separator: ' ' },
  { str: 12345, separator: '' }
]
splitExamples.forEach((example, index) => {
  const { str, separator, limit } = example; // destructuring assignment
  const result = _.split(str, separator, limit);
  console.log(`Example ${index + 1}:`, result);
});
console.log(_.split('hello world', ' ')); // ['hello', 'world']
console.log(_.split('foo,bar,baz', ',')); // ['foo', 'bar', 'baz']
console.log(_.split('one-two-three', '-')); // ['one', 'two', 'three']
console.log(_.split('a|b|c|d', '|', 2)); // ['a', 'b']
console.log(_.split('no-delimiter-here', 'x')); // ['no-delimiter-here']
console.log(_.split('   spaced   out   ', ' ')); // ['', '', '', 'spaced', '', '', 'out', '', '', '']
console.log(_.split(undefined)); // [']
console.log(_.split(null)); // [']
console.log(_.split(12345)); // [12345]
console.warn("_.parseInt");
const parseIntValues =[
  '42',          // String representing a decimal number  
  '101',         // String representing a decimal number
  '0x1A',       // String representing a hexadecimal number
  '075',        // String representing an octal number (treated as decimal in modern JS)
  '3.14',       // String representing a floating-point number
  '   56   ',   // String with leading/trailing whitespace
  'abc',        // Non-numeric string
  '',           // Empty string
  null,         // null value
  undefined,    // undefined value
  true,         // boolean true
  false,        // boolean false
]
parseIntValues.map((val,index)=>{
  console.log('Sl.no :' + _.parseInt(index + 1) + ' value: ' + val + ' After parseInt -> ' ,_.parseInt(val));
})
console.warn("_.trim");
const trimValues= [
  '   Hello World   ', // Leading and trailing spaces
  '\tTabbed String\t', // Leading and trailing tabs
  '\nNewline String\n', // Leading and trailing newlines  
  '   Mixed \t\n String   ', // Mixed whitespace characters
  'NoWhitespace',      // No whitespace
  '   ',               // Only whitespace
  '',                  // Empty string
  null,                // null value
  undefined            // undefined value
]
trimValues.forEach((data,i)=>{
  console.log('Sl.No : ' + `${i + 1}` + ' Value : ' + data + ' After trim -> ', _.trim(data));
})
console.warn("_.tolower");
const toLowerValues = [
  'HELLO WORLD',      // All uppercase
  'Foo Bar',         // Mixed case
  'already lowercase', // Already lowercase
  '12345',           // Numbers only
  'MIXED case 123',  // Mixed with numbers
  '',                // Empty string
  null,              // null value
  undefined         // undefined value
]
toLowerValues.forEach((data, i) => {
  console.log('Sl.No : ' + `${i + 1}` + ' Value : ' + data + ' After toLower -> ', _.toLower(data));
})
console.warn("_.toupper");
const toUpperValues = [
  'HELLO WORLD',      // All uppercase
  'Foo Bar',         // Mixed case
  'ALREADY UPPERCASE', // ALREADY UPPERCASE
  '12345',           // Numbers only
  'MIXED case 123',  // Mixed with numbers
  '',                // Empty string
  null,              // null value
  undefined         // undefined value
]
toUpperValues.forEach((data, i) => {
  console.log('Sl.No : ' + `${i + 1}` + ' Value : ' + data + ' After toUpper -> ', _.toUpper(data));
})
console.warn("<<<<<<--------------END OF LODASH--------------->>>>>>>");