function naidNadalaKuupaevi(kuupaevaStr) {
    let kuupaevaObj = new Date(kuupaevaStr);
    let nadalaAlgus = new Date(kuupaevaObj);
    nadalaAlgus.setDate(kuupaevaObj.getDate() - kuupaevaObj.getDay());

    for (let i = 0; i < 7; i++) {
        let paev = new Date(nadalaAlgus);
        paev.setDate(nadalaAlgus.getDate() + i);
        console.log(`${paev.toLocaleDateString('et-EE')}, ${paev.toLocaleDateString('et-EE', { weekday: 'long' })}`);
    }
}

// Näide kasutusest
let kuupaevaSisestus = prompt("Sisesta kuupäev (YYYY-MM-DD):");
naidNadalaKuupaevi(kuupaevaSisestus);