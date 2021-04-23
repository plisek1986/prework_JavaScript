const cat =  {
  name: "Filemon",
  age: 2,
  friends: ["Mruczek", "Reksio"],
  isSleepy: true,
  saySomething: function() {
    console.log("Miau!");
  }
};

console.log(cat.name);
console.log(cat.friends[0]);
cat.saySomething();

cat.color = 'black';
console.log(cat.color);