function kontrolliAinultTahti(tekst) {
    let muster = /^[A-Za-z]+$/;
    if (muster.test(tekst)) {
        console.log("Sisestus sisaldab ainult tähti.");
    } else {
        console.log("Sisestus sisaldab muid märke peale tähtede.");
    }
}

// Näide kasutusest
let kasutajaSisestus = prompt("Sisesta tekst:");
kontrolliAinultTahti(kasutajaSisestus);