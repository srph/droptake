function droptake(arr, n, start) {
  start = start || 0;
  return arr.slice(start).slice(0, n);
}

module.exports = droptake;