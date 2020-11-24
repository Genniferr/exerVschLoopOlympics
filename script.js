//Prelim
//1
for (i = 0; i <10; i++){
  console.log(i)
}
//2
for (i = 9; i >=0; i--){
  console.log(i)
}
//3
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
  console.log(fruit[i])
}
//Bronze
//1
var arr = [];
for(var i=0; i<10; i++){
  arr.push(i);
}
console.log(arr)
//2
for (i = 0; i<101; i = i +2){
  console.log(i)
}
//3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
  for (var i = 0; i < fruit.length;  i = i +2){
    console.log(Array(fruit[i]))
  }
//Silver
//1
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for (i=0; i < peopleArray.length; i++){
  console.log(peopleArray[i].name)
}
//2
function nameArr(max){
  var name = [];
  var occ = [];
  for (i=0; i< peopleArray.length; i++){
    name[i] = peopleArray[i].name;
    occ[i] = peopleArray[i].occupation;
  }
  return name + "   " + occ;
}

console.log(nameArr(peopleArray[i]))
//3
var nameThreeArr = [];
var occThreeArr = [];
for (var i = 0; i < peopleArray.length; i++) {
  if (i === 0 || i % 2 === 0) {
    nameThreeArr.push(peopleArray[i].name)
  } else {
    occThreeArr.push(peopleArray[i].occupation);
  }
}
console.log(nameThreeArr);
console.log(occThreeArr);

//Gold
//1
var outerArr =[];
for (var i = 0; i < 3; i++) {
  var nestedArr = [];
  for (var j = 0; j < 3; j++){
    nestedArr.push(0);
  }
  outerArr.push(nestedArr);
}
console.log(outerArr);
//2
var outArr =[];
for (var i = 0; i < 3; i++) {
  var innerArr = [];
  for (var j = 0; j < 3; j++){
    innerArr.push(i);
  }
  outArr.push(innerArr);
}
console.log(outArr);
//3
var firstArr =[];
for (var i = 0; i < 3; i++) {
  var innArr = [];
  for (var j = 0; j < 3; j++){
    innArr.push(j);
  }
  firstArr.push(innArr);
}
console.log(firstArr);
//4
var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid[i].length; j++){
    grid[i][j] = "x";
  }
}
console.log(grid);