function kuvaNadalaKuupaevi(sisestatudKuupaevaStr) {
    let kuupaevaObj = new Date(sisestatudKuupaevaStr);
    let nadal = [];
    let algusPaev = new Date(kuupaevaObj.setDate(kuupaevaObj.getDate() - kuupaevaObj.getDay()));

    for (let i = 0; i < 7; i++) {
        let paevObj = new Date(algusPaev);
        paevObj.setDate(algusPaev.getDate() + i);
        let paev = paevObj.toLocaleDateString('et-EE');
        let nadalapaev = paevObj.toLocaleDateString('et-EE', { weekday: 'long' });
        nadal.push(`${paev}, ${nadalapaev}`);
    }

    nadal.forEach(p => console.log(p));
}

// Näide kasutusest
let sisestatudKuupaevaStr = prompt("Sisesta kuupäev (YYYY-MM-DD):");
kuvaNadalaKuupaevi(sisestatudKuupaevaStr);