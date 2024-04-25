let fruits = ["apple", "orange", "grapes"];
console.log(fruits[0]); // arrays elementis indexit archeva
//modifying
console.log(fruits[1]);
fruits[1] = "Kiwi";
console.log(fruits[1]);
console.log(fruits);

// methods
// var person = {
//   key: "value",
//   tvalisFeri: "yavisferi",
//   getAge: () => {
//     console.log("age");
//   },
// };

// person.getAge();

// boloshi chamateba
fruits.push("Banana", "Mango");
console.log(fruits);

//bolodan washla
console.log(fruits.pop());
console.log(fruits);

//satavidan washla

console.log(fruits.shift());
console.log(fruits);

//sataveshi chamateba

fruits.unshift("apple");
console.log(fruits);

//mangos damateba

fruits.push("Mango");
console.log(fruits);

// chemtvis saurveli poziciidan elementebis amoshla / chamateba

fruits.splice(3, 0, "Pear", "Cherry");
// splice (index, deleteCount, dasamatebeli1, dasamatebeli2 da as.sh);
console.log(fruits);

// toString
var paragraphToChange = document.getElementById("arrayId");
paragraphToChange.innerHTML = fruits;
console.log(fruits.toString());

//sheerteba

var arr1 = [0, 1, 2, 3];
var arr2 = [4, 5, 6, 7];
var arr3 = [44, 55, 66, 77];
var yvelaArray = arr1.concat(arr2, arr3);
console.log(yvelaArray);

//sortireba
//stringis asoebis mixedvit - alphabetically

var students = ["Greg", "John", "Nick", "Jimmy"];
console.log(students);
students.sort();
console.log(students);

//stringis asoebis mixedvit shetrialebuli - alphabetically
students.reverse();
console.log(students);

//length
console.log(students.length);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);
// console.log(fruits[6]);

for (let i = 0; i < fruits.length; i++) {
  console.log(i);
  console.log(fruits[i]);
}

fruits.forEach((fruit) => {
  console.log(fruit);
});

var loopedArray = document.getElementById("loopedArray");

for (let i = 0; i < fruits.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = fruits[i];
  loopedArray.appendChild(li);
}

var count = 0;
var number = document.getElementById("number");
var btn = document.getElementById("buttonToChange");

var clickFunction = () => {
  count++;
  number.innerHTML = count;
  btn.style.backgroundColor = "red";
};

console.log(1 + 3);
console.log(1 - 3);
console.log(1 / 3);
console.log(1 * 3);
console.log(3 === '3');
//     + ; - ; > ; < ; >= ; <=  




