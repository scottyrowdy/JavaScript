function onPalindroom(tekst) {
    tekst = tekst.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    let tagurpidiTekst = tekst.split('').reverse().join('');
    return tekst === tagurpidiTekst;
}

// Näide kasutusest
let sisestatudTekst = prompt("Sisesta tekst:");
if (onPalindroom(sisestatudTekst)) {
    console.log("Sisestatud tekst on palindroom.");
} else {
    console.log("Sisestatud tekst ei ole palindroom.");
}