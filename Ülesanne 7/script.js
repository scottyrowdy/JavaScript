function kontrolliTahti(tekst) {
    let onTaisTahed = /^[a-zA-Z]+$/.test(tekst);
    if (onTaisTahed) {
        console.log("Sisestus sisaldab ainult tähti.");
    } else {
        console.log("Sisestus sisaldab muid märke peale tähtede.");
    }
}

// Näide kasutusest
let tekst = prompt("Sisesta tekst:");
kontrolliTahti(tekst);