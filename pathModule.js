const path = require('path');

console.log(path.dirname("C:/Users/ashis/Desktop/nodejs/javascript1.js"));
console.log(path.basename("C:/Users/ashis/Desktop/nodejs/javascript1.js"));
console.log(path.extname("C:/Users/ashis/Desktop/nodejs/javascript1.js"))
console.log(path.join(__dirname,"abc.txt"))
console.log(__filename);
console.log(path.join(__dirname+"/../../"+"abc.txt"))
console.log(path.isAbsolute("Users/ashis/Desktop/nodejs/javascript1.js"))
console.log(path.parse("C:/Users/ashis/Desktop/nodejs/javascript1.js"));


