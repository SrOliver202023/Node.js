const BCrypt = require('bcryptjs');
const pass1 = BCrypt.hashSync("Emmerson")
const pass2 =  "Emmerson";

const result = BCrypt.compareSync(pass2, pass1);
console.log(result); 