function kontrolliArvu(arv) {
    if (arv >= 1 && arv <= 100 && arv % 7 === 0) {
        console.log("Arv on vahemikus 1 kuni 100 ja jagub 7-ga.");
    } else {
        console.log("Arv ei vasta tingimustele.");
    }

    if (arv < 100 || arv > 200) {
        console.log("Arv on alla 100 või üle 200.");
    } else {
        console.log("Arv ei vasta tingimustele.");
    }
}

// Näide kasutusest
let kasutajaSisestus = prompt("Sisesta arv:");
let kontrollitavArv = parseInt(kasutajaSisestus);
kontrolliArvu(kontrollitavArv);