## droptake
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