let n = parseInt(gets())
let boys = 0;
let girls = 0;

for (i=0; i<n; i++) {
  let kids = gets().split(' ');
  
  if(kids[1] == 'F') {
    girls++;
  } else if (kids[1] == 'M') {
    boys++;
  }
}

console.log(`${boys} carrinhos`);
console.log(`${girls} bonecas`);