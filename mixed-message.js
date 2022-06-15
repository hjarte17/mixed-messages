//Sample message: “You are a Java programmer at the novice level in the Madrid area”.

//Store the 3 random parts of our message
const programmer = {
  skillLevel: ["novice", "intermiediate", "advanced", "expert"],
  language: ["Python", "Ruby", "JavaScript", "Java", "C++", "C",],
  cities: ["Medellin","Miami","Madrid","Mexico City","Morristown","Massapequa",]
}

//get a random item from an array
const randomMessage = (array) => array[Math.floor(Math.random() * array.length)];

//display message function
const displayMessage = () => {
  let mixedMessage = `You ara a ${randomMessage(programmer.language)} programmer at the ${randomMessage(programmer.skillLevel)} level  in the ${randomMessage(programmer.cities)} area.`;

  return mixedMessage;
}

console.log(displayMessage(programmer));
