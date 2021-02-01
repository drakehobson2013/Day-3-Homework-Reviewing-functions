var champOne = {
    "name": "Nasus",
    "tails": 1,
    "enemies": ["Gator", "Rengar"]
  };
var champTwo = {
    "name": "Rengar",
    "tails": 1,
    "enemies": ["Bugs", "Tanks"]
  };
var champThree = {
    "name": "Katarina",
    "tails": 0,
    "enemies": ["Zhonya's", "CC"]
  };

  console.log(champOne.name);
  console.log(champTwo.tails);
  console.log(champThree.enemies);

  function testFun(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
  }
}
console.log(testFun(champOne));