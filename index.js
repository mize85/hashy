const fs = require("fs");
const crypt = require("apache-crypt");

function main(){
  let str = '"ID";"PW"\n';
  for(let i=1; i<10000; i++){
    const full = String(i).padStart(4, '0');
    str += `"${full}";"${crypt(full)}"\n`;
  }
  console.log("WRITING FILE...");
  fs.writeFileSync('./pw.csv', str);
  console.log("WRITING FILE DONE...")
}

main();