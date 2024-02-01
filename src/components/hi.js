function generateSerial() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let SerialLength = 20;
  let serial = "";
  for (let i = 0; i < SerialLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    serial += characters[randomIndex];
  }
  return serial;
}

console.log(generateSerial());

console.log(Math.random());

console.log(Math.random());

console.log(Math.floor(Math.random()));

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 10));

