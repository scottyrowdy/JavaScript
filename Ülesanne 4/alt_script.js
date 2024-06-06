function onPalindroom(tekst) {
    let puhasTekst = tekst.toLowerCase().replace(/[^a-z0-9]/g, '');
    let tagurpidiTekst = puhasTekst.split('').reverse().join('');
    return puhasTekst === tagurpidiTekst;
}

// Näide kasutusest
let tekst = prompt("Palun sisesta tekst:");
if (onPalindroom(tekst)) {
    console.log(`"${tekst}" on palindroom.`);
} else {
    console.log(`"${tekst}" ei ole palindroom.`);
}