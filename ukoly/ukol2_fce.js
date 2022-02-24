function JePrvocislo (cislo) {
  let jePrvocislo = tru;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i ==0) {
      jePrvocislo = false;
      break
    }
  }
return jePrvocislo;
}

let cislo = Number(prompt("Zadej číslo:"));

if (jePrvocislo(cislo)) {
  console.log("Číslo je prvočíslo");
} else {
  console.log("Číslo není prvočíslo");
}