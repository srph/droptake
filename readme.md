## droptake [![npm version](http://img.shields.io/npm/v/droptake.svg?style=flat-square)](https://npmjs.org/package/droptake?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/droptake.svg?style=flat-square)](https://travis-ci.org/srph/droptake?branch=master)
```
npm i droptake -S
```
Take values from an array from any starting position

### Huh?
lodash vs droptake:
```diff
var arr = [1, 2, 3, 4, 5, 6];
- _.take(_.drop(arr, 2), 2);
+ droptake(arr, 2, 2); 
```

### Usage
```js
var array = [1, 2, 3, 4, 5, 6];
droptake(array, 2, 2); // [3, 4]
```

You can leave out the last parameter which takes values starting from position 0 to n.
```
droptake(array, 2); // [1, 2]
```

### API
`droptake(array, n[, start]): Array`
- `array` (`Array`) - Array
- `n` (`Int`) - Number of values to take
- `start` (`Int`) - Starting position
