let r = prompt("Įveskite apskritimo spindulį");
r = + r;

let plotas = apskritimoPlotas (r);
console.log(plotas);

function apskritimoPlotas (spindulys){
    return Math.PI * r * r;
}