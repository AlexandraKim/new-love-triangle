/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var sequiences = {};

  for (i = 0; i < preferences.length; i++) {
    var current = preferences[i]
    var key = i + 1;
    sequiences[key] = current;
  }
  for (var x in sequiences) {
    if (x == sequiences[x]) {
      delete sequiences[x];
    }
    if (sequiences[sequiences[sequiences[x]]] == x) {
      count++;
      delete sequiences[sequiences[sequiences[x]]];
      delete sequiences[sequiences[x]];
      delete sequiences[x];
    }
  }

  return count;
};
