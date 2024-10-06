let languages = ["JavaScript", "Java", "C++", "Python"];

// returns an Array Iterator Object that contains keys 
let iterator = languages.keys();

// looping through the iterator object
for (let key of iterator) {
  console.log(key);
}

let vehicle = ["car", "bus", , "van", "truck"];

// returns an Array Iterator Object that contains keys
let iterator = vehicle.keys();

// looping through the iterator object
for (let key of iterator) {
  console.log(key);
}
